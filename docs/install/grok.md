# Install Archie on Grok

Grok offers skills to SuperGrok and SuperGrok Heavy subscribers. The feature works on grok.com in a web browser and in the iPhone and Android apps. The steps below use a web browser on a computer, because downloading a file and finding it again is simpler there than on a phone.

## Before you start

1. A Grok account with a SuperGrok or SuperGrok Heavy subscription. The free tier cannot install skills.
2. The file `rotary-archie.zip`, downloaded as described in README.md. Leave it zipped.

## Steps

1. Open https://grok.com in your web browser and sign in.
2. In the sidebar, click **Skills** (confirm in Task 8).
3. Click **Upload** (confirm in Task 8).
4. Choose `rotary-archie.zip` from your Downloads folder.
5. Wait for `rotary-archie` to appear in your list of skills.

Grok is the most forgiving of the four assistants about file types. It accepts the `.zip`, and it also accepts the `.skill` file or a single `.md` file if one of those is what you happened to download. Any of the three works.

(confirm in Task 8: if Grok lets a skill be shared by link, add: "Or open this link and click Add: <share URL>".)

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

New versions are posted at https://github.com/archie4rotary/project-archie/releases/latest. To update, download the new `rotary-archie.zip` and upload it the same way you did here, replacing the old one. Your Zone coordinator will also announce updates when Rotary International releases new governing documents each July. To be notified by GitHub, open that page, click **Watch**, choose **Custom**, and tick **Releases**.
