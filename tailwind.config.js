/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        "Tablet_Design_View": { "max": "769px", "min": "426px"},
        "Large_Mobile_Design_View": { "max": "426px", "min": "374px" },
        "Medium_Mobile_Design_View": { "max": "374px", "min": "321px"},
        "Small_Mobile_Design_View": { "max": "321px" }
      },
      fontFamily: {
        "Space_Mono": ["Space Mono", "monospace"],
        "Inconsolat": ["Inconsolata", "monospace"]
      }
    },
  },
  plugins: [],
}

