---
name: git-workflow
description: How to make any change to this repo — branch naming, commit message format, and PR creation. Use this for every code change in julio-esparza-web, no matter how small (content edit in data.js, CSS tweak, CI fix). Never commit directly to main.
---

# Git workflow for julio-esparza-web

This repo deploys to a live GitHub Pages site (`main` branch triggers
`.github/workflows/deploy.yml`). Changes go through a branch + PR, not
direct commits to `main` — that way nothing reaches production without
a deliberate merge, and there's a review point before deploy.

## Steps for every change

1. **Branch from `main`**, named `type/short-description`:
   ```
   git checkout main && git pull
   git checkout -b feat/add-og-image
   ```
   Pick `type` from the same list used for commits (below). Keep the
   description short, lowercase, hyphenated — it should read like a
   changelog entry (`fix/pages-deploy-permissions`, not `fix/bug`).

2. **Make the change, then commit using Conventional Commits:**
   ```
   <type>(<optional scope>): <short imperative summary>
   ```
   Types: `feat`, `fix`, `chore`, `docs`, `refactor`, `style`, `perf`,
   `test`, `ci`. Scope is the area touched when it adds clarity
   (`data`, `css`, `deploy`, `hero`) — omit it if the summary is
   already clear without one.

   Examples:
   - `feat(data): add Neuron 2025 paper to publications list`
   - `fix(deploy): grant administration:write for Pages auto-enablement`
   - `style(css): tighten hero spacing on mobile breakpoint`

   Do not add a `Co-Authored-By: Claude` trailer to commits in this
   repo — the user has explicitly asked for it to be omitted.

3. **Push the branch and open a PR** (requires `gh` authenticated):
   ```
   git push -u origin <branch-name>
   gh pr create --title "<same as commit summary, or a roll-up if multiple commits>" --body "..."
   ```
   Keep the PR body short: what changed and why, not a restatement of
   the diff.

4. **Stop there.** The user merges the PR on GitHub themselves —
   do not merge it, even if `gh` would let you. If they ask you to
   merge or push directly to `main`, treat that as an explicit
   exception for that one case, not a standing change to this workflow.

## Why this exists

The user asked for this after several direct pushes to `main` to debug
the GitHub Pages deploy workflow — branch+PR gives a checkpoint before
anything reaches the live site, and keeps `main`'s history of
deploy-affecting changes reviewable.
