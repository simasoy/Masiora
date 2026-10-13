# Studio Masiora — website

A one-page static website for Studio Masiora, an interior design studio. It's plain HTML, CSS and JavaScript, with no build step and no dependencies.

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
2. **Projects.** The names in "Recent projects" (Linen House, Olive Kitchen, etc.) are placeholders. Replace them with real projects.
3. **Email and Instagram.** The site uses `hello@masiora.studio` (set this up as a mailbox, e.g. via Google Workspace from Squarespace) and `@studiomasiora`. Search `index.html` to change either.
4. **Contact form.** The form currently opens the visitor's email app (`mailto:`), which is unreliable. To receive enquiries properly, sign up for a free form service such as [Formspree](https://formspree.io) or use [Netlify Forms](https://docs.netlify.com/forms/setup/), then change the form's `action` to the URL they give you and remove `enctype="text/plain"`.
5. **Copy.** Read through the text and adjust it to your voice, services and location.

## Domain & hosting

The domain is **masiora.studio**, registered and currently hosted on Squarespace.

Squarespace can't serve a hand-coded site like this one, so there are two ways forward:

- **Keep Squarespace as the site builder.** Use this site as the design reference: same fonts (Cormorant Garamond + Jost), colours (`:root` in `styles.css`), section order and copy. Paste the CSS into *Website → Pages → Custom CSS* where useful.
- **Host this code elsewhere, keep the domain at Squarespace.** Deploy the repo to Netlify or Cloudflare Pages (free; no build command, publish directory `/`), add `masiora.studio` as a custom domain there, then in Squarespace go to *Domains → masiora.studio → DNS* and replace the Squarespace records with the ones the host gives you. Cancel the Squarespace website plan afterwards (keep the domain).
