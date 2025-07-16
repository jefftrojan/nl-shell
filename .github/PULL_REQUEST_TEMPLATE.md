## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] AI provider addition/update
- [ ] Setup wizard improvement
- [ ] Safety feature enhancement
- [ ] UI/UX improvement

## Related Issues
Closes #[issue number]

## Testing
- [ ] I have tested this change locally
- [ ] I have tested with multiple AI providers (if applicable)
- [ ] I have tested the setup wizard (if applicable)
- [ ] I have tested safety features (if applicable)
- [ ] I have added/updated tests (if applicable)
- [ ] All tests pass

## Testing Commands Used
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

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] I have updated help text and CLI options (if applicable)
- [ ] I have tested error handling scenarios

## Screenshots (if applicable)
Add screenshots to help explain your changes, especially for UI/UX improvements.

## Additional Notes
Any additional information or context for reviewers, including:
- Breaking changes and migration steps
- Performance implications
- Security considerations
- Provider-specific considerations 