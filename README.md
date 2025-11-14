# Simple Hugo portfolio

This repository contains a minimal Hugo-based portfolio website scaffold.

What I added:

- Updated `hugo.toml` site metadata and menu entries.
- `content/` pages: home (`_index.md`), `about.md`, `projects/_index.md` and a sample `projects/project1.md`.
- `layouts/` templates: `baseof.html`, `index.html`, `single.html`, and partials (`header.html`, `footer.html`).
- `static/css/styles.css` for site styling and `static/images/placeholder.svg`.

To run locally (PowerShell):

```powershell
cd c:\Hugo\main\main
hugo server -D
```

Open http://localhost:1313 in your browser. Edit content files in `content/` and style in `static/css/styles.css`.

Next steps (suggested): customize `hugo.toml` params, add more projects, replace the placeholder image, and tweak styles.
