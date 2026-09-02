# Install Archie on Gemini

Gemini keeps its skills inside a feature called **Gemini Spark**. You need a Google AI Pro or Google AI Ultra subscription, and you need to be signed in with a personal Google account. A work or school Google account cannot use skills yet, even on a paid plan, so if your only Google login is a `@yourcompany.com` or `@youruniversity.edu` address, this path is closed to you for now. Use Claude or the public Archie GPT instead. See README.md.

## Before you start

1. A personal Google account with a Google AI Pro or Google AI Ultra subscription.
2. The file `rotary-archie.zip`, downloaded as described in README.md. Leave it zipped.

## Steps

1. Open https://gemini.google.com in your web browser.
2. Sign in with your personal Google account. If your browser signs you in to a work account by default, sign out and sign back in with the personal one.
3. In the left sidebar, click **Spark** (confirm in Task 8).
4. Click **Skills** (confirm in Task 8).
5. Click **Upload** (confirm in Task 8).
6. Choose `rotary-archie.zip` from your Downloads folder.
7. Wait for `rotary-archie` to appear in your list of skills.

Gemini is fussier about skill files than the other assistants, in two ways that are worth knowing if something looks odd. It accepts text files only, and it expects a file named `SKILL.md` to sit in the zip's main folder rather than buried a level or two down. The zip on the release page is built to satisfy both rules already. Every file inside it is either markdown or JSON, and `SKILL.md` sits right at the top. You do not need to rearrange anything.

## Test it

Start a new conversation and ask:

> Can a club exempt members from attendance under the Rule of 85?

You should get a short answer in prose with a citation to a specific document and section, and a confidence marker (✅ Directly supported, ⚠️ Inferred, or ❌ Not found). Then ask:

> What version are you?

Archie should answer **2025.3.2** (or newer) with a date. If it does not name a version, the skill did not load; see Troubleshooting.

## Troubleshooting

**The upload was rejected.** Check first that you still have a zip. If your Downloads folder holds a `rotary-archie` folder rather than a `rotary-archie.zip` file, your browser unzipped it when it arrived, and Gemini cannot read a loose folder. Download the zip again and do not open it. On a Mac, you can stop Safari from unzipping downloads by opening Safari's **Settings**, clicking **General**, and unticking **Open "safe" files after downloading**.

**You cannot find Spark, or Gemini says skills are unavailable.** Two things gate this feature. The first is your subscription, which must be Google AI Pro or Google AI Ultra. The second is your account type, which must be personal. Work and school Google accounts have no access to skills yet regardless of what the organization pays for. Check which account the top right corner of the page shows, and switch accounts if it is the wrong one.

**Archie answers, but with no citations or confidence markers.** A skill loads when a conversation begins, so a chat you already had open will not pick it up. Start a brand new conversation and ask the test question again. If a fresh conversation still gives you plain answers, go back to **Spark** and confirm that `rotary-archie` is listed and switched on.

## How updates arrive

New versions are posted at https://github.com/archie4rotary/project-archie/releases/latest. To update, download the new `rotary-archie.zip` and upload it the same way you did here, replacing the old one. Your Zone coordinator will also announce updates when Rotary International releases new governing documents each July. To be notified by GitHub, open that page, click **Watch**, choose **Custom**, and tick **Releases**.
