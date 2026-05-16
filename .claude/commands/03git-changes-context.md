---
description: Create a commit message by analyzing git diffs
allowed-tools: Bash(git status:*), Bash(git diff --staged), Bash(git diff), Bash(git add:*), Bash(git commit:*)
---

## Context:

- Current git status: !`git status`
- Staged changes: !`git diff --staged`
- Unstaged changes: !`git diff`

Analyze the staged and unstaged git changes above. Show them in two clear categories. Then create a commit message based on the staged changes only. Use present tense and explain "why" something has changed, not just "what" has changed.

## Commit types with emojis:

Only use the following emojis:

- ✨ `feat:` - New feature
- 🐛 `fix:` - Bug fix
- 🔨 `refactor:` - Refactoring code
- 🎨 `style:` - Styling/formatting
- ✅ `test:` - Tests
- ⚡ `perf:` - Performance

## Format:

Use the following format for making the commit message:

```
<emoji> <type>: <concise_description>
<optional_body_explaining_why>
```

## Output:

Display all changed files in a single table with a status column to avoid duplication. Each file appears only once.

| File            | Change                            | Status            |
| --------------- | --------------------------------- | ----------------- |
| path/to/file.ts | short description of what changed | staged / unstaged |

Then:

1. Propose a commit message based on staged changes only, with appropriate emoji
2. Ask for confirmation before committing

DO NOT auto-commit — wait for user approval, and only commit if the user says so.
