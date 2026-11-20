# Portfolio improvement proposal

The homepage should help a prospective client answer three questions within a minute. What can Kelvin build for me? What has he delivered? How do I start a conversation?

This proposal builds on the two reviews in [plan.md, §13](../plan.md#13-de-template-review-2026-11-20). The snowflake, portrait, Frost Paper and Obsidian Slate themes, and approved project screenshots already give the site a visual identity. Use them alongside more specific copy and a shorter path to the work.

## 1. Keep the public homepage working

The public homepage rendered blank because GitHub Pages published the repository root, which loads the Vite source entry `/src/main.tsx`. The local production build rendered correctly. The repair switched Pages to the existing GitHub Actions workflow, which publishes the compiled `dist/` artifact.

Add a browser check after deployment that opens the public URL and waits for the homepage heading to render. A successful response alone misses the blank page because GitHub Pages can return valid HTML whose JavaScript never runs.

## 2. Make the hero specific to Kelvin

Keep the name and full-stack role easy to find. Replace the terminal prompt, rotating headline, floating code chips, and marquee with one fixed headline, the portrait, and two actions.

The following headline and introduction are drafts for Kelvin to review.

> **I build and test business software.**
>
> I’m Kelvin, a full-stack developer based in Jakarta. I also teach software testing and Scrum at BINUS University.

Make **View selected work** the primary action and keep **Start a project** beside it. Keep the established 8+ years of experience if space allows. The first screen should show what Kelvin does and what sets his work apart.

## 3. Lead with three examples of the work

| Example                         | What to show on the card                                                                                                                                                                           |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bersama Jaya Bordir Studio      | Full-stack ownership of the public website, CMS, and ERP. Show the public screenshot and highlight the instant price calculator as a concrete deliverable.                                         |
| Multi-hospital asset management | Full-stack delivery with backend leadership. Show configurable permissions, maintenance and inspection workflows, and what the Jest tests covered. Use a text-led card for this confidential work. |
| DocFlow                         | Graduation document automation at BINUS. Show the approved screenshot and report that 48 of 48 scans filed correctly in 95 seconds in one run.                                                     |

Give each case a shareable anchor and put the role, deliverable, and evidence on the face of the card. Keep the remaining work in a compact list. Use an approved figure when it helps explain the scale. A specific workflow or test gives readers evidence when a number is unavailable.

## 4. Shorten the path from work to contact

Combine Services and Process into one section that describes the types of work Kelvin takes on and what clients can expect during delivery. Use a compact stack list near the relevant experience. Keep the contact checklist and make Contact easy to reach on mobile. Use the snowflake as the signature detail and remove repeated section numerals, card spotlights, and the command palette.

Correct the active navigation state at Contact. Use a modal that keeps keyboard focus inside while it is open, closes on Escape, and returns focus to the screenshot button. Use the same screenshot interaction for public client work and projects, with thumbnails that retain important content.

## Acceptance checks

- Open the live homepage and confirm the page renders from the bundled assets.
- At 320 and 390 px, check that the hero, both actions, and case-study evidence fit in light and dark mode.
- Follow a direct case-study link and use the navigation to reach Contact. Verify that Projects is no longer highlighted there.
- Open and close a screenshot with the keyboard. Verify that Tab stays within the dialog and focus returns to the opening button.
- Review the public wording and imagery with Kelvin before publishing the design changes. Keep confidential clients anonymous and follow the existing decisions on availability, the CV, publications, and the arcade archive.
