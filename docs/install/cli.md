# Install Archie in a command-line agent

This guide is for people who run an AI agent in a terminal window rather than in a browser. If that is not you, go back to README.md and pick a browser guide instead. Nothing here is required.

Archie installs into Claude Code, Codex, Gemini CLI, Grok Build, and any other client that reads skills from agentskills.io.

## The one command

1. Open your terminal.
2. Run this command:

```
npx skills add archie4rotary/project-archie
```

3. Answer the prompts. The installer asks which agent you are installing into and writes the skill there for you.
4. Restart your agent, or reload its skills, so it notices the new folder. Agents read their skills directory at startup, so a session you already had running will not see Archie until it restarts.

## Installing by hand

If you would rather place the files yourself, download `rotary-archie.zip` from https://github.com/archie4rotary/project-archie/releases/latest, unzip it into a folder named `rotary-archie`, and put that folder in the directory for your agent.

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

> What version are you?

Archie should answer **2025.3.2** or newer, with a date. If it does not name a version, the skill did not load. Confirm that the folder landed in the right directory for your agent, and that you restarted the agent after installing.

## How updates arrive

To update, run `npx skills add archie4rotary/project-archie` again and let it overwrite the old copy. If you cloned the repository instead, run `git pull` in it. Either way, restart your agent afterwards. Every release is listed at https://github.com/archie4rotary/project-archie/releases/latest, and your Zone coordinator announces new versions when Rotary International publishes revised governing documents each July.
