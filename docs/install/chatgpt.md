# Install Archie on ChatGPT

Read this before you download anything. Here is what we found when we tested ChatGPT in November 2026.

- **ChatGPT Plus:** the upload works, and Archie answers when the conversation is in **Work** mode. In **Chat** mode ChatGPT does not use Archie.
- **ChatGPT Free:** skills are not available. The Skills tab says "Skills aren't available for this account."
- **Work and school workspaces** (Business, Enterprise, Edu, Healthcare): the upload was confirmed on a work workspace in September 2026.
- **Go and Pro:** not tested.

If you are on ChatGPT Free, use Claude's free plan. It takes the same file; see claude.md. A ChatGPT Project is not a route on Free, because a Free project holds five files and Archie has eight documents. The public Archie GPT stops working on December 11, 2026, so do not rely on it.

## Before you start

1. A ChatGPT account on Plus, or on a work or school workspace.
2. The file `rotary-archie.zip`, downloaded as described in README.md. Leave it zipped.

## Steps

1. Sign in at https://chatgpt.com. If you have both a personal and a work login, make sure the account you want shows at the bottom left before you go any further.
2. In the left sidebar, click **Plugins**.
3. At the top of the page, click the **Skills** tab.
4. Click **Add** at the top right, then choose **Upload from your computer**. A dialog named **Upload a skill** opens.
5. Drag `rotary-archie.zip` onto the dialog, or click it and choose the file. When it says **Skill uploaded**, click **Done**.
6. If you installed Archie before, ChatGPT asks whether to replace the existing skill. Click **Replace existing**.
7. Confirm **Rotary Archie** appears under **Installed** and **Created by me**. On a work workspace, leave it personal; do not share it to your workspace unless your admin asks for that.

## Use Work mode

At the top of a new conversation, ChatGPT shows a toggle with **Chat** and **Work**. Switch it to **Work** before you ask a Rotary question. In our test, ChatGPT used Archie only in Work mode. In Chat mode it answered from the web, with no citation, and got a Rotary rule wrong.

To call Archie directly, type `/` in the message box while in Work mode and choose **Rotary Archie** under **Skills**. Do this whenever ChatGPT answers a Rotary question without it.

Even in Work mode, ChatGPT may add a web source beside Archie's answer. Trust an answer when it names a Rotary document and section.

## Test it

Start a new conversation, switch to **Work**, and ask:

> Can a club exempt members from attendance under the Rule of 85?

You should get a short answer in prose with a citation to a specific document and section, and a confidence marker (✅ Directly supported, ⚠️ Inferred, or ❌ Not found). Then ask:

> What version of Archie are you?

Archie should answer with a version number and a date. Compare it with the version on the Archie website home page (https://project-archie.github.io/rotary-archie/). If it does not name a version, the skill did not load; see Troubleshooting.

## Troubleshooting

**The upload was rejected.** The most common cause is an unzipped file. If your Downloads folder holds a `rotary-archie` folder rather than a `rotary-archie.zip` file, your browser unzipped it on arrival. Download the zip again and do not open it. On a Mac, you can stop Safari from unzipping downloads by opening Safari's **Settings**, clicking **General**, and unticking **Open "safe" files after downloading**.

**The Skills tab says "Skills aren't available for this account."** That is what ChatGPT Free shows. Use Claude's free plan or a ChatGPT Project instead, as described near the top of this guide. On a work or school workspace, your administrator may have turned skills off, so ask them to enable them.

**ChatGPT answers, but with no citations or confidence markers.** Check the toggle at the top of the conversation. If it says **Chat**, start a new conversation, switch it to **Work**, and ask again. A skill also loads when a conversation begins, so a chat that was already open will not pick it up. If a new Work conversation still gives you plain answers, return to **Plugins**, open the **Skills** tab, and confirm that **Rotary Archie** is listed.

## How updates arrive

New versions are posted at https://github.com/Project-Archie/rotary-archie/releases/latest. To update, download the new `rotary-archie.zip` and upload it the same way you did here, replacing the old one. Your Zone coordinator will also announce updates when a new version is released. To be notified by GitHub, open that page, click **Watch**, choose **Custom**, and tick **Releases**.
