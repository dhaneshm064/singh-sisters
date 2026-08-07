# Singh Sisters — Udaan Abroad

Static site for Udaan Abroad by The Singh Sisters, hosted free on GitHub Pages.

## Two things to finish setup

### 1. Contact form (Formspree)

1. Go to [formspree.io](https://formspree.io) and sign up free with `anamikas2112@gmail.com`.
2. Create a new form, confirm the verification email.
3. Copy the form's endpoint ID (looks like `https://formspree.io/f/xxxxxxxx`).
4. In `contact.html`, find:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID" method="POST">
   ```
   Replace `REPLACE_WITH_FORMSPREE_ID` with your real form ID.
5. Commit and push — submissions will now email `anamikas2112@gmail.com`.

Free tier: 50 submissions/month.

### 2. Calendly booking

1. Create a free account at [calendly.com](https://calendly.com), add a "Free Consultation" event type.
2. Copy your event link (e.g. `https://calendly.com/anamikas2112/free-consultation`).
3. In `contact.html`, inside the `<div class="booking-panel">` block:
   - Delete the `<div class="calendly-placeholder">...</div>` block.
   - Uncomment the Calendly widget block below it and replace `CALENDLY_URL` with your real link.
4. Commit and push — visitors can then book a real time slot.

## Local preview

Open `index.html` directly in a browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying updates

Any push to the `main` branch automatically redeploys the live site via GitHub Pages.
