---
description: Create a feature spec file and branch from a short idea
argument-hint: Short feature description
allowed-tools: Read, Write, Glob, Bash(git switch:*)
---

You are helping to spin up a new feature spec for this application, from a short idea provided in the user input below. Always adhere to any rules or requirements set out in any CLAUDE.md files when responding.

User input: $ARGUMENTS

## High level behavior

Your job will be to turn the user input above into:

- A human friendly feature title in kebab-case (e.g. new-heist-form)
- A safe git branch name not already taken (e.g. claude/feature/new-heist-form)
- A command file under `.claude/commands/_specs/features/` that the user can invoke to implement the feature

Then save the command file to disk and print a short summary of what you did.

## Step 1. Check the current branch

Check the current Git branch. Note the branch name for use in later steps. Do not abort if there are uncommitted, staged, or untracked files — continue regardless of working directory state.

## Step 2. Parse the arguments

From `$ARGUMENTS`, extract:

1. `feature_title`
   - A short, human readable title in Title Case.
   - Example: "Card Component for Dashboard Stats".

2. `feature_slug`
   - A git safe slug.
   - Rules:
     - Lowercase
     - Kebab-case
     - Only `a-z`, `0-9` and `-`
     - Replace spaces and punctuation with `-`
     - Collapse multiple `-` into one
     - Trim `-` from start and end
     - Maximum length 40 characters
   - Example: `card-component` or `card-component-dashboard`.

3. `branch_name`
   - Format: `claude/feature/<feature_slug>`
   - Example: `claude/feature/card-component`.

If you cannot infer a sensible `feature_title` and `feature_slug`, ask the user to clarify instead of guessing.

## Step 3. Switch to a new Git branch

Before making any content, switch to a new Git branch using the `branch_name` derived from the `$ARGUMENTS`. If the branch name is already taken, then append a version number to it: e.g. `claude/feature/card-component-01`

## Step 4. Create the command file

Create a command file at `.claude/commands/_specs/features/<feature_slug>.md` using the exact structure defined in the template here: @.claude/commands/\_specs/02template.md. Replace all `<feature-name>` placeholders with the actual `feature_slug`, and the description frontmatter value with `Implement <feature_title>`. Do not add technical implementation details such as code examples.

## Step 5. Final output to the user

After the file is saved, respond to the user with a short summary in this exact format:

Branch: <branch_name>
Command: .claude/commands/\_specs/features/<feature_slug>.md
Title: <feature_title>

Do not repeat the full spec in the chat output unless the user explicitly asks to see it. The main goal is to save the command file and report where it lives and what branch name to use.
