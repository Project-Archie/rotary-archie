# Customize Archie for your district

Customizing Archie means adding your district's standing rules, operating policies, and role-specific priorities to a Project, so Archie can cite both Rotary International rules and your local rules in the same answer.

## Status

This page describes a setup that is still in development. Ready-made code snippets, templates, and worked examples are not yet available.

## Who this is for

Experienced users, district IT volunteers, multi-district committees, and zone leaders who want the same Archie setup across several districts. It assumes you have already installed Archie and used it for a while.

## What customizing adds

| Capability | Customized Archie |
| --- | --- |
| Everything the installed skill does | Yes |
| District standing rules and bylaws in the knowledge base | Yes |
| District operating policies and budget documents | Yes |
| Role-specific instructions (governor, governor-elect, assistant governor) | Yes |
| Sub-zone or area-specific behavior (for example, RIBI and non-RIBI) | Yes |
| Multi-district coordination patterns | Yes |

## How it works

A customized Archie is an installed Archie with two additions:

1. **Your district's documents.** Your district's documents go into the Project, next to the Rotary International documents, in the same markdown format. Archie checks the Rotary International documents first and treats yours as district-level additions. Your files never change the Rotary documents bundled with the skill.
2. **A short instruction add-on.** A few lines added to the end of the Project instructions, after the standard Archie text. The add-on names the district, lists the district documents, and explains how local rules work alongside Rotary International rules. It never overrides the order of authority: Rotary International policy still governs unless a lawful local rule applies.

## What never changes

The seven critical rules in `instructions/claude-project.md` stay as they are. So do the hard escalation boundaries and the rule that every answer cites its source. Customizing adds local context. It does not relax the safety rails.

## Submit ideas

If your district has built a customization that works, share it: archie4rotary@gmail.com.
