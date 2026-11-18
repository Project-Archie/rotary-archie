# Contributing to Project Archie

Thank you for helping. Three kinds of contributions are welcome.

## 1. Report a wrong or outdated answer

Open an issue on this repository, or email archie4rotary@gmail.com. Include the question you asked, what Archie answered, which assistant you used, and what you believe the correct answer is, with the RI document and section if you know it. The maintainer checks every report against the governing documents before anything changes.

## 2. Share a district customization (Tier 3)

If you added district policies, standing rules, or role-specific instructions to your Archie and it works well, send a short description: your district number, what you added, where it went (project instructions or uploaded files), and what improved. The maintainer reviews each one against RI policy before publishing it as an example.

## 3. Propose a change to the skill

Fork this repository and open a pull request against `main`. Keep these rules in mind:

- The seven critical rules (search before answering, cite everything, confidence signals, hard escalation boundaries, document hierarchy, response format, verification nudges) do not change without discussion. They are Archie's safety rails.
- Files in `plugins/rotary-archie/skills/rotary-archie/knowledge-base/` are verbatim Rotary International text. Do not edit them. Corrections to outdated details go in `plugins/rotary-archie/skills/rotary-archie/references/contact-corrections.md`.
- Never add a personal email address or phone number for any Rotary leader. Use only officially published organizational channels.
- Do not put platform or product names inside the skill folder. The skill installs on several assistants, so it stays neutral about all of them.
- By opening a pull request you agree that your contribution is licensed under the same terms as the file it changes: CC BY 4.0 for text, MIT for website code. See [LICENSE](LICENSE).

## How releases work

The maintainer publishes from a private working copy. Each release is tagged with the version (for example `v2026.1.0`) and carries `rotary-archie.zip` and a `.skill` file. Version numbers are `ROTARYYEAR.MAJOR.MINOR`: the first number is the Rotary year of the bundled documents, MAJOR changes when the critical rules change, MINOR for everything else.
