# Tier 2: Install the Archie Skill

A skill is a folder of instructions that an AI assistant carries with it. Archie's skill holds the rules for how to search the Rotary documents, how to cite them, when to hand a question off to a real person, and how to write the answer. It also carries its own copy of the seven Rotary International governing documents, so you never have to upload them yourself.

You install the skill once. After that it works in every conversation you have with that assistant. You do not have to remember to turn it on, and you do not have to paste anything at the start of a chat.

The same file installs on Claude, ChatGPT, and Grok. Pick whichever assistant you already use.

## Get the file

1. Open https://github.com/Project-Archie/rotary-archie/releases/latest in your web browser.
2. Scroll down to the heading **Assets**.
3. Click `rotary-archie.zip`. Your browser saves it to your Downloads folder.
4. Leave the file zipped. Do not open it, and do not unzip it. Every assistant below wants the zip exactly as you downloaded it.

If you use the Claude desktop app on a Mac or a Windows PC, download `rotary-archie-v2025.3.2.skill` from that same **Assets** list instead. You install it by double-clicking it. See claude.md.

## Pick your assistant

| Assistant | Works on these plans | Guide |
| --- | --- | --- |
| Claude | Free, Pro, Max, Team, and Enterprise | claude.md |
| ChatGPT | Business, Enterprise, Edu, and Healthcare workspaces only. Skills are not available on Free, Plus, or Pro. | chatgpt.md |
| Grok | SuperGrok and SuperGrok Heavy | grok.md |
| A command-line agent | Claude Code, Codex, Gemini CLI, Grok Build | cli.md |

If you are on ChatGPT Free, Plus, or Pro, your account cannot install skills of any kind. You have two good options instead. Use the public Archie GPT, which needs no setup at all and is described in tier-1-use.md. Or set up a ChatGPT Project and upload the seven Rotary documents by hand, which is described in ../add-memory-projects.md.

Setup takes about five minutes.

Gemini is not supported yet. Google's skills feature is in beta, and in our tests it mixed web search results into Archie's answers, including outdated Rotary contact details. We will add Gemini when it passes the same checks as the others.

## When Archie switches on

The skill activates when your question is about Rotary policy, governance, or district work. Ask something general (a recipe, a running pace) and your assistant answers normally, without Archie. If you want every message in a workspace to go through Archie, put the skill inside a Project.

## Optional: give Archie memory

The skill by itself gives you a well-behaved Archie in every new conversation. It does not remember you, though. Each conversation starts fresh, so you have to say which district you serve and what role you hold every time.

A Project fixes that. A Project is a workspace that holds your instructions and remembers your context across conversations. Once you tell Archie inside a Project that you are the governor-elect of District 5400, it knows that next week too. A Project is also where you upload your own district documents, such as your standing rules or your district budget.

Setting one up takes about 15 minutes and is entirely optional. See ../add-memory-projects.md.

A Project with your own district documents in it is also where Tier 3 begins. See tier-3-customize.md.

## Keeping Archie up to date

Rotary International publishes revised governing documents each July, and Archie gets a new version to match. Here is how to tell whether the copy you installed is still current.

1. Start a conversation and type "What version are you?" Archie answers with a version number and a date.
2. Compare that number against the one at https://github.com/Project-Archie/rotary-archie/releases/latest.
3. If the release is newer, download the new file and install it the same way you installed the first one.

You can also just wait to be told. Your Zone coordinator sends a note whenever a new version is posted.

To have GitHub tell you directly, open https://github.com/Project-Archie/rotary-archie, click **Watch** near the top right, choose **Custom**, and tick **Releases**. GitHub then emails you when a new version goes up.

The first part of the version number is the Rotary year the documents come from. Version 2025.3.2 carries the documents Rotary International published for the 2025 Rotary year. When the 2026 documents land, the version becomes 2026 followed by its own numbers.
