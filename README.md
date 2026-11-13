# philosrach.com

The personal site of Raj Dangi: a single page set like a printed book, with chapters for experience, principles, selected works, writing, and reading, plus a résumé.

Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS 3. Every page is prerendered.

## Run locally

```bash
npm install
npm run dev -- -p 41731
```

Then open http://localhost:41731.

```bash
npm run build && npm start   # production build
npm run lint
```

## Where things live

| Path | What it is |
| --- | --- |
| `lib/content.ts` | All homepage copy: experience, principles, works, essays, reading, skills. Edit this first. |
| `src/app/page.tsx` | The homepage chapters. |
| `src/app/resume/page.tsx` | The résumé, which is also the source for `public/Resume.pdf`. |
| `components/` | Header and contents overlay, hero, chapter layout, works index, footer. |
| `assets/` | Project previews, book covers, and fonts for the share image. |

## Updating the résumé PDF

After editing `/resume`, regenerate the PDF from a running dev server:

```bash
scripts/build-resume-pdf.sh                 # uses http://127.0.0.1:41731
scripts/build-resume-pdf.sh http://localhost:3000
```

The script needs Google Chrome or Chromium on the path (or set `CHROME=/path/to/chrome`). It writes `public/Resume.pdf`, sized to one US Letter page.
