# Git Workflow for NLShell

## Branch Structure

```
main (stable, production-ready)
└── dev (ongoing development)
    └── feature/* (individual features)
    └── fix/* (bug fixes)
    └── docs/* (documentation)
```

## Current Status

### Published Versions
- **v1.0.0**: Initial release with multi-provider AI support
- **v1.0.1**: Added uninstall command and improved setup wizard

### Key Features Implemented
- ✅ Multi-provider AI support (OpenAI, Anthropic, Google, Ollama)
- ✅ Interactive setup wizard
- ✅ Command history with timestamps
- ✅ Safety filters for dangerous commands
- ✅ Beautiful UI with colors and spinners
- ✅ Global npm package (`nlshell`)
- ✅ Comprehensive documentation
- ✅ GitHub templates and workflows

## Workflow

### For Contributors
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make changes and commit with conventional commits
4. Push to your fork
5. Create a PR targeting the `dev` branch

### For Maintainers
1. Work on `dev` branch for new features
2. Merge feature branches into `dev`
3. When ready for release, merge `dev` into `main`
4. Tag releases on `main`
5. Publish to npm

## Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(provider): add support for Anthropic Claude
fix(cli): handle missing config gracefully
docs(readme): update usage examples
test(providers): add unit tests for OpenAI provider
refactor(ai-shell): improve error handling
feat(setup): add interactive setup wizard
fix(safety): improve dangerous command detection
```

## Development Commands

### Testing
```bash
# Basic functionality
node index.js "list files" --dry-run

# With explanation
node index.js "show disk usage" --explain --dry-run

# Setup wizard
node index.js --setup

# History
node index.js --history
```

### Publishing
```bash
# Login to npm
npm login

# Publish new version
npm publish

# Update version
npm version patch  # or minor/major
```

## Branch Protection Rules (Recommended)

When you push to GitHub, set up these branch protection rules:

- **main**: Require PR reviews, status checks, and up-to-date branches
- **dev**: Require status checks and up-to-date branches
- **feature/*, fix/*, docs/***: No restrictions (for contributors)

## Release Process

1. Ensure all tests pass on `dev`
2. Merge `dev` into `main`
3. Update version in `package.json`
4. Create a git tag: `git tag v1.0.2`
5. Push tag: `git push origin v1.0.2`
6. Create GitHub release with changelog
7. Publish to npm: `npm publish`

## Next Steps

### Version 1.x Enhancements
- 🔄 Enhanced error handling
- 🔄 More AI providers
- 🔄 Plugin system
- 🔄 Performance optimizations

### Version 2.0 - Agentic Features
- **Session Memory**: Remember context across multiple commands
- **Multi-step Reasoning**: Break complex tasks into steps
- **Learning Mode**: Learn from user corrections and preferences
- **Autonomous Decision Making**: Execute safe commands automatically
- **Multi-agent Collaboration**: Use multiple AI providers for complex tasks

## Issue Management

### Issue Templates
- **Bug Report**: For reporting bugs and issues
- **Feature Request**: For suggesting new features
- **Provider Request**: For requesting new AI provider support

### Issue Labels
- `bug`: Bug reports
- `enhancement`: Feature requests
- `provider`: AI provider related
- `needs-triage`: Needs review
- `good first issue`: Good for new contributors
- `help wanted`: Needs community help

## Community Guidelines

- Be respectful and inclusive (see [CODE_OF_CONDUCT.md](../CODE_OF_CONDUCT.md))
- Use issue templates for bug reports and feature requests
- Test thoroughly before submitting PRs
- Update documentation for new features
- Help others in the community 