# Knowledge Base Manifest

Expected files in this folder, with size and provenance. Use this manifest to verify a fresh deployment has the right files and to detect missing or corrupted documents.

## Core governing documents

| Filename | Size | Lines | Source PDF | Year |
|---|---:|---:|---|---:|
| 1_2025_Lead_Your_District_-_GOV_MANUAL.md | 190.92 KB | 4,821 | 1 2025 Lead Your District - GOV MANUAL.pdf | 2025 |
| 2_2025_District_Planning_Guide.md | 4.70 KB | 89 | 2 2025 District Planning Guide.pdf | 2025 |
| 3_2025_Manual_of_Procedure.md | 241.66 KB | 3,795 | 3 2025 Manual of Procedure.pdf | 2025 |
| 4_2025_Code_of_Policies.md | 1.19 MB | 20,014 | 4 2025 Code of Policies.pdf | 2025 |
| 5_Rotary_International_Bylaws.md | 136.29 KB | 2,352 | 5 Rotary International Bylaws.pdf | 2025 |
| 6_Rotary_International_Constitution.md | 9.89 KB | 189 | 6 Rotary International Constitution.pdf | 2025 |
| 7_Rotary_Club_Constitution.md | 30.29 KB | 513 | 7 Rotary Club Constitution.pdf | 2025 |

Total: approximately 1.8 MB of markdown across 31,773 lines.

## Metadata files

| Filename | Size | Purpose |
|---|---:|---|
| manifest.json | 1.22 KB | Programmatic index of source documents, with doc_id, source PDF filename, and year. |
| reference_index.json | 218 B | Retrieval priority weights for each document. Higher weight means Archie should prefer that source when answering. |
| semantic_units.json | 5.48 KB | Cross-reference units (one JSON object per line) that link related provisions across documents. |

## Reference subfolder

Supplementary RI guidance that complements the seven core governing documents. These are guidance-tier, not constitutional or bylaws-level sources, but they let Archie cite RI's actual position on topics like AI use instead of guessing or escalating.

| Filename | Size | Format | Source |
|---|---:|---|---|
| rotary-ai-guidelines-for-members.md | 10.59 KB | Markdown | Rotary International, February 2026 (converted from official PDF) |
| rotary-member-faq-on-ai-use.md | 7.86 KB | Markdown | Rotary International, February 2026 (converted from official PDF) |

The markdown versions are what the skill searches. The authoritative PDF originals are published by Rotary International and are not included in the package.

## Format rules

1. All knowledge base content is markdown. Markdown is reliably searchable; binary PDFs are not.
2. Source PDFs are pulled from RI's official site and converted to markdown character-for-character. No paraphrasing.
3. Filenames preserve the original numbering and document titles, so the manifest.json references stay coherent and a future re-sync is trivial.

## Verification checklist

When deploying or updating the knowledge base, confirm:

1. All seven core markdown files are present.
2. File sizes match this manifest within reasonable tolerance. Small differences from re-conversion are normal.
3. The three JSON metadata files are present and parse as valid JSON or JSONL.
4. The reference subfolder contains the two markdown conversions of the supplementary RI guidance.

## Provenance

All seven core governing documents are publicly published by Rotary International. The markdown conversions in this folder were produced from the official 2025 PDF releases. Conversion fidelity was verified character-for-character against the source.

The supplementary AI guidance files in the reference folder are also publicly published by RI.

## Updating each Rotary year

Each year on or after 1 July, RI publishes revised governing documents. To update Archie:

1. Download the new year's PDFs from Rotary International.
2. Convert each to markdown using a reliable converter (pandoc, marker, or Adobe Acrobat export plus formatting).
3. Verify the converted markdown character-for-character against the source PDF.
4. Replace the files in this folder, preserving the filename pattern (year and document name).
5. Update `manifest.json` to reflect the new year.
6. Update sizes and line counts in this MANIFEST.md.
7. Log the refresh in CHANGELOG.md with the new Rotary year entry.
8. Redeploy the updated skill package wherever it is installed.
