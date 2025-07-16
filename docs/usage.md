# ai-shell Usage Guide

## Basic Usage

```sh
npx ai-shell "list all files in current directory"
```

## Options

- `--explain` — Explain what the command does
- `--dry-run` — Show the command, do not execute
- `--history` — Show command history
- `--setup` — Run the setup/config wizard
- `--config` — Show current configuration

## Example Commands

```sh
npx ai-shell "find all python files" --dry-run
npx ai-shell "show disk usage" --explain
npx ai-shell --history
```

## Changing Provider or Model

```sh
npx ai-shell --setup
```

## Adding a New Provider (for contributors)

1. Implement a new provider in `src/providers/`.
2. Register it in `src/providers/index.js` and `src/config.js`.
3. Add tests and update documentation.

## Troubleshooting

- If you see `No configuration found`, run `npx ai-shell --setup`.
- If a command is blocked, it may be considered dangerous by the safety filter.
- For API errors, check your API key and provider status.

## More

- See [README.md](../README.md) for full project info.
- See [CONTRIBUTING.md](../CONTRIBUTING.md) for how to contribute. 