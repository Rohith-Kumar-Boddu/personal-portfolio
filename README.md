# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Framer Motion. This portfolio showcases professional experience, projects, skills, and provides a clean way for potential employers or clients to get in touch.

## 🚀 Features

- **Dark Gradient Glow Theme**: Modern dark theme with subtle gradient backgrounds and aqua accents
- **Glass-morphism Effects**: Semi-transparent elements with backdrop blur for contemporary aesthetics
- **Glow Animations**: Subtle aqua glow effects on interactive elements
- **Dual Accent Colors**: Strong aqua primary accent with subtle emerald secondary accent
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations using Framer Motion
- **TypeScript**: Built with TypeScript for better type safety and developer experience
- **Component-Based**: Modular React components for easy maintenance
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Optimized for fast loading and smooth interactions

## 🎨 Theme: Dark Gradient Glow with Dual Accents

### Color Palette
- **Background**: Linear gradient from very dark gray (`#0d0d0d`) to deep navy (`#1a1a2e`)
- **Primary Accent**: Aqua (`#00ffff`) with hover state (`#00e6e6`) - Used for links, buttons, and main UI elements
- **Secondary Accent**: Emerald (`#10b981`) - Used sparingly for highlights, badges, and icons
- **Cards/Sections**: Semi-transparent dark backgrounds (`rgba(26, 26, 46, 0.8)`)
- **Text**: White (`#ffffff`) for headings, light gray (`#e0e0e0`) for body text
- **Secondary Text**: Muted gray (`#b0b0b0`) for descriptions and labels
- **Selection**: Semi-transparent aqua (`rgba(0, 255, 255, 0.3)`)

### Visual Features
- **Gradient Backgrounds**: Subtle two-tone gradients for depth without distraction
- **Glow Effects**: Aqua glow on hover states and interactive elements
- **Backdrop Blur**: Modern glass-morphism effects with `backdrop-filter: blur(10px)`
- **Semi-transparent Elements**: Layered depth with `rgba()` colors
- **Enhanced Shadows**: Multi-layered shadows with glow effects
- **Dual Accent Strategy**: Aqua for primary interactions, emerald for highlights and badges

## 📋 Sections

1. **Hero Section**: Introduction with call-to-action buttons and aqua glow effects
2. **About**: Personal information and background with glass-morphism cards
3. **Projects**: Showcase of recent projects with hover glow animations and emerald badges
4. **Experience**: Work experience and education timeline with aqua accents and emerald education badges
5. **Skills**: Technical skills with aqua progress bars and emerald category icons
6. **Contact**: Contact form and social media links with aqua glow effects
7. **Footer**: Additional links and copyright information

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Framer Motion** - Animations
- **React Router DOM** - Navigation
- **Lucide React** - Icons
- **React Scroll** - Smooth scrolling
- **CSS3** - Advanced styling with gradients, backdrop filters, and animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Customization

### Personal Information
Update the following files with your personal information:

- `src/components/Hero.tsx` - Update name and description
- `src/components/About.tsx` - Update about section content
- `src/components/Projects.tsx` - Add your projects
- `src/components/Experience.tsx` - Update work experience and education
- `src/components/Skills.tsx` - Update skills and proficiency levels
- `src/components/Contact.tsx` - Update contact information
- `src/components/Footer.tsx` - Update footer content

### Social Media Links
Update social media links in:
- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

### Theme Customization
The dark gradient glow theme can be customized by updating colors in:

#### Global Theme Colors
- `src/App.css` - Main gradient background and global styles
- `src/index.css` - Selection color and base styles

#### Component-Specific Colors
- `src/components/Header.css` - Navigation and header styling
- `src/components/Hero.css` - Hero section with glow effects
- `src/components/About.css` - About section styling
- `src/components/Skills.css` - Skills with aqua progress bars and emerald icons
- `src/components/Projects.css` - Project cards with hover effects and emerald badges
- `src/components/Experience.css` - Timeline with aqua accents and emerald education badges
- `src/components/Contact.css` - Contact form styling
- `src/components/Footer.css` - Footer with gradient background

#### Key Color Variables
```css
/* Main gradient background */
background: linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 100%);

/* Primary accent - Aqua */
#00ffff (primary)
#00e6e6 (hover state)

/* Secondary accent - Emerald */
#10b981 (highlights, badges, icons)

/* Semi-transparent backgrounds */
rgba(26, 26, 46, 0.8) (cards/sections)
rgba(13, 13, 13, 0.8) (form inputs)

/* Glow effects */
box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); /* Aqua glow */
box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); /* Emerald glow */
text-shadow: 0 0 10px rgba(0, 255, 255, 0.5); /* Aqua text glow */
```

### Images
Replace placeholder images with your own:
- Add your profile photo to `src/assets/images/`
- Update image paths in components
- Optimize images for web use

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

All glow effects and gradients are optimized for different screen sizes.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Experience.tsx  # Experience timeline
│   ├── Skills.tsx      # Skills section
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer
│   └── *.css           # Component styles with dark theme
├── assets/             # Static assets
│   └── images/         # Images
├── styles/             # Global styles
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── App.tsx             # Main App component
├── App.css             # Global styles with gradient theme
├── index.tsx           # Entry point
└── index.css           # Base styles with selection colors
```

## 🎨 Design System

### Dark Gradient Glow Theme with Dual Accents
- **Background**: `linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 100%)`
- **Primary Accent**: `#00ffff` (Aqua) - Used for buttons, links, and main UI elements
- **Secondary Accent**: `#10b981` (Emerald) - Used for highlights, badges, and icons
- **Card Backgrounds**: `rgba(26, 26, 46, 0.8)` with backdrop blur
- **Text**: `#ffffff` (headings), `#e0e0e0` (body), `#b0b0b0` (secondary)
- **Glow Effects**: `rgba(0, 255, 255, 0.3)` for aqua shadows, `rgba(16, 185, 129, 0.3)` for emerald shadows

### Typography
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

### Spacing
- Consistent spacing using rem units
- Responsive breakpoints for different screen sizes

### Glass-morphism Effects
- Backdrop blur: `backdrop-filter: blur(10px)`
- Semi-transparent backgrounds
- Subtle borders with aqua and emerald accents

### Color Usage Strategy
- **Aqua (`#00ffff`)**: Primary interactions, buttons, links, hover effects, progress bars
- **Emerald (`#10b981`)**: Highlights, badges, category icons, education badges, summary numbers
- **Grayscale**: All other elements use various shades of gray for text and backgrounds

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Alt text for images
- Proper heading hierarchy
- Fast loading times

## 📈 Performance

- Optimized images
- Lazy loading for components
- Efficient animations
- Minimal bundle size
- Fast initial load
- Optimized CSS with modern properties

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Icons from [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Dark gradient glow theme with dual accent strategy inspired by modern UI/UX trends

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or contact me directly.

---

**Made with ❤️ using React & TypeScript**

*Featuring a modern Dark Gradient Glow theme with aqua primary accents and emerald secondary highlights*
