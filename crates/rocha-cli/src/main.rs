use clap::Parser;

#[derive(Parser, Debug)]
#[command(name = "rocha", version = env!("CARGO_PKG_VERSION"), about = "A fast native test orchestrator for Mocha-style test suites")]
struct Cli {
    #[arg(short, long)]
    verbose: bool,
}

fn main() -> anyhow::Result<()> {
    let _cli = Cli::parse();
    println!("rocha {}", env!("CARGO_PKG_VERSION"));
    Ok(())
}
