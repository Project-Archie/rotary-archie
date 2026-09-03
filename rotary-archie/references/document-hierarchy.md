# Document Authority Hierarchy & Citation Guide

This file governs how Archie searches, prioritizes, and cites Rotary
International governing documents. It is the foundational reference for
policy lookup accuracy.

## Document inventory (Rotary year 2026)

| Priority | Doc ID | Title | Scope | Weight |
|---|---|---|---|---|
| 1 | constitution2025 | RI Constitution | Supreme governing document of Rotary International | 0.93 |
| 2 | bylaws2025 | RI Bylaws | Operational rules implementing the Constitution | 0.96 |
| 3 | code2026 | Code of Policies | Board-adopted policies, procedures, and programs (October 2026 edition) | 0.90 |
| 4 | mop2025 | Manual of Procedure | Procedural guidance, recommended club bylaws | 0.84 |
| 5 | govmanual2025 | Lead Your District (Governor Manual) | Practical leadership guide for DGs | 0.75 |
| 6 | dpg2025 | District Planning Guide | Goal-setting templates and planning tools | 0.70 |
| 7 | clubconst2025 | Standard Rotary Club Constitution | Club-level governance framework | 0.72 |
| 8 | trfcode2026 | Rotary Foundation Code of Policies | Trustee-adopted policies for Foundation programs, grants, and funds (October 2026 edition) | 0.88 |

**Note on weights:** These are retrieval-recall tuning values carried over from
reference_index.json: they steer which document to search first because it is
most likely to hold the answer (the RI Bylaws score highest because they hold
the most frequently referenced procedural rules). They never decide authority.
When documents conflict, the Priority column and Rule 1 below govern, without
exception.

## Conflict resolution rules

### Rule 1: Higher authority governs

When two documents address the same topic differently:
- RI Constitution overrides everything
- RI Bylaws override Code of Policies, Manual of Procedure, and below
- Code of Policies overrides Manual of Procedure and below
- Manual of Procedure overrides the Governor Manual and Planning Guide
- The Rotary Foundation Code of Policies governs Foundation programs, grants, and funds; the RI Constitution and RI Bylaws still outrank it, and it does not override the Code of Policies on RI matters outside the Foundation

### Rule 2: RI policy vs. district policy

Districts may adopt local policies that supplement RI policy. When they conflict:

1. **Cite both sources** — Show the user what RI says and what the district says
2. **State the default rule:** "RI policy governs unless a lawful local rule applies"
3. **Flag the conflict explicitly** — Don't silently pick one over the other
4. **Recommend verification** if the conflict has operational consequences

Example output:
> RI Bylaws §9.030 requires [X]. Your district's policy states [Y], which
> differs from RI guidance. RI policy governs unless your district has an
> approved local exception. I recommend confirming with your Zone coordinator
> or the Rotary Support Center (rotarysupportcenter@rotary.org).

### Rule 3: Club-level queries use club sources first

When the question is about club governance (bylaws review, membership rules,
board procedures):
- **Prefer** the Standard Rotary Club Constitution and the Recommended Club
  Bylaws from the Manual of Procedure
- **Avoid** citing RI Board of Directors provisions unless the clause directly
  concerns RI-level governance
- This prevents confusing club-level "Board of Directors" with RI's Board

## Citation format standards

### Inline citations

Use these formats consistently:

| Document | Citation format | Example |
|---|---|---|
| RI Constitution | (RI Constitution, Art. [X]) | (RI Constitution, Art. 5) |
| RI Bylaws | (RI Bylaws §[section]) | (RI Bylaws §9.030) |
| Code of Policies | (Code of Policies §[section]) | (Code of Policies §2.030) |
| Manual of Procedure | (Manual of Procedure, p. [X]) | (Manual of Procedure, p. 42) |
| Governor Manual | (Governor Manual, Ch. [X]) | (Governor Manual, Ch. 3) |
| District Planning Guide | (Planning Guide, p. [X]) | (Planning Guide, p. 15) |
| Club Constitution | (Club Constitution, Art. [X]) | (Club Constitution, Art. 7) |
| Rotary Foundation Code of Policies | (TRF Code of Policies §[section]) | (TRF Code of Policies §33.080) |

### Citation rules

1. **Every substantive policy claim gets a citation.** No exceptions.
2. **Use the most specific locator available** — section numbers over page
   numbers, article numbers over chapter numbers.
3. **When citing semantic units,** use the format: `[Doc: unit_id]`
   (e.g., `[Doc: clubconst2025:attendance.rule85@2025-v1]`)
4. **Multiple citations** for a single claim are fine when multiple documents
   reinforce the same point. List them comma-separated.
5. **When paraphrasing,** still cite. Citations aren't just for direct quotes.

## Search strategy for the knowledge base

### Simple policy lookups

1. Search the specific topic: `"district governor term limits"`
2. Check if the result comes from a document in the hierarchy
3. Cite accordingly

### Complex or ambiguous questions

1. **Search broadly first:** `"membership termination"`
2. **Then search each relevant document level:** Check RI Bylaws, Code of
   Policies, and Manual of Procedure for their respective treatments
3. **Cross-reference:** Look for semantic units that have `crossrefs` pointing
   to related provisions
4. **Synthesize:** Present the complete picture with proper authority ranking

### When search returns nothing

1. Try alternative terminology (Rotary uses specific vocabulary — "club
   termination" vs. "club dissolution" vs. "club charter revocation")
2. Search the semantic_units.json for keyword matches
3. If still nothing, state clearly that the answer isn't in the available
   documents and direct the user to verification channels

## Using semantic_units.json

The semantic_units.json file, bundled in this knowledge base, contains
pre-indexed policy units with structured metadata:

- `id`: Unique unit identifier
- `section_path`: Where it lives in the document hierarchy
- `keywords` and `tags`: For targeted search
- `rules`: If/then logic for applying the policy
- `citations`: Exact file and page references
- `crossrefs`: Related units in other documents
- `priority`: Retrieval weight

When a semantic unit matches the query:
1. Use its `rules` to apply the policy correctly
2. Use its `citations` for exact source references
3. Check its `crossrefs` for related provisions that might affect the answer

## Rotary terminology quick-reference

Define these on first use in any response:

| Term | Definition |
|---|---|
| DG | District Governor — elected leader of a Rotary district |
| DGE | District Governor-Elect — DG for the following year |
| DGN | District Governor-Nominee — DG two years out |
| PETS | Presidents-Elect Training Seminar |
| DTTS | District Team Training Seminar |
| RACI | Responsible, Accountable, Consulted, Informed (project framework) |
| TRF | The Rotary Foundation |
| PDG | Past District Governor |
| AG | Assistant Governor |
| Rule of 85 | Optional attendance exemption when age + Rotary years ≥ 85 |
