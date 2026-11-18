---
title: "If Archie does not answer"
---

Use this page when you have added Archie and your assistant answers without it, or when your plan cannot add a skill. A skill is a set of instructions your assistant keeps and uses when you ask about Rotary.

## Call Archie by name

An assistant decides for itself when to use a skill. When it does not, call Archie directly.

- **Claude:** type `/` in the message box and choose **rotary-archie** from the list. Then ask your question.
- **ChatGPT:** switch the toggle at the top of the conversation to **Work**, type `/`, and choose **Rotary Archie** under **Skills**. In **Chat** mode the list has no skills, and ChatGPT does not use Archie.

Then ask "What version of Archie are you?" Archie answers with a version number and a date.

## Start a new conversation

A skill loads when a conversation begins. A chat that was already open when you added Archie will not have it. Start a new one and ask again.

## Check that Archie is installed

- **Claude:** click **Customize**, then the **Skills** tab. **rotary-archie** should be in the list and switched on.
- **ChatGPT:** click **Plugins**, then the **Skills** tab. **Rotary Archie** should be under **Installed**.

If it is missing, install it again. Start with the guide for your assistant:

- Claude: [Install on Claude](/rotary-archie/get/claude/)
- ChatGPT: [Install on ChatGPT](/rotary-archie/get/chatgpt/)
- Grok: [Install on Grok](/rotary-archie/get/grok/)

The overview and the download link are in [Start here](/rotary-archie/start-here/).

## If you use ChatGPT Free

ChatGPT Free cannot add skills. The Skills tab says "Skills aren't available for this account."

The way forward is Claude's free plan. It takes the same file, and setup takes about five minutes. Follow [Install on Claude](/rotary-archie/get/claude/).

A ChatGPT Project is not a route on Free. A Project is a workspace that holds instructions and files, and Archie needs eight Rotary documents in it. OpenAI allows five files in a Free project.

## If you would rather use a Project

On ChatGPT Go, Plus, or a higher plan, a Project holds 25 files or more, so it can carry Archie by itself: you paste in Archie's instructions and upload the eight Rotary International governing documents by hand. The steps are in [Optional: give Archie memory](/rotary-archie/use/memory/), in the section for when the skill will not load. It uses the instruction text in [the ChatGPT Project instructions (no skill)](https://github.com/Project-Archie/rotary-archie/blob/main/docs/instructions/chatgpt-project-no-skill.md).

A Project is a workaround. Be aware of these differences:

- You upload the Rotary documents yourself. If Rotary International revises one, you have to replace the file by hand.
- Archie's behavior comes from pasted instructions rather than the skill, so its answers can differ from the skill's.
- It takes about 15 minutes to set up, not five.
- It runs on ChatGPT only.

## The Archie GPT is going away

The public Archie GPT stops working on December 11, 2026. OpenAI is ending Custom GPTs on that date. If you have been using the GPT, move to the skill before then.

## What to do when Archie cannot help

Archie shows a confidence signal on each policy answer. ✅ means Archie found a direct answer. ⚠️ means interpretation was required, so verify with the cited source. ❌ means Archie should not answer and is routing you elsewhere.

If you see ❌ or the answer feels off:

1. Note which categories the question touches (legal, tax, insurance, youth safety, financial irregularity). Those are hard escalation boundaries. Archie will not give substantive guidance there, by design.
2. For anything in those categories, contact the Rotary Support Center, your district legal counsel, your district treasurer, or your district youth protection officer as appropriate.
3. For policy questions Archie misses but should not have, send the example to archie4rotary@gmail.com so the source documents or instructions can be improved.
