# TestPrep Student Presentation

The live presentation TestPrep (by House of Prep) gives to students in grades 10–12, built as a website. Presented by Nizar Al Awar.

## Open it

- Online: see the link in this repo's description (or the Deployments panel).
- Locally: `python3 -m http.server 4190` in this folder, then open http://localhost:4190. (Opening `index.html` straight from Finder works too, but a local server is more reliable for the film.)

## Present it

- **→ / ↓ / Space**, scroll or swipe = next · **← / ↑** = back · **N** presenter notes · **F** full screen · click the logo to return to the start.
- Many slides build in steps (intro, the film, the SAT laptop, the three doors, Spot the Glitch, the 7-step engine, Elmy, the Nizar reveal, House of Prep, the challenge): keep pressing → until the slide moves on.
- **The film** (slide "Meet Nizar."): Space or click plays it full screen, about 44 s, with sound. Space mid-film skips to the end card; ← resets it.
- Order: intro → agenda → the film → the SAT (what, why) → Spot the Glitch → how we work (engine, Elmy) → the Nizar reveal → who we are → legacy → numbers → House of Prep → the challenge → close (QR to the sign-up form).

## Notes

- Needs an internet connection: GSAP and the fonts load from CDNs.
- The sign-up form is https://forms.gle/52L71hbLQB5f32Jy6 (QR: `assets/qr-form.svg`).
- `assets/wall/` holds photos of real students. Keep this repository and its site private.
- Raw AI generations and earlier film cuts are kept out of git (see `.gitignore`).
