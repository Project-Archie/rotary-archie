# Install Archie on ChatGPT

Read this paragraph before you download anything. As of September 2026, ChatGPT offers skills only on Business, Enterprise, Edu, and Healthcare workspaces. A personal Free, Plus, or Pro account cannot install a skill of any kind, and no setting will change that. If your ChatGPT account is a personal one, you have two good options. Use the public Archie GPT at https://bit.ly/project-archie, which needs no setup at all. Or build a ChatGPT Project and upload the seven Rotary documents by hand, which gives you memory across conversations. Both paths are described in ../add-memory-projects.md.

The rest of this guide is for people signed in to a work or school ChatGPT workspace.

## Before you start

1. A ChatGPT account on a Business, Enterprise, Edu, or Healthcare workspace. Most Rotarians who have this got it through an employer or a university.
2. The file `rotary-archie.zip`, downloaded as described in README.md. Leave it zipped.

## Steps

1. Sign in at https://chatgpt.com with your workspace account. If you have both a personal and a work login, make sure the workspace name shows at the bottom left before you go any further.
2. In the left sidebar, click **Plugins**.
3. At the top of the page, click the **Skills** tab.
4. Click the **+** button next to the search box. A dialog says **Drag and drop a .zip/.skill file or SKILL.md to upload**.
5. Drag `rotary-archie.zip` onto the dialog, or click it and choose the file.
6. If you installed Archie before, ChatGPT asks whether to replace the existing skill. Click **Replace existing**.
7. Confirm **rotary archie** appears under **Personal**, in the **Created by me** list. Leave it personal; do not share it to your workspace unless your admin asks for that.

## Test it

Start a new conversation and ask:

> Can a club exempt members from attendance under the Rule of 85?

You should get a short answer in prose with a citation to a specific document and section, and a confidence marker (✅ Directly supported, ⚠️ Inferred, or ❌ Not found). Then ask:

> What version are you?

Archie should answer **2025.3.2** (or newer) with a date. If it does not name a version, the skill did not load; see Troubleshooting.

## Troubleshooting

**The upload was rejected.** The most common cause is an unzipped file. If your Downloads folder holds a `rotary-archie` folder rather than a `rotary-archie.zip` file, your browser unzipped it on arrival. Download the zip again and do not open it. On a Mac, you can stop Safari from unzipping downloads by opening Safari's **Settings**, clicking **General**, and unticking **Open "safe" files after downloading**.

**The skills page is empty, or says you do not have access.** Your account is almost certainly on a personal plan. Free, Plus, and Pro accounts cannot install skills. Go back to the first paragraph of this guide and use the public Archie GPT or a Project instead. If you know your workspace is a Business or Enterprise one, your administrator may have turned skills off, so ask them to enable it.

**Archie answers, but with no citations or confidence markers.** A skill loads when a conversation begins, so a chat that was already open will not pick it up. Start a brand new conversation and ask the test question again. If a fresh conversation still gives you plain answers, return to https://chatgpt.com/skills and confirm that `rotary-archie` is listed and switched on.

## How updates arrive

New versions are posted at https://github.com/archie4rotary/project-archie/releases/latest. To update, download the new `rotary-archie.zip` and upload it the same way you did here, replacing the old one. Your Zone coordinator will also announce updates when Rotary International releases new governing documents each July. To be notified by GitHub, open that page, click **Watch**, choose **Custom**, and tick **Releases**.
