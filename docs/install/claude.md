# Install Archie on Claude

Claude offers skills on every plan, including the free one. If you can sign in to Claude, you can install Archie. This guide covers claude.ai in a web browser, and there is a shortcut after the steps for people who use the Claude desktop app.

## Before you start

1. A Claude account on any plan. Free, Pro, Max, Ultra, Team, and Enterprise all work.
2. The file `rotary-archie.zip`, downloaded as described in README.md. Leave it zipped.

## Steps

1. Open https://claude.ai in your web browser and sign in.
2. Click your name at the bottom left corner of the screen, then click **Settings**.
3. In the settings list, click **Capabilities**.
4. Find **Create and edit files** and make sure the switch is turned on. If it is off, turn it on now. The setting says "Skills need this on."
5. Close Settings. In the left sidebar, click **Customize**, then the **Skills** tab.
6. Click **Add** in the upper right, then **Upload skill**.
7. Drag `rotary-archie.zip` from your Downloads folder onto the box that says **Drag and drop skill files here, or browse**, or click **browse** and choose the file. Claude shows the file name and a preview. Click **Upload**. A short security scan runs first.
8. If you installed Archie before, Claude asks **Replace "rotary-archie" skill?** Click **Upload and replace**. Earlier versions stay in the skill's version history.
9. Confirm **rotary-archie** appears in your skills list, marked as updated just now.

Claude desktop app shortcut: download `rotary-archie-v2026.1.3.skill` from the **Assets** list on the release page (https://github.com/Project-Archie/rotary-archie/releases/latest) instead and double-click it. Claude Desktop installs it directly.

## Paid plans: add Archie from GitHub

This is optional. The zip upload above is the main path and works on every plan. If you are on a paid plan (Pro, Max, Ultra, Team, or Enterprise), Claude can also add Archie straight from its GitHub page, so you do not have to download a file. We tested this route on a paid plan at claude.ai in November 2026.

1. In Claude, click **Customize** in the left sidebar, then the **Plugins** tab.
2. Click **Add** in the upper right, then **Add marketplace**.
3. Choose **Add from a repository**.
4. Click the **URL** box, type `Project-Archie/rotary-archie`, and pick the result named rotary-archie. Claude may first ask you to connect a GitHub account.
5. Click **Sync**. Two plugins appear: **Archie** and **Rotary Brand Voice**.
6. On the **Archie** row, click **Add**. Claude confirms that Archie is installed and ready to use.

Updates do not arrive by themselves on this route (pending test)<!-- PT-2 -->. To look for a new version, click **Add**, then **Manage marketplaces**, open the menu beside rotary-archie, and choose **Check for updates**. Claude also offers **Sync automatically**, which asks you to grant it access to GitHub; that is your choice and Archie does not need it. Check your version as described below, and keep the zip as your fallback. The option may be missing in the Windows desktop app (pending test)<!-- PT-7 -->. If you do not see it, use the zip upload above.

## Test it

Start a new conversation and ask:

> Can a club exempt members from attendance under the Rule of 85?

You should get a short answer in prose with a citation to a specific document and section, and a confidence marker (✅ Directly supported, ⚠️ Inferred, or ❌ Not found). Then ask:

> What version of Archie are you?

Archie should answer with a version number and a date. Compare it with the version on the Archie website home page (https://project-archie.github.io/rotary-archie/). If it does not name a version, the skill did not load; see Troubleshooting.

## Troubleshooting

**The upload was rejected.** The most common cause is an unzipped file. If your Downloads folder now holds a `rotary-archie` folder rather than a `rotary-archie.zip` file, your browser unzipped it for you. Download the zip again, and if your Mac keeps unzipping downloads, open Safari's **Settings**, click **General**, and untick **Open "safe" files after downloading**.

**You cannot find the Skills tab.** Skills need **Create and edit files** switched on in **Settings**, under **Capabilities**. Go back to step 4, turn it on, then reload the page in your browser before looking again. On a Team or Enterprise account, your workspace administrator may have turned skills off for everyone, in which case ask them to enable it.

**Archie answers, but with no citations or confidence markers.** Skills load when a conversation begins, so a chat you already had open will not pick up a newly installed skill. Start a brand new conversation and ask the test question again. You can also call Archie directly: type `/` in the message box and choose **rotary-archie** from the list. If a fresh conversation still gives you plain answers with no citations, open **Customize**, click the **Skills** tab, and confirm that `rotary-archie` is listed and switched on.

## How updates arrive

New versions are posted at https://github.com/Project-Archie/rotary-archie/releases/latest. To update, download the new `rotary-archie.zip` and upload it the same way you did here, replacing the old one. Your Zone coordinator will also announce updates when a new version is released. To be notified by GitHub, open that page, click **Watch**, choose **Custom**, and tick **Releases**.
