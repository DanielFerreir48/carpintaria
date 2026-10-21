# Carpintaria — Quote Generator PWA

A lightweight Progressive Web App (PWA) I built for my father's carpentry business to create, manage, and export client quotes directly from his phone. 

It runs completely client-side with vanilla HTML, CSS, and JavaScript (no frameworks or build steps), works offline after the first load, and can be installed to the home screen on Android/iOS to run in standalone fullscreen mode.

**Live demo:** [https://DanielFerreir48.github.io/carpintaria/](https://DanielFerreir48.github.io/carpintaria/)

## Features

- **Quote Builder:** Add custom furniture pieces or materials with dimensions (`L × H × D`), quantities, and unit prices[cite: 1, 2]. Includes quick-select chips for common woods and materials (MDF, Pine, Oak, Melamine, etc.)[cite: 2].
- **Voice Dictation (pt-PT):** Uses the Web Speech API to parse spoken descriptions directly into form fields (e.g., *"Roupeiro três portas, MDF branco, 180 por 220 por 60, 2 unidades, 150 euros"*)[cite: 2], including phonetic fixes for common acronyms[cite: 2].
- **Automatic Calculations:** Real-time subtotals per item and overall total with optional 23% VAT (IVA) toggle[cite: 1, 2].
- **Draft Auto-Save:** Automatically saves work-in-progress to `localStorage` on every input change so no data is lost if the app is accidentally closed.
- **Quote History & Editing:** Save quotes locally on the device and reload previous quotes to update prices or items without creating duplicates[cite: 1, 2].
- **PDF Export:** Generates a clean, print-ready A4 layout using native `@media print` CSS rules, avoiding popup blockers on mobile standalone mode.
- **Company Profile:** Custom business details (name, address, phone, email, NIF) and logo upload stored locally[cite: 1, 2].
- **Offline Support:** Uses a Network-First Service Worker (`sw.js`) so the app always fetches the latest updates when online, while falling back to the local cache when offline[cite: 1, 3].

## Project Structure

```text
carpintaria/
├── index.html      # Main application (UI, state, voice parser, and print styles)
├── manifest.json   # PWA configuration and metadata
├── sw.js           # Service worker (Network-First caching strategy)
├── icon-192.png    # App icon (192x192)
├── icon-512.png    # App icon (512x512)
└── README.md
Running Locally or DeployingSince there are no dependencies or build tools, you can open index.html directly in a browser, or serve the folder with any static server (like VS Code Live Server) to test the Service Worker and PWA installation.   To deploy on GitHub Pages:Push the files to the main branch.   Go to Settings → Pages and set the source to deploy from the main branch (/root)[cite: 1].Open the generated URL in Chrome on Android and tap "Instalar App" to add it to the home screen[cite: 1, 2].
