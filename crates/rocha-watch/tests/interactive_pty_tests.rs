use rocha_watch::{InteractiveAction, InteractiveController};
use std::io::Cursor;

#[cfg(unix)]
use std::fs::File;
#[cfg(unix)]
use std::io::Write;
#[cfg(unix)]
use std::os::unix::io::FromRawFd;

#[test]
#[cfg(unix)]
fn test_pty_interactive_controls_keystrokes() {
    let mut master: libc::c_int = -1;
    let mut slave: libc::c_int = -1;

    let ret = unsafe {
        libc::openpty(
            &mut master,
            &mut slave,
            std::ptr::null_mut(),
            std::ptr::null_mut(),
            std::ptr::null_mut(),
        )
    };
    assert_eq!(ret, 0, "openpty must succeed");

    let is_pty = unsafe { libc::isatty(slave) == 1 };
    assert!(is_pty, "slave must be a real tty");

    let mut writer_master = unsafe { File::from_raw_fd(master) };
    let mut reader_slave = unsafe { File::from_raw_fd(slave) };
    let mut out_sink = Vec::new();

    let mut controller = InteractiveController::new(true);

    // 1. Key 'a' -> RunAll
    let action_a = controller.handle_key('a', &mut reader_slave, &mut out_sink);
    assert_eq!(action_a, InteractiveAction::RunAll);

    // 2. Key 'f' -> RunFailedOnly
    let action_f = controller.handle_key('f', &mut reader_slave, &mut out_sink);
    assert_eq!(action_f, InteractiveAction::RunFailedOnly);

    // 3. Key 'p' with pattern filter
    writer_master.write_all(b"test/unit/**/*.js\n").unwrap();
    writer_master.flush().unwrap();
    let action_p = controller.handle_key('p', &mut reader_slave, &mut out_sink);
    assert_eq!(
        action_p,
        InteractiveAction::FilterByFile("test/unit/**/*.js".to_string())
    );
    assert_eq!(controller.file_filter.as_deref(), Some("test/unit/**/*.js"));

    // 4. Key 'g' with grep filter
    writer_master.write_all(b"should authenticate\n").unwrap();
    writer_master.flush().unwrap();
    let action_g = controller.handle_key('g', &mut reader_slave, &mut out_sink);
    assert_eq!(
        action_g,
        InteractiveAction::FilterByGrep("should authenticate".to_string())
    );
    assert_eq!(
        controller.grep_filter.as_deref(),
        Some("should authenticate")
    );

    // 5. Key 'q' -> Quit
    let action_q = controller.handle_key('q', &mut reader_slave, &mut out_sink);
    assert_eq!(action_q, InteractiveAction::Quit);
}

#[test]
fn test_interactive_controls_disabled_when_not_tty() {
    let mut controller = InteractiveController::new(false);
    let mut reader = Cursor::new(b"a\n");
    let mut writer = Vec::new();

    // All keys must return None when not a TTY
    assert_eq!(
        controller.handle_key('a', &mut reader, &mut writer),
        InteractiveAction::None
    );
    assert_eq!(
        controller.handle_key('f', &mut reader, &mut writer),
        InteractiveAction::None
    );
    assert_eq!(
        controller.handle_key('q', &mut reader, &mut writer),
        InteractiveAction::None
    );
}
