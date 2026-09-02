# Tier 3: Customize Archie

A Tier 2 build with your district's local policies, standing rules, and role-specific priorities layered on top. Archie can then cite both RI and local rules in the same response.

## Status

Roadmap. The Tier 3 pattern is defined, but the supporting code snippets, overlay templates, and worked examples are still in development. This file holds the design intent so the structure stays consistent across future districts that adopt it.

## Who this is for

Experienced users, district IT volunteers, multi-district committees, and zone leaders who want a consistent Archie deployment across several districts. Builders, not first-time users.

## What Tier 3 adds on top of Tier 2

| Capability | Tier 3 |
| --- | --- |
| Everything in Tier 2 | Yes |
| District standing rules and bylaws in the knowledge base | Yes |
| District operating policies and budget documents | Yes |
| Role-specific instruction overlays (governor, governor-elect, AG) | Yes |
| Sub-zone or area-specific behavior (e.g., RIBI vs non-RIBI) | Yes |
| Multi-district coordination patterns | Yes |

## The design pattern

A Tier 3 build is a Tier 2 build with two additions:

1. **District document overlay.** A `knowledge-base/district-XXXX/` folder (XXXX is the district number) supplied by the workspace or Project, not edited into the skill's bundled corpus. District documents use the same markdown format as the seven RI files. The skill resolves its bundled RI corpus first and treats any workspace-provided `knowledge-base/` as district-level supplements, so the Project knowledge upload carries the overlay alongside the RI files.
2. **Instruction overlay.** A short block of text appended to the Claude Project Instructions field (after the canonical Archie text). The overlay names the district, lists the district-specific documents, and clarifies how local rules interact with RI rules. The overlay never overrides the document hierarchy. RI policy still governs unless a lawful local rule applies.

## What does not change at Tier 3

The seven critical rules in `instructions/claude-project.md` are non-negotiable. Hard escalation boundaries are non-negotiable. Citation discipline is non-negotiable. Tier 3 adds local context, it does not relax the safety rails.

## Next steps for this folder

1. Build one worked example for a single district. Use a real district with permission.
2. Document the example as `tier-3-example-district-XXXX.md` in this folder.
3. Extract the reusable patterns into a `tier-3-overlay-template.md`.
4. Add code snippets (instruction overlays, file naming conventions, knowledge upload checklists) to a `tier-3-snippets/` subfolder.
5. Publish the result on the project hub.

## Submit ideas

If your district has built a Tier 3 customization that works, share it: archie4rotary@gmail.com.
