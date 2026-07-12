```markdown
# vue-sample-project Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill introduces the core development patterns and conventions used in the `vue-sample-project` repository. The project is written in TypeScript and does not use a specific framework. You'll learn about file naming, import/export styles, commit patterns, and how to work with tests in this codebase.

## Coding Conventions

### File Naming
- **PascalCase** is used for file names.
  - Example: `MyComponent.ts`, `UserService.ts`

### Import Style
- **Relative imports** are preferred.
  - Example:
    ```typescript
    import { UserService } from './UserService';
    ```

### Export Style
- **Named exports** are used instead of default exports.
  - Example:
    ```typescript
    // UserService.ts
    export function getUser() { ... }
    export const USER_ROLE = 'admin';
    ```

### Commit Patterns
- Commit messages are **freeform** (no strict type or scope).
- Some commits use prefixes, but not consistently.
- Average commit message length: **49 characters**.
  - Example: `Add user authentication logic`

## Workflows

### General Development
**Trigger:** When adding or updating features or bug fixes  
**Command:** `/dev-workflow`

1. Create or update files using PascalCase naming.
2. Use relative imports for dependencies.
3. Export functions, types, or constants as named exports.
4. Write clear, concise commit messages (freeform style).

### Testing
**Trigger:** When writing or updating tests  
**Command:** `/test-workflow`

1. Create test files matching the pattern `*.test.*` (e.g., `UserService.test.ts`).
2. Place test files alongside the modules they test or in a dedicated test directory.
3. Use the (unspecified) testing framework conventions.
4. Run tests to ensure correctness.

## Testing Patterns

- Test files follow the `*.test.*` naming pattern.
  - Example: `MyComponent.test.ts`
- The specific testing framework is **unknown**; follow general TypeScript testing best practices.
- Place tests near the code they cover or in a `tests/` directory.

## Commands
| Command         | Purpose                                  |
|-----------------|------------------------------------------|
| /dev-workflow   | Follow general development conventions   |
| /test-workflow  | Set up and run tests for your code       |
```