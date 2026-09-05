# AI use rules for Rotary content

Rotary International adopted two member-facing documents on AI use, both English edition, February 2026:

- **AI Guidelines for Members** (document identifier: ROTARY INTERNATIONAL – AI GUIDELINES FOR MEMBERS_EN, February 2026)
- **Member FAQ on AI Use** (document identifier: ROTARY INTERNATIONAL – MEMBER FAQ ON AI USE_EN, February 2026)

This file carries the parts that govern content and design work, because this skill is itself an AI tool producing Rotary content. It is a distilled copy so the skill works on its own; the full text ships inside the companion `rotary-archie` skill's knowledge base and on rotary.org. If Rotary publishes a newer edition, this file is stale until updated. Questions about whether a specific AI use is appropriate go to the Rotary Support Center (rotarysupportcenter@rotary.org), per the Guidelines.

## What the Guidelines say (Section 7, Protection of Intellectual Property)

- Do not use AI to create Rotary-branded logos, graphics, or other trademarked materials.
- Do not upload Rotary's logos, branded content, or other intellectual property into AI tools without explicit permission from Rotary International. This covers logos, images, photos, videos, and articles from the Brand Center, Rotary publications, and Rotary websites, and it covers club and district logos.
- Members may use AI to create club or district materials (event flyers, social posts) if they follow Rotary's brand guidelines. They may add their club or district logo to the AI-generated materials, but must not use AI to alter that logo, use AI to generate any Rotary logo, or upload the logo into the AI tool for other uses.
- All use of Rotary logos must comply with the Brand Center guidelines and Rotary's licensing system.
- Do not generate content that mimics a specific individual's likeness or creative style without permission, including Paul Harris and other individuals affiliated with Rotary.
- Do not name an AI tool in a way that implies Rotary International endorsement, official status, or organizational authority. Any use of "Rotary," "Rotarian," the Rotary logo, or other Rotary marks to name or represent an AI tool needs a clear identifier of the sponsoring club or district and cannot suggest the tool is operated or endorsed by Rotary International.

The FAQ (question 9) restates the core: do not use AI to generate Rotary logos of any kind; always use official brand elements from the Brand Center; do not upload official logos or brand elements into public AI tools; you can add your club or district logo to AI-made materials but should not alter any Rotary logo.

## What the Guidelines say (Section 8, Photos, Videos, and Likenesses)

- Do not upload identifiable photos or videos of members, volunteers, beneficiaries, participants, or partners into AI systems without their explicit permission.
- Do not use AI to create, alter, animate, or otherwise manipulate images that imitate or use a person's likeness (deepfakes, composites, synthetic images) without explicit consent.
- For minors or sensitive contexts, obtain written approval from a guardian or anyone else necessary before uploading or using images in AI tools.
- The FAQ adds: do not upload photos from the Brand Center; avoid posting AI-generated images unless you hold the proper licenses; clearly label any image generated or heavily altered by AI.

## Photo permissions (Rotary Brand Center)

These sit beside the Section 8 material above. They are Brand Center rules about photography and video generally, not AI rules, and they apply whether or not an AI tool is involved (Brand Center: our-brand/brand-elements/images-and-videos, and images-and-videos/getting-permissions).

- **A signed, written release from every visible person.** Obtain signed, written permission from every person visible in an image or recording before posting it to a website or social media account. This covers club members, all participants and attendees at a service project, and people walking by in the background. Verbal or emailed permission is not sufficient. A written consent names the subject and states that they agree to be recorded and that the person recording may use the recording.
- **Any identifiable person, every time.** A release is needed for each identifiable person in anything you publish, including illustrations based on real people. Ask for it to be signed at the time of the recording. One person cannot sign on behalf of a group.
- **Under 18: avoid, or get a guardian release.** If possible, avoid including anyone under 18. If they appear, a parent, legal guardian, or legal representative must sign the release. Rotary International requires this worldwide for any person under 18, whatever the local age of majority. Best practice is to think hard before using recordings of minors at all.
- **The photographer owns the copyright, not the club.** The copyright to a photo, video, or interview belongs to the person who made it. If a club member takes the photo, that member owns it, and the club must obtain permission or a license before using it. If the owner licenses it onward, the subjects must have consented to that license in their release.
- Releases vary by country and state, so Rotary International does not supply a form. Consult a local attorney for a valid model release. A property release may also be needed when identifiable property, a brand name, or a trademarked building appears.
- Store each signed release with an image of the subject, protect the subject's interests first, and do not publish images or stories that could put a subject or their family at risk.

