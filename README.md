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
3. **Email and Instagram.** Search `index.html` for `hello@studiomasiora.com` and `@studiomasiora` and update both.
4. **Contact form.** The form currently opens the visitor's email app (`mailto:`), which is unreliable. To receive enquiries properly, sign up for a free form service such as [Formspree](https://formspree.io) or use [Netlify Forms](https://docs.netlify.com/forms/setup/), then change the form's `action` to the URL they give you and remove `enctype="text/plain"`.
5. **Copy.** Read through the text and adjust it to your voice, services and location.

## Domain

`studiomasiora.com` is the recommended primary domain. Clients trust `.com`, will type it by default, and `hello@studiomasiora.com` is easy to say and spell out. If budget allows, also register `masiora.studio` and redirect it to the `.com` so nobody else can take it.

## Hosting (free options)

- **Netlify** or **Cloudflare Pages:** connect this GitHub repo, leave the build command empty and set the publish directory to `/`. Add your domain under *Domain settings* and follow the DNS instructions. HTTPS is automatic.
- **GitHub Pages:** in repo *Settings → Pages*, deploy from the `main` branch root. Under *Custom domain*, enter `studiomasiora.com`, then add the DNS records GitHub lists at your registrar.
