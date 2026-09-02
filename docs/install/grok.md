# Install Archie on Grok

Grok offers skills to SuperGrok and SuperGrok Heavy subscribers. The feature works on grok.com in a web browser and in the iPhone and Android apps. The steps below use a web browser on a computer, because downloading a file and finding it again is simpler there than on a phone.

## Before you start

1. A Grok account with a SuperGrok or SuperGrok Heavy subscription. The free tier cannot install skills.
2. The file `rotary-archie.zip`, downloaded as described in README.md. Leave it zipped.

## Steps

1. Go to https://grok.com and sign in.
2. In the left sidebar, click **Plugins** (near the bottom).
3. At the top of the panel, click the **Skills** tab.
4. Click **New Skill** in the upper right, then **Upload skill file**.
5. Drag `rotary-archie.zip` onto the box that says **Drop a .zip, .skill, or .md file here**, or click the box and choose the file.
6. A **Skill uploaded** message appears and **rotary-archie** shows in your Personal list.
7. The first time you chat, Grok may ask you to confirm your birth year. Enter it and continue.

To update later, click the **...** next to rotary-archie, choose **Delete** (there is no confirmation step, so be sure), then upload the new zip the same way.

## Test it

Start a new conversation and ask:

> Can a club exempt members from attendance under the Rule of 85?

You should get a short answer in prose with a citation to a specific document and section, and a confidence marker (✅ Directly supported, ⚠️ Inferred, or ❌ Not found). Then ask:

> What version are you?

Archie should answer **2025.3.2** (or newer) with a date. If it does not name a version, the skill did not load; see Troubleshooting.

## Troubleshooting

**The upload was rejected.** Check that you still have a zip rather than a folder. If your Downloads folder holds a `rotary-archie` folder, your browser unzipped the file when it arrived. Download it again and do not open it. On a Mac, you can stop Safari from unzipping downloads by opening Safari's **Settings**, clicking **General**, and unticking **Open "safe" files after downloading**.

**You cannot find Skills in the sidebar.** Skills are a paid feature. Check which plan your account is on, and look for SuperGrok or SuperGrok Heavy. If you are on the free tier, the option will not appear anywhere in the app. If you are on a paid plan and still cannot see it, sign out, sign back in, and look again, since the sidebar sometimes needs a reload after a subscription change.

**Archie answers, but with no citations or confidence markers.** A skill loads when a conversation begins, so a chat you already had open will not pick it up. Start a brand new conversation and ask the test question again. If a fresh conversation still gives you plain answers, go back to **Skills** and confirm that `rotary-archie` is listed and switched on.

## How updates arrive

New versions are posted at https://github.com/Project-Archie/rotary-archie/releases/latest. To update, download the new `rotary-archie.zip` and upload it the same way you did here, replacing the old one. Your Zone coordinator will also announce updates when Rotary International releases new governing documents each July. To be notified by GitHub, open that page, click **Watch**, choose **Custom**, and tick **Releases**.
