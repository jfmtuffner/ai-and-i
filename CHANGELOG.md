# AI and I: Changelog

```
## YYYY-MM-DD
- **SUBJECT:** What changed and why.
```

## 2026-10-22

**NAME:**
- Project name changed to "AI and I".

**PROTOTYPE:** 
- Created a mock up of the website including; style guide, article template, shared stylesheet, article index, and changelog.

---

## 2026-10-31

**WEBPAGE:** 
- Replaced prototype with a stripped down live web page including; index.html, settings.html, style.css, and theme.js.

**PENDING:** 
- Articles shown are for layout purposes only, no content linked.
- Review, edit, and personalize all AI generated text. Update and add disclaimers where neccesary.

---

## 2026-11-04

**FORMATTING:** 
- Minor formatting changes including the addition of a Merryweather font.

**DONATION PAGE:** 
- Created and attached a donation page that links to my Ko-fi account.

**PENDING:** 
- Articles shown are for layout purposes only, no content linked.
- Review, edit, and personalize all AI generated text. Update and add disclaimers where neccesary.
- Add a page for associated projects and link the [Razer Wolverine M Button Remapper](https://github.com/jfmtuffner/razer-wolverine-mb-remapper)

---

## 2026-11-22
- STYLE.md: new authorship note wording for all pages; authorship note and Summary added to the page structure; sections are now switchable per the Essayist Blueprint.
- Template rebuilt with empty, switchable section slots and the new authorship note; style.css gains page-type switches and styles for Short Abstract, Summary, and Quick Facts.
- Articles, Essays, Recipes (Mum's Cookbook), and Mission each get their own page; the homepage links to each. Articles, Essays, and Recipes share a tag filter (filter.js, runs in the browser only, no network requests). Placeholder article links removed. Menu updated on every page and in the template.
- Homepage: the Articles, Essays, Mum's Cookbook, and Mission headings are now the links themselves, replacing the separate buttons.

---

## 2026-11-23

**FIRST ARTICLE:**
- Published "A Stop Killing Games Framework: Five Public Questions" (articles/stop-killing-games-framework.html), the first article on the site.

**DOCUMENTS:**
- New page type, Document, for pages posted as is (byline, authorship note, and sources only). Documents live in webpage/documents/ and are listed on the Articles page.
- Published "An Open Letter to Canada's Members of Parliament on Digital Game Ownership" and "Digital Game Ownership Act: Proposal and Draft Bill".
- style.css: page-document switches, plus table styles for document pages. Template comments mention the new type.


---

## 2026-11-24

**NEW ARTICLE:**
- Published "Sudoku for Beginners: The Rules and Five Ways to Start" (articles/sudoku-for-beginners.html), written at about a grade 8 reading level, with seven inline diagrams.

**DOWNLOADS:**
- New folder, webpage/downloads/, for files readers can download. Added two printable Letter-size sudoku grids: sudoku-blank.pdf and sudoku-blank-candidates.pdf.

**SITE-WIDE:**
- New authorship note on the template and every published page (the Stop Killing Games article, the open letter, and the draft bill), shown in quotation marks: "Written by an average Joe and an above-average AI, or the other way around. Who knows? Either way, trust, but verify." It replaces "This [article/document] was written by a guy with help from AI. Weigh the reasoning and check the risks."
- STYLE.md: authorship note rule updated to the new wording, the same on every page type. Also fixed a stray double bullet on that line.
- The authorship-note comment in the template and on every page now says the wording is the same on every page type (it used to say to swap "article" for "essay" or "document").

**STYLES:**
- style.css: styles for sudoku diagrams (inline SVG that follows the site theme) and for download lists.
