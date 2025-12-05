# Birthday Wish Website 🎉

A beautiful, animated birthday wish website built with React and Framer Motion. Perfect as a gift!

## Features ✨

- **4 Beautiful Pages with Smooth Animations**
  - Welcome page with floating stars and confetti
  - Birthday wish page with animated balloons and hearts
  - Photo page with elegant frame and sparkles
  - Final message page with gradient background

- **Fully Mobile Responsive** 📱
  - Works perfectly on all screen sizes
  - Optimized for mobile, tablet, and desktop
  - Landscape mode support

- **Easy Customization** 🎨
  - Change the birthday person's name
  - Add custom wish message
  - Use any background image (URL)

## How to Use

### 1. Install Dependencies
```bash
npm install
```

### 2. Customize the Content
Open `src/App.jsx` and update:

```javascript
const [personName, setPersonName] = useState("Priya") // Change name here
const [wishMessage, setWishMessage] = useState("Your wish message here")
const [backgroundImage, setBackgroundImage] = useState("image-url-here")
```

### 3. Run the Application
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

## Customization Guide

**To change the name:** Edit line 10 in `src/App.jsx`

**To change the wish message:** Edit line 11 in `src/App.jsx`

**To change the background photo:** 
- Upload your photo to a service like Imgur or use Unsplash
- Copy the image URL
- Paste it on line 12 in `src/App.jsx`

## Navigation

- Auto-advances between pages
- Click on the dots at the bottom to jump to any page
- Mobile-friendly navigation

Enjoy gifting this special website! 🎁💕
