# Contributing to ai-shell

Thank you for your interest in contributing! We welcome all kinds of contributions: bug reports, feature requests, code, and documentation.

## Getting Started

1. **Fork the repository** and clone your fork.
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
```

## Pull Requests

- Target the `dev` branch.
- Describe your changes clearly.
- Reference related issues (e.g., `Closes #12`).
- Ensure your code passes linting and tests.
- Add or update documentation as needed.

## Code Style

- Use ES modules (`import`/`export`).
- 2-space indentation.
- Use `prettier` for formatting (coming soon).

## Reporting Issues

- Use [GitHub Issues](../../issues) for bugs, features, and questions.
- Provide as much detail as possible (OS, Node version, steps to reproduce).

## Community

- Be respectful and inclusive. See [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

---

Thank you for helping make ai-shell better! 🎉 