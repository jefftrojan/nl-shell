# Initial Issues for Contributors

These are suggested issues to create when the repository is pushed to GitHub. They provide good starting points for contributors.

## 🐛 Bug Fixes

### Issue #1: Add Error Handling for Network Timeouts
**Labels**: `bug`, `good-first-issue`
**Priority**: Medium

**Description**: Currently, if the AI provider API is slow or unresponsive, the CLI hangs indefinitely. We should add proper timeout handling and retry logic.

**Acceptance Criteria**:
- Add configurable timeout for API calls
- Implement retry logic with exponential backoff
- Show user-friendly error messages
- Add `--timeout` CLI option

**Files to Modify**:
- `src/providers/base-provider.js`
- `src/cli.js`
- `src/config.js`

---

### Issue #2: Improve Safety Filter for Edge Cases
**Labels**: `bug`, `security`, `good-first-issue`
**Priority**: High

**Description**: The current safety filter might miss some dangerous command patterns or be too restrictive for legitimate commands.

**Acceptance Criteria**:
- Review and improve regex patterns
- Add tests for edge cases
- Allow users to override safety checks with `--force` flag
- Document all blocked patterns

**Files to Modify**:
- `src/ai-shell.js` (safety filter)
- Add test files

---

## ✨ Features

### Issue #3: Add Command Aliases and Shortcuts
**Labels**: `enhancement`, `good-first-issue`
**Priority**: Medium

**Description**: Allow users to create custom aliases for frequently used commands or natural language queries.

**Acceptance Criteria**:
- Add `--alias` command to create shortcuts
- Store aliases in config file
- Support `npx ai-shell @alias-name`
- List aliases with `--aliases` flag

**Files to Modify**:
- `src/config.js`
- `src/cli.js`
- `src/ai-shell.js`

---

### Issue #4: Add Export/Import for Command History
**Labels**: `enhancement`, `good-first-issue`
**Priority**: Low

**Description**: Allow users to export their command history to share with others or backup.

**Acceptance Criteria**:
- `--export-history` flag to save history to file
- `--import-history` flag to load from file
- Support JSON and CSV formats
- Include metadata (timestamps, success/failure)

**Files to Modify**:
- `src/history.js`
- `src/cli.js`

---

### Issue #5: Add Interactive Mode
**Labels**: `enhancement`, `feature`
**Priority**: Medium

**Description**: Add an interactive mode where users can have a conversation with the AI to refine commands.

**Acceptance Criteria**:
- `--interactive` flag to start conversation mode
- Remember context from previous commands
- Allow command refinement
- Exit with Ctrl+C or `exit` command

**Files to Modify**:
- `src/cli.js`
- `src/ai-shell.js`
- Add new interactive module

---

## 🔧 Infrastructure

### Issue #6: Add Unit Tests
**Labels**: `testing`, `good-first-issue`
**Priority**: High

**Description**: The project currently lacks unit tests. Add comprehensive test coverage.

**Acceptance Criteria**:
- Set up Jest or Mocha test framework
- Add tests for all provider classes
- Add tests for CLI functionality
- Add tests for safety filters
- Achieve >80% code coverage

**Files to Create**:
- `tests/` directory
- `jest.config.js` or test configuration
- Test files for each module

---

### Issue #7: Add CI/CD Pipeline
**Labels**: `ci/cd`, `infrastructure`
**Priority**: Medium

**Description**: Set up GitHub Actions to run tests, linting, and automated releases.

**Acceptance Criteria**:
- Run tests on push/PR
- Run linting checks
- Automated npm publishing on release
- Status badges in README

**Files to Create**:
- `.github/workflows/ci.yml`
- `.github/workflows/release.yml`

---

### Issue #8: Add Code Linting and Formatting
**Labels**: `code-quality`, `good-first-issue`
**Priority**: Medium

**Description**: Add ESLint and Prettier for consistent code style.

**Acceptance Criteria**:
- Configure ESLint with Node.js rules
- Configure Prettier for formatting
- Add pre-commit hooks
- Update CI to check formatting

**Files to Create**:
- `.eslintrc.js`
- `.prettierrc`
- `package.json` scripts

---

## 📚 Documentation

### Issue #9: Add API Documentation
**Labels**: `documentation`, `good-first-issue`
**Priority**: Low

**Description**: Create comprehensive API documentation for developers who want to extend the project.

**Acceptance Criteria**:
- Document all public classes and methods
- Add JSDoc comments
- Generate API docs with JSDoc
- Add examples for extending providers

**Files to Modify**:
- Add JSDoc to all source files
- `docs/api.md`

---

### Issue #10: Add Video Tutorials
**Labels**: `documentation`, `community`
**Priority**: Low

**Description**: Create video tutorials showing how to use ai-shell effectively.

**Acceptance Criteria**:
- Basic usage tutorial
- Advanced features tutorial
- Troubleshooting guide
- Provider setup guides

---

## 🚀 Providers

### Issue #11: Add Cohere Provider
**Labels**: `provider`, `enhancement`
**Priority**: Medium

**Description**: Add support for Cohere's language models.

**Acceptance Criteria**:
- Implement CohereProvider class
- Add to provider factory
- Update config manager
- Add tests

**Files to Create**:
- `src/providers/cohere-provider.js`
- Update existing provider files

---

### Issue #12: Add Hugging Face Provider
**Labels**: `provider`, `enhancement`
**Priority**: Low

**Description**: Add support for Hugging Face's inference API.

**Acceptance Criteria**:
- Implement HuggingFaceProvider class
- Support multiple models
- Handle API rate limits
- Add tests

---

## 🎯 Good First Issues Summary

For new contributors, start with these issues:
1. **#1** - Add Error Handling for Network Timeouts
2. **#2** - Improve Safety Filter for Edge Cases  
3. **#3** - Add Command Aliases and Shortcuts
4. **#6** - Add Unit Tests
5. **#8** - Add Code Linting and Formatting

These issues are well-scoped and provide good learning opportunities for the codebase. 