---
title: "Install in a command-line agent"
---

This guide is for people who run an AI agent in a terminal window rather than in a browser. If that is not you, go back to [Start here](/rotary-archie/start-here/) and pick a browser guide instead. Nothing here is required.

Archie installs into Claude Code, Codex, Gemini CLI, Grok Build, and any other client that reads skills from agentskills.io.

## Claude Code: install as a plugin

If you use Claude Code, this is the easiest way in. Archie is published as a plugin, and Claude Code can fetch it for you and keep track of the version.

1. Open Claude Code.
2. Type this and press Return:

```
/plugin marketplace add Project-Archie/rotary-archie
```

3. Then type this and press Return:

```
/plugin install rotary-archie@project-archie
```

4. Restart Claude Code so it picks up the new plugin.

To get a newer version later, run `/plugin marketplace update project-archie` and then restart. Claude Code does not update outside marketplaces on its own, so nothing changes underneath you unless you ask. If you would rather it kept itself current, open `/plugin`, find the project-archie marketplace in the list, and switch auto-update on for it.

There is a second plugin in the same marketplace, `rotary-brand-voice`, which helps with Rotary writing and design rather than policy. Install it the same way if you want it: `/plugin install rotary-brand-voice@project-archie`. It is optional. Archie works on its own.

The version check further down this page still applies. Ask "What version of Archie are you?" after you restart.

## The one command

This works everywhere, including Claude Code if you would rather not use the plugin route above.

1. Open your terminal.
2. Run this command:

```
npx skills add Project-Archie/rotary-archie
```

3. Answer the prompts. The installer asks which agent you are installing into and writes the skill there for you.
4. Restart your agent, or reload its skills, so it notices the new folder. Agents read their skills directory at startup, so a session you already had running will not see Archie until it restarts.

## Installing by hand

If you would rather place the files yourself, download `rotary-archie.zip` from https://github.com/Project-Archie/rotary-archie/releases/latest, unzip it into a folder named `rotary-archie`, and put that folder in the directory for your agent.

| Agent | Skills directory |
| --- | --- |
| Claude Code | `~/.claude/skills/` |
| Codex | `~/.codex/skills/` |
| Gemini CLI | `~/.gemini/skills/` |
| Grok Build | `~/.grok/skills/` |

Restart the agent afterwards.

## Test it

Start a new session and ask:

> Can a club exempt members from attendance under the Rule of 85?

You should get a short cited answer with a confidence marker. Then ask:

> What version of Archie are you?

Archie should answer with a version number and a date. Compare it with the version on the Archie website home page (https://project-archie.github.io/rotary-archie/). If it does not name a version, the skill did not load. Confirm that the folder landed in the right directory for your agent, and that you restarted the agent after installing.

## How updates arrive

If you installed the plugin in Claude Code, run `/plugin marketplace update project-archie`, then restart Claude Code. That is the whole update.

Everyone else: run `npx skills add Project-Archie/rotary-archie` again and let it overwrite the old copy. If you cloned the repository instead, run `git pull` in it. Either way, restart your agent afterwards. Every release is listed at https://github.com/Project-Archie/rotary-archie/releases, and your Zone coordinator announces each new version.
