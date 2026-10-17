mod args;

pub use args::CliArgs;
use clap::Parser;

fn main() -> anyhow::Result<()> {
    let _args = CliArgs::parse();
    println!("rocha {}", env!("CARGO_PKG_VERSION"));
    Ok(())
}
