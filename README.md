# CyberSuraksha

CyberSuraksha is a dependency-free static awareness site for cyber safety education in India. It includes a Cyber IQ quiz, emergency response guidance, learning cards, real-world scam stories, safety tips, and official reporting links.

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static file server.

Example with Python:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Files

- `index.html` - page structure, content, metadata, and official resource links.
- `style.css` - visual design, responsive layout, accessibility states, and reduced-motion support.
- `script.js` - local data and UI behavior for ticker, quiz, response center, filters, stories, tips, mobile nav, and matrix canvas.
- `news-police.css` - optional styles for future news or police-locator sections.

## Notes

- No external API calls are required for the current version.
- The emergency reporting link points to `https://cybercrime.gov.in` and the hotline CTA uses `tel:1930`.
- Keep public safety statistics sourced before publishing new numeric claims.