If a user asks for an image or video workflow without permissions in hand, say what is missing before drafting the piece, and reserve the image zone rather than filling it.

## What the Guidelines say (Section 10, Disclosure of AI Use)

- Be open about using AI when creating Rotary content. Disclose when AI tools play a significant role, such as generating text, images, or designs. Minor edits and formatting do not need disclosure.
- Label AI-generated or AI-assisted materials when appropriate. Example wording from the Guidelines: "Generated with AI assistance," "Created using AI tools," "AI-generated content, verified by human reviewer."
- AI should support, not replace, the judgment and creativity of Rotary participants.
- Section 9 adds: fact-check AI-generated material before sharing.

## How this skill applies them

### Logos: reserve the zone, wait for the file

1. **Never produce a Rotary mark.** No drawn, generated, traced, described-for-generation, or reconstructed wheel, wordmark, signature, or lockup. No "close enough" gear shape, no typeset "Rotary" wordmark styled to stand in for the signature, no rebuilding a lockup from the wordmark and wheel as separate parts. A deadline does not change this. Setting a club, district, or zone **name** in ordinary text is fine; a faux signature is not.
2. **Reserve a logo zone instead.** In any layout, spec, or file, mark the zone with: which official element belongs there (Masterbrand Signature, or the club, district, or zone signature lockup), which color version (full color, one-color Azure, black, or white reversed), target size, the minimum size, clear space, and position. Label it plainly as a placeholder that the official file replaces. Nothing in the zone should resemble a logo.
3. **Tell the user where the file comes from:** brandcenter.rotary.org, the Brand Center logo template tool for club, district, and zone lockups (the `rotary-logo` skill drives it when installed), or their own previously issued files.
4. **If the user supplies the official file, place it unaltered.** Proportional scaling within the minimums and choosing the issued color version are the only permitted operations. No recoloring, recropping, slimming, stretching, effects, redrawing, or "cleanup." If the request asks for any alteration, decline that part, cite the Guidelines, and offer the compliant route: use the issued file as-is, bring the theme color in elsewhere, or request a different official variant from the Brand Center.
5. **Do not ask users to upload logos for anything beyond placement.** The Guidelines permit adding a club or district logo to AI-made materials, not uploading it for other uses. Where the user can place the file themselves in their own design tool, say so as the preferred route.

### Imagery: real photography, never synthetic Rotarians

1. Rotary imagery is candid, editorial photography of real people. Do not generate illustrations, renderings, or synthetic photos of Rotarians, members, beneficiaries, or events to fill a Rotary piece, even as "flat vector" or "placeholder art." (This is the skill's application of Rotary's imagery standard and FAQ question 6, which warns against posting AI-generated images; cite it that way. Section 8 governs real people's likenesses, not generic figures.) Reserve an **image zone** with the subject, orientation, and size, and tell the user to use a real photo of their own members or project.
2. If the user still wants generated artwork after hearing this, produce it only as clearly labeled AI-generated art (Section 10 wording), never in a style that could pass for photography, and never depicting a real or named person.
3. Do not alter a real person's likeness: no changed expressions, faces, bodies, or composites. Background cleanup, blur, or color correction on a photo of an identifiable person is still an alteration of an image using their likeness; it needs that person's explicit consent, and the Guidelines also bar uploading identifiable photos into AI systems without permission. Point the user to a photo editor for those edits, and to the subject for consent.
4. Never generate or alter the likeness of Paul Harris or any Rotary figure.

### Disclosure: say when AI did the work

When this skill generates the design, the layout file, the artwork, or the substantive text of a piece, add one line to the note to the user recommending an AI disclosure on or with the piece, quoting the Guidelines' wording ("Generated with AI assistance" or "Created using AI tools"), and say where it can go (a footer line, the post text, or the caption). Minor edits, proofreading, and formatting need no disclosure. Remind the user to fact-check names, dates, and figures before publishing.

### Naming an AI tool

If a club or district names a chatbot or assistant, the name needs a clear club or district identifier and must not imply Rotary International operates or endorses it.

## One-sentence citation form

When declining or redirecting under these rules, cite the source in one sentence, for example: "Rotary's AI Guidelines for Members (February 2026, Section 7) do not allow AI to generate or alter Rotary logos, so I have reserved the logo zone for the official file from the Brand Center."
