# ☕ ALX Coffee Shop App

A beautiful and functional React Native mobile application built with Expo, TypeScript, and NativeWind — replicating a Figma design for a coffee ordering experience.

## 📱 Demo
https://x.com/banid101/status/1947065900240183481?t=GHgQnY0LF3Lbe7hJ0VDgvQ&s=19 


## 🎥 Preview Video

---

## 🚀 Project Setup

### 1. Initialize the project

```bash
npx create-expo-app@latest alx-coffee-shop-app
cd alx-coffee-shop-app
2. Add NativeWind + TailwindCSS
bash
Copier
Modifier
npx expo install nativewind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Update tailwind.config.js:

js
Copier
Modifier
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
3. Configure Babel
js
Copier
Modifier
// babel.config.js
plugins: ['nativewind/babel'],
4. Add TailwindCSS base styles
Create global.css:

css
Copier
Modifier
@tailwind base;
@tailwind components;
@tailwind utilities;
Import global.css in your root file:

js
Copier
Modifier
import './global.css';
🛠️ Features Implemented
Welcome/Splash Screen

Product Listing with Categories (Tab scroll)

Product Detail Page

Order Summary

Map View + Tracking

Navigation (Stack + Tab)

Styled with NativeWind (TailwindCSS for React Native)

Responsive layout using utility classes

💡 Challenges Faced
NativeWind + Expo Router integration required careful ordering of plugins and structure.

Font rendering was slightly inconsistent on Android, fixed with font weights in Tailwind.

Scroll behavior in listing page needed a custom layout structure for smooth performance.

Assets were exported manually from Figma, and sizing had to be tuned per platform.

📸 Screenshots
Splash Screen	Home	Details	Checkout	Delivery Map
✅	✅	✅	✅	✅

🧠 What I Learned
Effective use of NativeWind for styling React Native components

Navigational patterns using expo-router

UI replication from Figma with precise spacing and typography

Managing image assets and font sizes for pixel-perfect design

🧵 Social Media Post (Template)
Built this awesome Coffee Shop App ☕ with React Native + Tailwind using @expo + @nativewind — design inspired by a Figma mockup.

🔥 Features: Listing, Cart, Checkout, Map Tracking
🧠 Learned: Tailwind in RN, clean component architecture


Thanks to the designer for this beautiful UI 💖
#ReactNative #TailwindCSS #expo #ALX #FigmaToCode

🔗 Links
GitHub Repo

Figma Design (if public)

ALX Portfolio Submission

📦 Tech Stack
React Native

Expo

NativeWind (TailwindCSS for RN)

Expo Router

✅ License
MIT

