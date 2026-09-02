# Changelog

All notable changes to Project Archie. Rotary years run 1 July to 30 June.

Version format: `ROTARY-YEAR.MAJOR.MINOR`. The first number is the Rotary year of the bundled governing documents. MAJOR increases when one of the seven critical governance rules changes; MINOR covers everything else.

## [2025.3.2] - 2026-09-01

### Added
- You can now ask Archie what version it is running. It reports its version number and last-updated date, and points you to the release page so you can compare against the latest.
- Archie now ships as tagged GitHub Releases, each with two downloadable packages: a flat zip for the Claude, ChatGPT, Gemini, and Grok upload dialogs, and a `.skill` file for Claude Desktop's double-click install.
- Tier 2 (the Claude Project setup) is now framed as "Install the Archie Skill" first, with the Claude Project itself as an optional memory layer on top. New per-platform install guides were added.

### Changed
- No changes to the seven critical governance rules in this release, so this stayed a MINOR update.

## [2025.3.1] - 2026-08-05

### Changed
- Fixed a formatting problem where Archie's answers came back as long, all-bullet lists instead of natural prose. Responses now default to plain paragraphs, with lists reserved for cases where they genuinely help, such as checklists, comparisons, or true sequences.
- Short lookup answers are now capped at roughly 200 words.
- The same prose-first fix was applied to the ChatGPT Project instructions, both the Skills-enabled version and the no-Skills fallback.
- The seven critical governance rules were not touched in this release.

## [2025.3.0 maintenance] - 2026-08-04

### Fixed
- An early version of the fix above was applied to the public Archie GPT on ChatGPT. Its answer-structuring guidance had been read too literally by the model and was producing all-bullet responses, so it was rewritten to lead with prose. The fuller fix landed the next day, in 2025.3.1 above.

## [2025.3.0] - 2026-08-03

### Changed
- Refreshed Rotary International contact channels across Archie's escalation guidance, verified directly with RI in July 2026.
- General club and district support now routes through membership@rotary.org.
- Youth safety concerns route to RI's official reporting portal at my.rotary.org/youth-protection, with RI's stated 72-hour response expectation, plus youthprotection@rotary.org and cultureandvalues@rotary.org.
- Insurance questions route to insurance@rotary.org.
- Media inquiries route to pr@rotary.org.
- General support routes to the Rotary Support Center.
- District staff lookups route through my.rotary.org's representative directory.
- Archie now recognizes when its bundled reference documents contain an outdated contact address (the corpus still prints the retired cds@rotary.org, for example) and points you to the current channel instead of repeating the stale one.
- This was a MAJOR version bump because it changed one of the seven critical rules governing how Archie handles escalation and contact guidance. A MAJOR bump means every surface, GPT, Claude Project, and skill, gets fully re-verified before release.
- A privacy audit of every Archie surface confirmed there are no personal names, emails, or phone numbers anywhere in the shipped package, beyond official @rotary.org channels, the official toll-free line, and the project's own feedback inbox (archie4rotary@gmail.com).

### Known limitations
- The bundled knowledge base is the 2025 Rotary year edition and is due for its annual refresh once the 2026 Rotary year documents are published.

## [2025.2.0] - 2026-06-12

### Changed
- The skill now ships with its full knowledge base bundled directly inside the package. No separate download or setup step is needed to get the seven governing documents.
- If you're using Archie inside a Claude Project with your own uploaded documents, those are now treated as a supplementary, district-specific layer on top of the bundled documents, not a replacement for them.
- Language throughout the shipped package was made platform-neutral, with no references to a specific AI vendor or tool baked into the instructions, so Archie reads the same regardless of which platform it's installed on.

### Known limitations
- Simple lookup answers sometimes ran longer than intended in this version. Fixed in 2025.3.1's prose-first rewrite.

## [2025.1.1] - 2026-05-12

### Added
- Added draft fallback instructions for ChatGPT users who do not yet have access to ChatGPT Skills, so Archie is usable on Plus and Pro accounts ahead of general availability. This fallback retires once ChatGPT Skills opens to those tiers.

## [2025.1.0] - 2026-05-12

### Added
- Initial release. Archie bundles the seven official Rotary International governing documents (2025 Rotary year edition): the RI Constitution, RI Bylaws, Code of Policies, Manual of Procedure, Governor's Manual, District Planning Guide, and a model Club Constitution.
- Also bundled: Rotary International's own AI guidance for members, the Member FAQ on AI Use and the AI Guidelines for Members, both February 2026 editions.
- Archie resolves conflicts between these documents using RI's own hierarchy: RI Constitution, then RI Bylaws, then Code of Policies, then Manual of Procedure, then Governor's Manual, then Planning Guide, then Club Constitution. The two AI guidance documents are treated as guidance, not governing text.
- Build guides published for three installation tiers: a free public GPT, a Claude Project, and a self-contained skill.

---

Full internal history, test matrix, and deployment records are kept by the maintainer and are not part of this repository.
