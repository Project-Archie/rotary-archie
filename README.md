# Project Archie

*Illuminating Leadership. Empowering People of Action.*

**New here? Start at the [Archie website](https://project-archie.github.io/rotary-archie/).** It walks you through installing in plain language.

Archie is a community-built AI companion for Rotary district leaders. It answers policy and governance questions with citations to the specific Rotary International documents that apply, and it tells you how confident it is in each answer. Legal, financial, insurance, and youth-safety matters are sent to the people who handle them rather than answered with a guess.

Archie is a community project, not an official Rotary International product, and Rotary International has not endorsed it. It answers from governing documents that RI publishes on My Rotary; the [sources page](https://project-archie.github.io/rotary-archie/about/sources/) lists each one with its edition and a link to RI's copy. Feedback and contributions: archie4rotary@gmail.com.

## What is in this repository

- `plugins/rotary-archie/skills/rotary-archie/` is the Archie skill: a folder of instructions plus its own copy of the eight RI governing documents for the 2026 Rotary year. Install it once on any assistant that supports skills and you have Archie.
- `.claude-plugin/marketplace.json` makes this repository a Claude Code plugin marketplace. Each folder under `plugins/` holds one skill.
- `docs/install/` has step-by-step install guides per platform.
- `docs/add-memory-projects.md` explains the optional Projects layer (conversation memory, your own district files).
- `docs/instructions/` holds the paste-in instruction texts for Projects, plus the older Custom GPT text. The public Archie GPT stops working on December 11, 2026.
- `CHANGELOG.md` lists what changed in each version.

## Install as a Claude Code plugin

This repository is also a Claude Code plugin marketplace. In Claude Code:

```
/plugin marketplace add Project-Archie/rotary-archie
/plugin install rotary-archie@project-archie
```

Restart Claude Code afterwards. Update later with `/plugin marketplace update project-archie`. The marketplace also carries `rotary-brand-voice`, an optional companion for Rotary writing and design; install it the same way if you want it. Outside Claude Code, the companion's packages sit on the same release page as Archie's: `rotary-brand-voice.zip` (Claude, ChatGPT, Grok upload) and `rotary-brand-voice-v0.2.4.skill` (Claude Desktop). Companion versions move independently of Archie's.

## Install Archie

Download the newest zip by clicking [this link](https://github.com/Project-Archie/rotary-archie/releases/latest/download/rotary-archie.zip). Your browser saves `rotary-archie.zip`. If the link does not work, open the [latest release](https://github.com/Project-Archie/rotary-archie/releases/latest) and click `rotary-archie.zip` under **Assets**. Then follow the guide for your assistant. Claude desktop app users can double-click `rotary-archie-v2026.1.3.skill` from the same **Assets** list.

| Assistant | Plans that support skills | Guide |
|---|---|---|
| Claude | Every plan, including Free. Paid plans can also add Archie from GitHub | [docs/install/claude.md](docs/install/claude.md) |
| ChatGPT | Plus, and work and school workspaces. Archie answers in Work mode only. Not available on Free | [docs/install/chatgpt.md](docs/install/chatgpt.md) |
| Grok | SuperGrok, SuperGrok Heavy | [docs/install/grok.md](docs/install/grok.md) |
| Command-line agents (Claude Code, Codex, Gemini CLI, Grok Build) | `npx skills add Project-Archie/rotary-archie` | [docs/install/cli.md](docs/install/cli.md) |

The public Archie GPT stops working on December 11, 2026, when OpenAI ends Custom GPTs. If the skill will not load for you, for example on ChatGPT Free, use Claude's free plan with the same file. On ChatGPT Go, Plus or higher you can also set up a ChatGPT Project with pasted instructions and the eight Rotary documents uploaded by hand (a Free project holds only five files). See [docs/add-memory-projects.md](docs/add-memory-projects.md).

The Gemini app is not supported yet. Google's skills feature is in beta and, in our tests, mixed web search results into Archie's answers. It will be added when it passes the same checks as the others.

## Check your version

Ask Archie: **"What version of Archie are you?"** It answers with its version and date. Compare with the latest release above. When a new version is out, download the new zip and upload it the same way you installed the first time.

Get notified: on this page click **Watch**, then **Custom**, then tick **Releases**.

## Where the documents come from and how Archie stays current

The eight governing documents inside Archie are published by Rotary International (RI) on My Rotary. The [sources page](https://project-archie.github.io/rotary-archie/about/sources/) lists each one with its edition and a link to RI's copy.

RI revises these documents on its own schedule. The Rotary Code of Policies changes after each RI Board meeting and The Rotary Foundation Code of Policies after each Trustees meeting, so updates can come more than once a year. Once a month the project checks My Rotary for new editions. When one appears, the project adds it, checks it against RI's amendments, and publishes a new version here.

Archie's version number starts with the Rotary year of its documents (2026.x.x means the 2026 Rotary year, July 2026 to June 2027). The third number goes up for updates within the year. A new Rotary year is a new first number.

## License

Archie's own text (the skill instructions, references, and guides) is licensed under Creative Commons Attribution 4.0. The website code is under the MIT License. The Rotary International documents inside the skill's `knowledge-base/` folder belong to Rotary International and The Rotary Foundation; neither license covers them, and nothing here gives permission to reuse them. See [LICENSE](LICENSE) for the file list.
