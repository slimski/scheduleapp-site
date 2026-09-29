# dontmissnextgame-site

The public website for **Don't Miss Next Game** at
[dontmissnextgame.com](https://dontmissnextgame.com): a one-page app
description (`index.html`) and the app's privacy policy (`privacy.html`).

## This repository is public

It's served by GitHub Pages, so everything committed here — every file, every
commit message, all history — is readable by anyone. Write nothing here you
wouldn't put on the website itself. In particular, never commit:

- server hostnames, ports, IP addresses, or anything about infrastructure
- API keys, tokens, auth headers, `.env` files, or other credentials
- internal notes, specs, roadmap, unreleased features, or audit findings
- names or paths of other (private) repositories
- screenshots from a development build, or showing personal notifications,
  messages or accounts

This file follows the same rule. Project context and the maintenance runbook
live outside this repo; on the maintainer's machine, a gitignored
`CLAUDE.local.md` next to this file says where. If it isn't there, ask before
making content changes.

## How it works

Plain HTML with Bootstrap 5.3.0-alpha1 from jsDelivr (pinned with SRI hashes).
No build step, no package.json, no JavaScript of our own. GitHub Pages serves
`main` directly; `CNAME` sets the custom domain. **A push to `main` is a
deploy.** Preview by opening the file, or `python3 -m http.server` here.

The two pages share a hand-copied header and footer — change one, change both.

## Git

Commit straight to `main`.
