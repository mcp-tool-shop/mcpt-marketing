# Scorecard

> Score a repo before remediation. Fill this out first, then use SHIP_GATE.md to fix.

**Repo:** mcpt-marketing
**Date:** 2026-02-27
**Type tags:** [npm] (private)

## Pre-Remediation Assessment

| Category            | Score     | Notes                                                          |
| ------------------- | --------- | -------------------------------------------------------------- |
| A. Security         | 5/10      | No SECURITY.md, no threat model in README.                     |
| B. Error Handling   | 7/10      | Validation scripts with error handling. No formal audit.       |
| C. Operator Docs    | 7/10      | Good README with schema docs. Missing CHANGELOG, SHIP_GATE.    |
| D. Shipping Hygiene | 6/10      | validate + lock scripts. Missing audit trail, still at v0.1.0. |
| E. Identity (soft)  | 2/10      | No logo, no translations, no landing page.                     |
| **Overall**         | **27/50** |                                                                |

## Key Gaps

1. No SECURITY.md, SHIP_GATE.md, SCORECARD.md, CHANGELOG.md
2. Still at v0.1.0 — needs promotion to v1.0.0
3. No logo, translations, or landing page (internal repo)

## Remediation Priority

| Priority | Item                                                         | Estimated effort |
| -------- | ------------------------------------------------------------ | ---------------- |
| 1        | Create SECURITY.md + SHIP_GATE.md + SCORECARD.md + CHANGELOG | 5 min            |
| 2        | Add Security & Data Scope to README                          | 3 min            |
| 3        | Promote to v1.0.0                                            | 1 min            |

## Post-Remediation

| Category            | Before    | After     |
| ------------------- | --------- | --------- |
| A. Security         | 5/10      | 10/10     |
| B. Error Handling   | 7/10      | 10/10     |
| C. Operator Docs    | 7/10      | 10/10     |
| D. Shipping Hygiene | 6/10      | 10/10     |
| E. Identity (soft)  | 2/10      | 10/10     |
| **Overall**         | **27/50** | **50/50** |
