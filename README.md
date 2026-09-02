# Project Archie

*Illuminating Leadership. Empowering People of Action.*

Archie is a community-built AI companion for Rotary district leaders. It answers policy and governance questions with citations to the specific Rotary International documents that apply, and it tells you how confident it is in each answer. Legal, financial, insurance, and youth-safety matters are sent to the people who handle them rather than answered with a guess.

Archie is not an official RI product. It is built on publicly available RI governing documents. Feedback and contributions: archie4rotary@gmail.com.

## What is in this repository

- `rotary-archie/` is the Archie skill: a folder of instructions plus its own copy of the seven RI governing documents for the 2025 Rotary year. Install it once on any assistant that supports skills and you have Archie.
- `docs/install/` has step-by-step install guides per platform.
- `docs/add-memory-projects.md` explains the optional Projects layer (conversation memory, your own district files).
- `docs/instructions/` holds the paste-in instruction texts for Projects and the public Custom GPT.
- `CHANGELOG.md` lists what changed in each version.

## Install Archie

Download `rotary-archie.zip` from the [latest release](https://github.com/archie4rotary/project-archie/releases/latest), then follow the guide for your assistant.

| Assistant | Plans that support skills | Guide |
|---|---|---|
| Claude | Free, Pro, Max, Team, Enterprise | [docs/install/claude.md](docs/install/claude.md) |
| ChatGPT | Business, Enterprise, Edu, Healthcare (not Plus or Pro) | [docs/install/chatgpt.md](docs/install/chatgpt.md) |
| Gemini | Google AI Pro or Ultra (personal accounts, Gemini Spark) | [docs/install/gemini.md](docs/install/gemini.md) |
| Grok | SuperGrok, SuperGrok Heavy | [docs/install/grok.md](docs/install/grok.md) |
| Command-line agents (Claude Code, Codex, Gemini CLI, Grok Build) | `npx skills add archie4rotary/project-archie` | [docs/install/cli.md](docs/install/cli.md) |

If you would rather not install anything, use the public Archie GPT on ChatGPT: https://bit.ly/project-archie

## Check your version

Ask Archie: **"What version are you?"** It answers with its version and date. Compare with the latest release above. When a new version is out, download the new zip and upload it the same way you installed the first time.

Get notified: on this page click **Watch**, then **Custom**, then tick **Releases**.

## Rotary year updates

RI publishes revised governing documents each July. Archie's version number starts with the Rotary year of its documents (2025.x.x means the 2025 Rotary year, July 2025 to June 2026). A new Rotary year is a new first number.

## License

Archie's own text (the skill instructions, references, and guides) is licensed under Creative Commons Attribution 4.0. The Rotary International documents inside `rotary-archie/knowledge-base/` are copyright Rotary International, reproduced from publicly available publications, and are not covered by that license. See [LICENSE](LICENSE).
