# Studio Masiora — website

A one-page static website for Studio Masiora, an interior design studio, live at **masiora.studio**. It's plain HTML, CSS and JavaScript, with no build step and no dependencies.

The look comes from the *Sima Soy* concept board: rustic, dramatic, earthy, tranquil, fresh and organic. The hero is an illustrated landscape of rocky mountains above a mint sea with slowly drifting waves (inline SVG, no images needed).

| Colour | Hex | Used for |
|---|---|---|
| Shell | `#f0eee9` | page background |
| Beige | `#d7c8b7` | lines, panels |
| Taupe | `#a99b8c` | borders |
| Mint sea | `#bfe0da` / `#8fc3bb` | waves, accents |
| Mist blue | `#b2b9bd` | soft accents |
| Dusty rose | `#a87374` | labels, mountains |
| Burgundy | `#7a3e48` | logo, buttons, highlights |
| Charcoal | `#332e2f` | text, footer |

Fonts: *Pinyon Script* (logo), *Cormorant Garamond* (headings), *DM Sans* (body). All colours live at the top of `styles.css`.

```
index.html        page content
styles.css        design (colours, fonts, layout)
script.js         mobile menu, scroll fade-ins
assets/           favicon and (later) your photos
```

**Preview locally:** open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

## Before launch: to-do

1. **Photos.** Every image slot is a soft-coloured placeholder (`class="ph"`). Put your photos in `assets/` and add an `<img>` inside each slot. The placeholder label hides automatically:
   ```html
   <div class="ph ph-b"><img src="assets/linen-house.jpg" alt="Living room with linen sofa"></div>
   ```
   Export them at about 2000px on the long edge, as JPG/WebP under ~400 KB each.
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
