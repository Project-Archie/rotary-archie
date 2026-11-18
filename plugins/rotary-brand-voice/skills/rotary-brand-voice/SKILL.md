---
name: rotary-brand-voice
description: >
  Voice, tone, naming, and visual identity for Rotary content produced by
  clubs, districts, and zones. Triggers on any request to write, draft, edit,
  rewrite, review, translate, or design Rotary material: club and district
  newsletters, governor monthly letters, social and Facebook posts, flyers,
  posters, slides and presentation decks, conference and event collateral,
  invitations, club and district websites, email, speeches and remarks, press
  releases, member recruitment and retention copy, award and recognition text,
  and design specs covering colors and hex values, typefaces and font
  substitutes, logo and signature lockup choices, imagery direction, type
  sizes, and depictions of Rotary's areas of focus. Trigger on Rotary content
  even when the request never mentions branding, voice, fonts, or design, and
  on casual phrasings such as "make it sound like Rotary," "clean this up," or
  "what colors should we use." Do NOT use for Rotary policy or governance
  questions (RI Bylaws, Code of Policies, club constitution, grant rules,
  youth protection, district procedure), which belong to the rotary-archie
  skill. Do NOT use for content unrelated to Rotary. Worksheets, handouts,
  feedback forms and compilations, reports, memos, meeting notes, session specs,
  and trackers follow the document standard (brand marks, document formatting,
  plain voice), not the full marketing standard.
metadata:
  status: draft
  version: 0.2.4
  last-updated: 2026-09-06
---
# Rotary Brand Voice and Visual Identity

How Rotary content sounds and looks: voice, naming, color, typography, logos and lockups, imagery, and the areas of focus. It does not decide what is allowed. That is policy.

**The Rotary Brand Center (brandcenter.rotary.org) governs.** The references state its rules as rules. Older 2014 material survives only inside blocks headed "From the 2014 guidelines (not on the current Brand Center)," as optional house guidance, never as something Rotary requires. Where the Brand Center is silent, say so and point to its template or graphics@rotary.org rather than inventing a rule.

## Handoff contract with rotary-archie

**rotary-archie decides what is policy correct. This skill decides how it sounds and looks.** Hand any policy question ("can our club do this," "what does RI require," "is this grant eligible") to rotary-archie if installed, or to the Rotary Support Center. Never answer policy here. When a piece needs both, settle policy first, then shape the copy.

## Two standards: marketing material and documents

Brand compliance in full is for material that carries Rotary's name to an audience. Everything else Rotary-produced is a document: it carries the brand marks but is formatted and written as a document.

| Standard | What it covers | What applies |
|---|---|---|
| Marketing standard | Anything a member, club, prospect, sponsor, or the public will see as a finished piece: newsletters, social, flyers, posters, decks, websites, email blasts, speeches, press, event collateral, recognition text | Everything in this skill: voice attributes, naming, Brand Center colors and fonts, logos and lockups, presidential message, imagery, readability floors, call to action |
| Document standard | Worksheets and handouts, workbooks, feedback forms and compilations, reports, planning memos, meeting notes, session specs, trackers, rosters, handoffs, and anything else that is a document first | Brand marks with document formatting: the club, district, or zone logo file top left, placed unaltered; headings in Open Sans bold (Arial if unavailable) in Rotary Royal Blue `#17458f`; one Rotary Gold `#f7a81b` rule under the title at most; body in Calibri or Arial 11 to 12pt in near-black; a plain one-line footer naming the program. Naming accuracy, the silent corrections, and no em dashes. Plain documentation voice. |

On the document standard, do not: impose the four voice attributes, add a call to action, set body text in Georgia or Sentinel or any serif, push body type above 12pt, color body text, add a second accent color, run the marketing self-check, or reserve extra logo zones. Standard headings, tables, bullets, and fill lines are the layout. The zone's worked examples are the Partner Education Track handouts (P4 roadmap worksheet v0.3, P7 feedback form): lockup, blue Open Sans or Arial headings, gold rule, Arial body, gray footer. The Brand Center publishes no document template; Calibri body and the gold rule are this zone's house choice, so label them that way if asked.

