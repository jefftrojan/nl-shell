# Contributing to NLShell

Thank you for your interest in contributing! We welcome all kinds of contributions: bug reports, feature requests, code, and documentation.

## Getting Started

1. **Fork the repository** and clone your fork:
   ```bash
   git clone https://github.com/yourusername/ai-shell.git
   cd ai-shell
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the setup wizard:**
   ```bash
   node index.js --setup
   ```

4. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Test your setup:**
   ```bash
   node index.js "list files" --dry-run
   ```

## Branching Strategy

- `main`: Stable, production-ready code.
- `dev`: Ongoing development. All PRs should target `dev`.
- `feature/*`, `fix/*`, `docs/*`: Use descriptive branch names for features, fixes, and documentation.

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

```
feat(provider): add support for Anthropic Claude
fix(cli): handle missing config gracefully
docs(readme): update usage examples
feat(setup): add interactive setup wizard
```

## Pull Requests

- Target the `dev` branch.
- Describe your changes clearly.
- Reference related issues (e.g., `Closes #12`).
- Ensure your code passes linting and tests.
- Add or update documentation as needed.
- Test with multiple AI providers if applicable.

## Code Style

- Use ES modules (`import`/`export`).
- 2-space indentation.
- Use `prettier` for formatting (coming soon).
- Follow existing patterns for error handling and user feedback.

## Development Guidelines

### Adding New AI Providers

1. Add the provider to `src/ai-shell.js`
2. Update the setup wizard in `src/cli.js`
3. Add provider-specific error handling
4. Update documentation
5. Test with the new provider

### Testing

```bash
# Test basic functionality
node index.js "list files" --dry-run

# Test explanation feature
node index.js "show disk usage" --explain --dry-run

# Test setup wizard
node index.js --setup

# Test history
node index.js --history
```

## Reporting Issues

- Use [GitHub Issues](../../issues) for bugs, features, and questions.
- Provide as much detail as possible:
  - OS and Node.js version
  - AI provider being used
  - Steps to reproduce
  - Expected vs actual behavior
  - Error messages

## Community

- Be respectful and inclusive. See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).
- Join discussions in [GitHub Discussions](../../discussions).
- Help others in the community.

## Release Process

1. All changes go through the `dev` branch
2. When ready for release:
   - Merge `dev` into `main`
   - Update version in `package.json`
   - Create a release tag
   - Publish to npm

---

Thank you for helping make NLShell better! 🎉 