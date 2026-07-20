# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A personal learning journal for the Scrimba course "Learn HTML and CSS"
(https://scrimba.com/learn-html-and-css-c0p — recorded in `note.md`). It is **not** an
application: there is no build system, no package manager, no tests, no dependencies.
Every file is a static `.html` / `.css` pair opened directly in a browser
(`start <file>.html` on Windows, or a Live Server extension).

Because it is a learning artifact, the code is deliberately beginner-level and the
git history is the real structure: one commit per lesson, message in French or English
describing the concept learned (`learning about margins`, `introduction aux <div>`).
Use `git log --oneline` to see how far along the course the author is.

## Directory layout = course progression

The three directories are course sections, in chronological order:

1. `build-and-deploy-your-first-website/` — HTML only, no CSS. `lesson1.html` … `lesson13-personal-website.html`.
2. `intro-to-CSS/` — CSS fundamentals. Each lesson is a `lessonN-<topic>.html` plus its own `lessonN-style.css`.
   Odd-numbered lessons introduce a concept; the following lesson usually applies it to a Google
   homepage clone (`lesson2-google.html`, `lesson7-margin-google.html`, `lesson9-centering-google.html`,
   `lesson13-google.html`, `lesson16-google-flexbox.html`). That Google clone is the recurring exercise —
   comparing successive versions shows exactly what each new CSS concept bought.
3. `building-business-card/` — the first project with conventional names (`index.html`, `style.css`,
   `images/`) rather than lesson-numbered ones, plus `advanced-flex.html`.

## Conventions to follow

- **One stylesheet per lesson.** Never make `lessonN.html` link a stylesheet from another lesson —
  each pair is a self-contained snapshot. New lesson ⇒ new `lessonN-topic.html` + `lessonN-style.css`.
- Never edit earlier lessons to "fix" or modernise them. Old files intentionally show old knowledge
  (e.g. `lesson13-personal-website.html` has an empty `<head>` and no CSS). Rewriting them destroys
  the record of progress.
- Images live beside the HTML that uses them, except in `building-business-card/` which uses `images/`.
  `google.png` and `guido.jpg` are duplicated across directories on purpose — relative paths must stay local.
- Class-based selectors, 4-space indent, no external CSS frameworks or CDN links.

## Working with the author

Guilhem is learning this material for the first time; the point is the learning, not the output.
Prefer explaining the concept and letting him write the code over producing a finished file.
When he asks for a fix, say what was wrong and why, and stick to CSS/HTML features already covered
by the lessons committed so far — introducing grid, custom properties, or JavaScript into a
flexbox lesson defeats the exercise.
