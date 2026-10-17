mod args;

pub use args::CliArgs;
use clap::Parser;
use rocha_transform::{transform_file_and_cache, DiskCache, Options, DEFAULT_MAX_CACHE_BYTES};
use std::path::PathBuf;

fn main() -> anyhow::Result<()> {
    let args = CliArgs::parse();

    if let Some(file_path_str) = args.transform {
        let file_path = PathBuf::from(file_path_str);
        let project_root = std::env::var("ROCHA_PROJECT_ROOT")
            .map(PathBuf::from)
            .unwrap_or_else(|_| std::env::current_dir().unwrap_or_else(|_| PathBuf::from(".")));
        let cache_dir = std::env::var("ROCHA_CACHE_DIR")
            .map(PathBuf::from)
            .unwrap_or_else(|_| project_root.join(".rocha").join("cache").join("v1"));

        let node_version =
            std::env::var("ROCHA_NODE_CLASS").unwrap_or_else(|_| "node20".to_string());

        let cache = DiskCache::new(&cache_dir, DEFAULT_MAX_CACHE_BYTES)?;
        let options = Options::default();
        let entry = transform_file_and_cache(&file_path, &options, &cache, &node_version)?;

        println!("{}", entry.code);
        return Ok(());
    }

    println!("rocha {}", env!("CARGO_PKG_VERSION"));
    Ok(())
}
