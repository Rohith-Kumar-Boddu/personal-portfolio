# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Framer Motion. This portfolio showcases professional experience, projects, skills, and provides a clean way for potential employers or clients to get in touch.

## 🚀 Features

- **Modern Design**: Clean, professional, and subtle design inspired by modern portfolio websites
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations using Framer Motion
- **TypeScript**: Built with TypeScript for better type safety and developer experience
- **Component-Based**: Modular React components for easy maintenance
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Optimized for fast loading and smooth interactions

## 📋 Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About**: Personal information and background
3. **Projects**: Showcase of recent projects with technologies used
4. **Experience**: Work experience and education timeline
5. **Skills**: Technical skills with progress indicators
6. **Contact**: Contact form and social media links
7. **Footer**: Additional links and copyright information

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Framer Motion** - Animations
- **React Router DOM** - Navigation
- **Lucide React** - Icons
- **React Scroll** - Smooth scrolling
- **CSS3** - Styling with custom properties

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

### Styling
The color scheme can be customized by updating CSS custom properties in:
- `src/App.css` - Global styles and color variables
- Individual component CSS files for specific styling

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
│   └── *.css           # Component styles
├── assets/             # Static assets
│   └── images/         # Images
├── styles/             # Global styles
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── App.tsx             # Main App component
├── App.css             # Global styles
├── index.tsx           # Entry point
└── index.css           # Base styles
```

## 🎨 Design System

### Colors
- Primary: `#d4c4b7` (Warm beige)
- Secondary: `#2d2d2d` (Dark gray)
- Background: `#faf9f7` (Light beige)
- Text: `#2d2d2d` (Dark gray)
- Accent: `#c4b4a7` (Darker beige)

### Typography
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

### Spacing
- Consistent spacing using rem units
- Responsive breakpoints for different screen sizes

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

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or contact me directly.

---

**Made with ❤️ using React & TypeScript**