Deciding: is it a finished piece for an audience, or a document someone works from or reads for information? Piece means marketing standard. Document means document standard, whether it goes to a room of participants or three co-leads. Printed for a room of Rotarians, the 60+ readability floors still apply, because that is about the reader.

### Casing pass, required before a document ships

Run it on the whole document, quotes included. Verbatim quotes from members, survey responses, and transcripts get their casing normalized; that counts as a light spelling fix, not an edit to meaning.

1. Acronyms in capitals: DG, DGE, DGN, PDG, AG, RI, IA, TRF, GELS, GNLS, PELS, DLA, RYLA, RLI, Q&A. Plural with a lowercase s and no apostrophe: PDGs, DGEs.
2. Named things capitalized: sessions and tracks (Speaking with Confidence, Partner Education Track), events (International Assembly, Education Week), pages and tools (Home Base, ABC's of Rotary), and standing groups (Education Team, Past-Partner Panel when used as a name).
3. Rotary naming per the table in `naming-and-trademarks.md`: Rotary, Rotary International, The Rotary Foundation, Rotaract, Interact.
4. Headers, footers, and frontmatter get the same pass as the body. A footer that says "education team" while the body says "Education Team" fails.
5. Rendered check: after building a Word or PDF file, extract its text and grep for the lowercase forms. Do not trust the source file alone.

### Working alongside humanizer

The humanizer skill often loads on the same task. The two agree on no em dashes and plain prose. Where they meet, this order holds:

- Humanizer's rule against title case applies to headings only. It never lowercases a proper noun, an acronym, a session name, or a group name. The casing pass above wins.
- On the document standard, humanizer runs in its own reference-text mode: no injected opinions, no first person, no added personality. Plain documentation voice is the correct human voice there.
- Humanizer's ban on bold-header bullet lists stands. Use a table or a plain list.

## Reference files

| Task | Load |
|---|---|
| Writing, editing, or reviewing copy | `voice-and-tone.md` plus `naming-and-trademarks.md` |
| Colors, fonts, imagery, areas of focus, type sizes | `visual-identity.md` plus `naming-and-trademarks.md` |
| Any logo, lockup, event or project logo, partner or sponsor, program, End Polio Now, presidential message, or Mark of Excellence task | `logos-and-lockups.md` plus `naming-and-trademarks.md` |
| Mixed work (a flyer, a captioned slide, a newsletter) | all four |
| Any task touching a logo, image, photo, likeness, or generated file or artboard, or asking this skill to draw, generate, edit, or place a visual | `ai-use-rules.md` in addition to the above |

`naming-and-trademarks.md` loads on every task: naming errors are the most common failure in Rotary content. `ai-use-rules.md` carries the AI Guidelines for Members (February 2026) plus the Brand Center photo-permission rules, and is mandatory before any visual.

## Silent corrections

When a request carries a wrong Rotary fact the sources settle, correct it and add one plain sentence saying what changed and why. Do not argue, do not stop to ask.

- "Six areas of focus." There are seven; the environment was added in 2021.
- An outdated area name, for example "water and sanitation," now "Water, sanitation, and hygiene."
- "A Rotary International global grant." Global grants come from The Rotary Foundation.
- "Rotary International" as a casual synonym for Rotary in body copy.
- A wrong hex, for example Sky Blue given as `#0067c8`, which is Azure.
- A club or district theme, anywhere in the piece: as a tagline, caption, subhead, hashtag, or badge line, not only in an official theme slot. The Brand Center says homegrown themes are retired and replaced by the annual presidential message ("Create Lasting Impact" for 2026-27). Offer the presidential message in its place or drop the line; do not keep the theme as a caption, and do not suggest moving it to other club materials.
- The bare Masterbrand Signature on club material. The club, district, or zone logo goes there instead.
- More than one partner or sponsor in one lockup. One goes in the lockup, the rest are listed separately away from the logo. Equal partners means no lockup.
- An event or project named "Rotary Picnic" style. Add the club identification: "Rotary Club of Springfield Picnic at the Beach."

Example: "One change: Rotary has seven areas of focus, not six. The environment was added in 2021, so the post now says seven."

A correction is only as good as its source. Never correct toward a rule the Brand Center does not carry.

## Voice quick-reference

Four attributes, applied together, never one at a time: **persevering, inspiring, compassionate, smart.** Rotary's voice is clear, persuasive, and reliable. It is personal and sincere.

Core message: together, we take action to create lasting change in our communities and around the world.

People of Action copy structure: say what you did, offer proof, issue a call to action. Give a reason to believe through stories, data, testimonials, member growth, or credible partnerships. Active voice, collective "we," local impact. **No Rotary jargon in public copy.** Social posts carry #PeopleofAction and #Rotary.

## Naming quick-reference

| Term | Use it for |
|---|---|
| Rotary | the communicative name: body copy, headlines, social, email |
| Rotary International | the legal entity and its governance work, never a synonym for Rotary |
| The Rotary Foundation | fundraising and grants, global and district |
| Rotaract, Interact | sub-brands with their own logos and colors, never called "Rotary" |
| Rotary Zones 26 & 27 | the zone lockup name |

Event and project names carry the club or district identification: "Rotary Club of Evanston Picnic at the Beach," not "Rotary Picnic at the Beach." Club URLs carry the club name.

## Colors quick-reference

| Color | Hex | As seen in |
|---|---|---|
| Rotary Royal Blue | `#17458f` | the word "Rotary" in the Masterbrand Signature |
| Rotary Gold | `#f7a81b` | the wheel in the Masterbrand Signature and Mark of Excellence |
| Azure | `#0067c8` | the one-color Masterbrand Signature and Mark of Excellence |
| Sky Blue | `#00a2e0` | the Interact logo |
| Cranberry | `#d41367` | the Rotaract logo |
| Cardinal | `#e02927` | the End Polio Now logo |

All 26 Brand Center colors, with Pantone, CMYK, hex, and RGB, are in `visual-identity.md`.

**Colors are used in their pure forms, never altered nor screened.** The wider palette is for the elements of a piece, never the logo; logo colors come from the template and cannot be changed.

## Typography quick-reference

- **Primary, for headlines and navigation labels:** Frutiger (licensed), Open Sans (free), Arial (free).
- **Secondary, for body text, secondary headlines, and captions:** Sentinel (licensed), Georgia (free).

Use the free options when the licensed ones are unavailable or cost-prohibitive. The Brand Center requires no condensed or all-caps treatment and publishes no weights, so **regular Open Sans or regular Arial for headlines and navigation is on brand.**

This skill's own guardrail, not a Rotary rule: there is no "Rotary Sans" or "Rotary Serif." Do not invent a Rotary typeface.

## Areas of focus quick-reference

Seven, each with an official color, in this fixed order when shown together:

1. Peacebuilding and conflict prevention, Azure `#0067c8`
2. Disease prevention and treatment, Cardinal `#e02927`
3. Water, sanitation, and hygiene, Sky Blue `#00a2e0`
4. Maternal and child health, Violet `#901f93`
5. Basic education and literacy, Orange `#ff7600`
6. Community economic development, Turquoise `#00adbb`
7. Environment, Grass `#009739`

Labels are optional, black or white versions exist for contrast, and grouped icons come horizontal, vertical, or in a circle. **The club, district, or zone logo must appear alongside them, and the icons cannot be altered.** The old rule that the seven take one neutral color and are never color-coded individually is **superseded.**

## Logo quick-reference

- Use the **club, district, or zone logo**, not the bare Masterbrand Signature, on club material.
- Regular or Simplified may be used anywhere; **Simplified is recommended below 1.25 cm (0.5 inches) or for embroidery.**
- A **lockup carries one entity:** club logo, vertical line, one partner, sponsor, program, or event. Equal partners means no lockup and a separate listing.
- **Nothing is added to a logo:** no extra text, mottos, event themes, or graphics.
- The **Mark of Excellence is never used alone** and is never a club's official logo; it sits near the club or district logo.
- **Polio events and fundraisers:** the Brand Center mechanism is the **End Polio Now lockup** (its secondary logo with the club logo). Offer it before, or alongside, any custom event graphic.
- Clear space equals the height of the capital "R" in the wordmark, or "I" in Interact. No minimum size is published.

Geographic identifiers, End Polio Now, the presidential message, and the 13 do's and don'ts: `logos-and-lockups.md`.

## Readability for print and slides

Most Rotarians reading a club or district piece are over 60. Bias type sizes up, and cut content before shrinking type. Floors: 12pt print body (14pt preferred), 10pt captions, 24pt slide body, 36pt slide headlines. **These are this skill's guidance, not a Rotary rule:** the Brand Center publishes no type sizes and no logo or icon minimums. Say so.

## Words and tics to avoid

| Avoid | Instead |
|---|---|
| Rotary jargon in public copy | Spell it out. No DG, AG, RYLA, RI, TRF. |
| The wheel placed left of the wordmark | Wordmark left, wheel right. Never rebuild the signature. |
| A club name right of the wheel | That space is reserved for a partner, sponsor, program, or event. |
| A motto or theme attached to the logo | Nothing joins the logo. Set it elsewhere. |
| Invented typeface names | Frutiger, Open Sans, Arial, Sentinel, Georgia. |
| Screened or faded logos and colors | Both are used pure. |
| Synthetic or generated photos of Rotarians | An image zone for a real photo of the club's own people. |
| "Rotary family," "make a difference," exclamation stacking, "Yours in service" closes | Name the people, say what happened, close plainly. More in `voice-and-tone.md`. |

## No em dashes, anywhere in the reply

Never use an em dash. Use commas, periods, or colons, or restructure. For ranges use "to" ("May 15 to 17"). This covers the whole reply, not only the deliverable: headings, notes, bullets, corrections, asides.

## Self-check before returning a draft

1. All four voice attributes present, one clear call to action, no Rotary jargon in public copy.
2. Names correct, and event names carry the club identification.
3. Seven areas of focus, current names, official colors and fixed order when shown together; hex values match the color table.
4. Fonts among the five published, no condensed or caps requirement imposed, no invented typeface.
5. Club, district, or zone logo rather than the bare signature, nothing added to it, lockup carries one entity.
6. No club or district theme anywhere in the piece; the presidential message replaces it.
7. No Rotary mark produced or imitated; logo zone reserved with a full spec, or a supplied file placed unaltered.
8. No synthetic people as Rotary imagery, photo releases raised, AI disclosure recommended when this skill did the substantive work.
9. Type sizes biased up and labeled as this skill's guidance.
10. Zero em dashes in the whole reply.
11. Any silent correction stated in one sentence, and no policy answered that belonged to rotary-archie.

## Zones 26 and 27

Big West work only. Other zones can ignore this section.

- Brand Center rule: Regular or Simplified may be used on all print and digital applications, with **Simplified recommended below 0.5 inches (1.25 cm) or when embroidered.**
- Big West materials use the **Simplified** Zones 26 & 27 lockup by local convention. That is a zone preference, not a Rotary International rule; say so when applying it.
- Use the official zone lockup files. Never rebuild one from wordmark and wheel components.
- A zone realignment takes effect July 1, 2028. Material dated beyond that should not assume the current district list.

## Logos, images, and AI use

Rotary International's **AI Guidelines for Members** (February 2026) bind this skill. Full application, plus the Brand Center photo-permission rules, in `ai-use-rules.md`.

1. **Never produce a Rotary mark.** No drawn, generated, traced, or reconstructed wheel, wordmark, signature, or lockup, and no typeset "Rotary" standing in for the signature. "Close enough" and a deadline change nothing.
2. **Reserve a logo zone and wait for the file.** Name the official element, color version, size, clear space, and position, and label it a placeholder for the Brand Center file. Nothing in the zone may resemble a logo.
3. **A supplied file is placed unaltered.** Proportional scaling and the issued color version are the only operations. Decline recolor, slim, stretch, crop, effects, or "cleanup," with a one-sentence citation and a compliant route.
4. **No synthetic Rotarians.** Reserve an image zone for a real photo of the club's own members, and raise the signed-release requirement.
5. **Disclose** the Guidelines' wording ("Generated with AI assistance") whenever this skill produced the design, file, artwork, or substantive text.

This skill bundles no logo, font, or icon files: they are trademarked and licensed assets.
