# Git Workflow for ai-shell

## Branch Structure

```
main (stable, production-ready)
└── dev (ongoing development)
    └── feature/* (individual features)
    └── fix/* (bug fixes)
    └── docs/* (documentation)
```

## Current Commits

1. **`1a3548a`** (main) - Initial project setup: Node.js CLI, multi-provider AI shell, config, safety, docs, and test infra
2. **`3f3977f`** (dev) - docs: add contributing guide, code of conduct, license, and architecture/usage docs  
3. **`59f3e47`** (dev) - feat: add GitHub issue/PR templates and initial contributor issues

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

## Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(provider): add support for Anthropic Claude
fix(cli): handle missing config gracefully
docs(readme): update usage examples
test(providers): add unit tests for OpenAI provider
refactor(ai-shell): improve error handling
```

## Next Steps

1. **Push to GitHub**: Create a repository and push both branches
2. **Create Issues**: Use the templates in `.github/ISSUE_TEMPLATE/`
3. **Set up CI/CD**: Add GitHub Actions workflows
4. **Add Tests**: Implement unit tests for all modules
5. **Publish to npm**: Make the package available via `npx ai-shell`

## Branch Protection Rules (Recommended)

When you push to GitHub, set up these branch protection rules:

- **main**: Require PR reviews, status checks, and up-to-date branches
- **dev**: Require status checks and up-to-date branches
- **feature/*, fix/*, docs/***: No restrictions (for contributors)

## Release Process

1. Ensure all tests pass on `dev`
2. Merge `dev` into `main`
3. Create a git tag: `git tag v1.0.0`
4. Push tag: `git push origin v1.0.0`
5. Create GitHub release with changelog
6. Publish to npm (if applicable) 