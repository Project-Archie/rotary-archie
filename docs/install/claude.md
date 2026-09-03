# Install Archie on Claude

Claude offers skills on every plan, including the free one. If you can sign in to Claude, you can install Archie. This guide covers claude.ai in a web browser, and there is a shortcut at the end for people who use the Claude desktop app.

## Before you start

1. A Claude account on any plan. Free, Pro, Max, Team, and Enterprise all work.
2. The file `rotary-archie.zip`, downloaded as described in README.md. Leave it zipped.

## Steps

1. Open https://claude.ai in your web browser and sign in.
2. Click your name at the bottom left corner of the screen, then click **Settings**.
3. In the settings list, click **Capabilities**.
4. Find **Cloud code execution and file creation** and make sure the switch is turned on. If it is off, turn it on now. The setting says "Required for skills."
5. In the same settings list, under the **Customize** heading, click **Skills**.
6. Click **Add** in the upper right, then **Upload skill**.
7. Drag `rotary-archie.zip` from your Downloads folder onto the box that says **Drag and drop or click to upload**, or click the box and choose the file. Claude reads the zip and adds Archie to your skills list. A short security scan may run first.
8. If you installed Archie before, Claude asks **Replace "rotary-archie" skill?** Click **Upload and replace**. Earlier versions stay in the skill's version history.
9. Confirm **rotary-archie** appears at the top of your skills list with today's date.

Claude Desktop shortcut: download the `.skill` file from the release page instead and double-click it. Claude Desktop installs it directly.

## Test it

Start a new conversation and ask:

> Can a club exempt members from attendance under the Rule of 85?

You should get a short answer in prose with a citation to a specific document and section, and a confidence marker (✅ Directly supported, ⚠️ Inferred, or ❌ Not found). Then ask:

> What version are you?

Archie should answer **2026.1.0** (or newer) with a date. If it does not name a version, the skill did not load; see Troubleshooting.

## Troubleshooting

**The upload was rejected.** The most common cause is an unzipped file. If your Downloads folder now holds a `rotary-archie` folder rather than a `rotary-archie.zip` file, your browser unzipped it for you. Download the zip again, and if your Mac keeps unzipping downloads, open Safari's **Settings**, click **General**, and untick **Open "safe" files after downloading**.

**You cannot find the Skills tab.** Skills only appear once **Code execution and file creation** is switched on in **Capabilities**. Go back to step 4, turn it on, then reload the page in your browser before looking again. On a Team or Enterprise account, your workspace administrator may have turned skills off for everyone, in which case ask them to enable it.

**Archie answers, but with no citations or confidence markers.** Skills load when a conversation begins, so a chat you already had open will not pick up a newly installed skill. Start a brand new conversation and ask the test question again. If a fresh conversation still gives you plain answers with no citations, open **Customize**, click the **Skills** tab, and confirm that `rotary-archie` is listed and switched on.

## How updates arrive

New versions are posted at https://github.com/Project-Archie/rotary-archie/releases/latest. To update, download the new `rotary-archie.zip` and upload it the same way you did here, replacing the old one. Your Zone coordinator will also announce updates when Rotary International releases new governing documents each July. To be notified by GitHub, open that page, click **Watch**, choose **Custom**, and tick **Releases**.
