---
description: Implement Authentication Login and Signup Forms
allowed-tools: Read, Write, Edit, Glob, Bash
---

# Spec for auth-login-signup-forms

branch: claude/feature/auth-login-signup-forms-04
figma_component (if used): N/A

## Summary
Add authentication forms for the `/login` and `/signup` pages. Each page renders a dedicated form with email and password fields, a toggle to show/hide the password, and a submit button. On submission the form logs the entered details to the console. Users can easily navigate between the login and signup forms via a switcher link or button.

## Functional Requirements
- The `/login` page renders a login form with:
  - An email input field
  - A password input field with a show/hide toggle icon
  - A "Login" submit button
- The `/signup` page renders a signup form with:
  - An email input field
  - A password input field with a show/hide toggle icon
  - A "Sign Up" submit button
- Clicking the show/hide icon toggles the password field between masked and plain text
- On form submission, the form data (email and password) is logged to the browser console — no API call is made
- Each form includes a visible link/button that navigates the user to the other form (e.g. "Don't have an account? Sign up" on login, "Already have an account? Log in" on signup)

## Figma Design Reference (only if referenced)
N/A

## Possible Edge Cases
- User submits the form with empty fields — form should not log and ideally indicate required fields
- User rapidly toggles the password visibility — the field value must be preserved
- User navigates between login and signup — any typed values should not persist across pages

## Acceptance Criteria
- `/login` renders a form with email field, password field with toggle icon, and a "Login" button
- `/signup` renders a form with email field, password field with toggle icon, and a "Sign Up" button
- Clicking the eye/hide icon on the password field toggles its visibility
- Submitting either form logs `{ email, password }` to the browser console
- Each form has a clearly visible link to switch to the other form
- Switching between forms navigates to the correct route (`/login` ↔ `/signup`)

## Open Questions
- Should the two forms share a single reusable form component, or be implemented independently per page? yes please
- Should the switch between forms use client-side navigation or a full page redirect? yes please
- Should empty-field validation be shown inline (e.g. red border) or via a simple browser `required` attribute? yes please

## Testing Guidelines
Create test files in the ./tests folder for the new feature, and create meaningful tests for the following cases, without going too heavy.
- Renders the login form with email, password, and submit button
- Renders the signup form with email, password, and submit button
- Password toggle switches the input type between `password` and `text`
- Submitting the form calls `console.log` with the correct email and password values
- The switch link on the login form points to `/signup` and vice versa
