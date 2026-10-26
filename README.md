# Masiora — Interiors & Experiences

A one-page static website for Masiora, live at **masiora.studio** (preview: masiora.pages.dev). It's plain HTML, CSS and JavaScript, with no build step and no dependencies.

The look comes from the *Sima Soy* concept board: rustic, dramatic, earthy, tranquil, fresh and organic. Full-bleed photography (Rocky Mountains, misty peaks, sea) with quiet typography and transparent hairline buttons.

**Logo:** the brand files are in `assets/logo-*.svg`. The site draws the logo from an inline SVG sprite at the top of `index.html`, so it can be cream over photos and plum on light backgrounds.
**Fonts:** *Cormorant Garamond* (headings), *DM Sans* (body).
**Colours** (top of `styles.css`): plum `#542b46` (logo), peach `#f9ada0` (logo sun/moon), mauve `#c6a8b8`, navy `#344151` (text), cream `#faf4ec` (background), sea `#3e6b6a`. Photos get a soft plum-to-peach *dusk* grade (`.dusk`) so they share the evening mood.

## Photos

| Spot | Currently | File to add |
|---|---|---|
| Hero | Misty peaks at sunrise, by Julien Riedel ([Unsplash](https://unsplash.com/photos/misty-mountain-peaks-at-sunrise-with-warm-light-sizw4cX8Sds)) | `assets/hero.jpg` |
| Quote band | Moraine Lake, Canadian Rockies, by Kalen Emsley ([Unsplash](https://unsplash.com/photos/snow-covered-mountain-near-lake-during-daytime-LdCpEcMQgQI)) | `assets/band.jpg` |
| Contact | Ocean waves with white foam, by Sueda Dilli ([Unsplash](https://unsplash.com/photos/turbulent-ocean-waves-crashing-with-white-foam-njXk57H1-2E)) | `assets/sea.jpg` |
| Studio | linen-tone placeholder | `assets/studio.jpg` |
| Projects | linen-tone placeholder | `assets/project-1.jpg` … `project-4.jpg` |

The three landscape photos currently load from Unsplash's servers (free under the Unsplash License). For speed and reliability, download them (about 2400px wide, JPG, under 500 KB), save them in `assets/` and change each `src` to the local file. The studio and project slots pick up `assets/studio.jpg` and `assets/project-N.jpg` automatically once those files exist.

```
index.html        page content
styles.css        design (colours, fonts, layout)
script.js         mobile menu, scroll fade-ins
assets/           favicon and (later) your photos
```

**Preview locally:** open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

## Before launch: to-do

1. **Photos.** Add your interior photos (see *Photos* above) and self-host the landscape photos.
2. **Projects.** The names in "Recent projects" (Driftwood House, Sea Glass Kitchen, etc.) are placeholders. Replace them with real projects.
3. **Email and Instagram.** The site uses `hello@masiora.studio` (set this up as a mailbox, e.g. via Google Workspace from Squarespace) and `@studiomasiora`. Search `index.html` to change either.
4. **Contact form.** The form currently opens the visitor's email app (`mailto:`), which is unreliable. To receive enquiries properly, sign up for a free form service such as [Formspree](https://formspree.io) (Cloudflare Pages has no built-in forms), then change the form's `action` to the URL they give you and remove `enctype="text/plain"`.
5. **Copy.** Read through the text and adjust it to your voice, services and location.

## Hosting on Cloudflare Pages, with the domain from Squarespace

**1. Put the site on Cloudflare Pages** (free). Create a Cloudflare account, then go to *Workers & Pages → Create → Pages*. Pick one:
- **Connect to Git** (recommended): choose this GitHub repo and branch. Framework preset: *None*, build command: empty, output directory: `/`. Every push then updates the site automatically.
- **Upload assets**: drag in a folder containing `index.html`, `styles.css`, `script.js` and `assets/`. Re-upload whenever something changes.

You'll get a preview address like `masiora.pages.dev`.

**2. Move the domain's DNS to Cloudflare.** In Cloudflare, *Add a domain* → `masiora.studio` → Free plan. Cloudflare imports your existing DNS records and shows you two nameservers.
Check the import before switching: if you have email on the domain (e.g. Google Workspace), the `MX` and `TXT` records must be there, or email will stop working.

**3. Point Squarespace at Cloudflare.** In Squarespace: *Domains → masiora.studio → DNS → Domain nameservers → Use custom nameservers*. Enter the two Cloudflare nameservers and save. This can take a few hours to take effect.

**4. Attach the domain.** In your Pages project: *Custom domains → Set up a domain* → add `masiora.studio`, then add `www.masiora.studio` too. HTTPS is automatic.

**5. Tidy up.** Once the site loads from masiora.studio, you can cancel the Squarespace *website* plan. Keep the *domain* registration active, and renew it each year.
