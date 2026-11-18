# Tier 2: Install the Archie Skill

A skill is a folder of instructions that an AI assistant carries with it. Archie's skill holds the rules for how to search the Rotary documents, how to cite them, when to hand a question off to a real person, and how to write the answer. It also carries its own copy of the eight Rotary International governing documents, so you never have to upload them yourself.

You install the skill once. After that it works in every conversation you have with that assistant. You do not have to remember to turn it on, and you do not have to paste anything at the start of a chat.

The same file installs on Claude, ChatGPT, and Grok. Pick whichever assistant you already use. ChatGPT Free cannot add skills; the table below says where each assistant stands.

## Get the file

1. Click this link: https://github.com/Project-Archie/rotary-archie/releases/latest/download/rotary-archie.zip. Your browser saves `rotary-archie.zip` to your Downloads folder. The link always gives you the newest version.
2. If the link does not work for you, open https://github.com/Project-Archie/rotary-archie/releases/latest instead, scroll down to the heading **Assets**, and click `rotary-archie.zip`.
3. Leave the file zipped. A zip file is one compressed file. Do not open it, and do not unzip it. Every assistant below wants the zip exactly as you downloaded it.

If you use the Claude desktop app on a Mac or a Windows PC, download `rotary-archie-v2026.1.3.skill` from the **Assets** list on that release page instead. You install it by double-clicking it. See claude.md.

## Pick your assistant

| Assistant | Works on these plans | Guide |
| --- | --- | --- |
| Claude | Every plan, including Free | claude.md |
| ChatGPT | Plus, and work and school workspaces. Archie answers in Work mode only. Not available on Free. | chatgpt.md |
| Grok | SuperGrok and SuperGrok Heavy | grok.md |
| A command-line agent | Claude Code, Codex, Gemini CLI, Grok Build | cli.md |

Claude Code users have a shorter path: Archie installs as a plugin with two commands and updates with one. See the plugin section at the top of cli.md.

Companion skills ship beside Archie. The first is `rotary-brand-voice`, which covers how Rotary content sounds and looks (voice, names, fonts, colors, logos, lockups) and never answers policy. Its packages sit on the same release page as Archie's: `rotary-brand-voice.zip` for the Claude, ChatGPT, and Grok upload dialogs and `rotary-brand-voice-v0.2.4.skill` for Claude Desktop. Install it the same way you installed Archie. Claude Code users run `/plugin install rotary-brand-voice@project-archie` instead.

If the skill will not load for you, for example on ChatGPT Free, use Claude's free plan with the same file. On ChatGPT Go, Plus, or higher you can also set up a ChatGPT Project and upload the eight Rotary documents by hand (a Free project holds only five files). That is described in ../add-memory-projects.md. The public Archie GPT stops working on December 11, 2026, so do not rely on it. The Archie website has a page for this: https://project-archie.github.io/rotary-archie/get/no-assistant/

Setup takes about five minutes.

The Gemini app is not supported yet. Google's skills feature is in beta, and in our tests it mixed web search results into Archie's answers, including outdated Rotary contact details. We will add Gemini when it passes the same checks as the others.

## When Archie switches on

The skill activates when your question is about Rotary policy, governance, or district work. Ask something general (a recipe, a running pace) and your assistant answers normally, without Archie. If you want every message in a workspace to go through Archie, put the skill inside a Project.

## Optional: give Archie memory

The skill by itself gives you a well-behaved Archie in every new conversation. It does not remember you, though. Each conversation starts fresh, so you have to say which district you serve and what role you hold every time.

A Project fixes that. A Project is a workspace that holds your instructions and remembers your context across conversations. Once you tell Archie inside a Project that you are the governor-elect of District 5400, it knows that next week too. A Project is also where you upload your own district documents, such as your standing rules or your district budget.

Setting one up takes about 15 minutes and is entirely optional. See ../add-memory-projects.md.

A Project with your own district documents in it is also the first step toward a setup for your whole district. See tier-3-customize.md.

## Keeping Archie up to date

Archie gets a new version whenever Rotary International revises a governing document. The Rotary Code of Policies changes after each RI Board meeting, so that can happen more than once a year. Here is how to tell whether the copy you installed is still current.

1. Start a conversation and type "What version of Archie are you?" Archie answers with a version number and a date.
2. Compare that number against the one at https://github.com/Project-Archie/rotary-archie/releases/latest.
3. If the release is newer, download the new file and install it the same way you installed the first one.

You can also just wait to be told. Your Zone coordinator sends a note whenever a new version is posted.

To have GitHub tell you directly, open https://github.com/Project-Archie/rotary-archie, click **Watch** near the top right, choose **Custom**, and tick **Releases**. GitHub then emails you when a new version goes up.

The first part of the version number is the Rotary year the documents come from. Version 2026.1.3 carries the documents Rotary International published for the 2026 Rotary year, including the January 2027 editions of the Rotary Code of Policies and The Rotary Foundation Code of Policies. The third number goes up when a document is updated during the year. When the 2027 documents land, the version becomes 2027 followed by its own numbers.
