# Image Setup Guide for Portfolio

## 📸 How to Add Your Images

### Step 1: Prepare Your Images

1. **Hero Image** (vibrant portrait with dramatic sky):
   - Save as: `src/assets/images/hero-profile.jpg`
   - Recommended size: 400x500px or larger
   - Format: JPG or PNG
   - This will be displayed in the Hero section

2. **About Image** (Golden Gate Bridge background):
   - Save as: `src/assets/images/about-profile.jpg`
   - Recommended size: 350x450px or larger
   - Format: JPG or PNG
   - This will be displayed in the About section

### Step 2: Add Images to Project

1. Navigate to the `src/assets/images/` folder in your project
2. Copy your prepared images to this folder
3. Make sure the filenames match exactly:
   - `hero-profile.jpg`
   - `about-profile.jpg`

### Step 3: Update Components (Optional)

If you want to use different filenames, update these files:

**For Hero Image:**
- Edit `src/components/Hero.tsx`
- Replace the placeholder div with:
```jsx
<img 
  src={require('../assets/images/your-filename.jpg')} 
  alt="Rohith Kumar Boddu - Software Engineer" 
  className="hero-profile-image"
/>
```

**For About Image:**
- Edit `src/components/About.tsx`
- Replace the placeholder div with:
```jsx
<img 
  src={require('../assets/images/your-filename.jpg')} 
  alt="Rohith Kumar Boddu - About" 
  className="about-profile-image"
/>
```

### Step 4: Image Optimization Tips

- **Resolution**: Use high-quality images (at least 2x the display size for retina displays)
- **File Size**: Keep images under 500KB for fast loading
- **Format**: JPG for photos, PNG for images with transparency
- **Aspect Ratio**: 
  - Hero: 4:5 ratio works best
  - About: 7:9 ratio works best

### Step 5: Verify

After adding your images:
1. Save all files
2. The React app will automatically refresh
3. Your images should now display properly in both sections

## 🎨 Current Placeholder Design

The current placeholders show:
- "Add Your Photo" text
- Recommended filename
- Recommended size
- Professional styling with rounded corners and shadows

Once you add the actual images, they will automatically replace the placeholders and display with the same professional styling.
