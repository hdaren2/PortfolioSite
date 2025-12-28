# Portfolio Website

A modern, responsive portfolio website built with React to showcase your work and skills to potential employers.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive layout for all devices
- 🚀 Fast and optimized performance
- 🎯 Sections: Hero, About, Skills, Projects, Contact
- 💼 Professional presentation of your work

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.js`):
   - Change "Your Name" to your actual name
   - Update the title and description

2. **About Section** (`src/components/About.js`):
   - Update the description with your story
   - Modify the stats (projects, experience, etc.)

3. **Skills Section** (`src/components/Skills.js`):
   - Update the skills arrays with your technologies

4. **Projects Section** (`src/components/Projects.js`):
   - Replace the example projects with your actual projects
   - Update GitHub and demo links

5. **Contact Section** (`src/components/Contact.js`):
   - Update email address
   - Add your LinkedIn and GitHub URLs

6. **Footer** (`src/components/Footer.js`):
   - Update "Your Name" with your actual name

7. **HTML Title** (`public/index.html`):
   - Update the title tag with your name

### Styling

The color scheme uses a purple gradient theme. To customize colors, update the CSS variables in the component CSS files. The main colors are:
- Primary: `#667eea`
- Secondary: `#764ba2`

## Deployment

You can deploy this portfolio to various platforms:

- **Netlify**: Connect your GitHub repo or drag and drop the `build` folder
- **Vercel**: Import your GitHub repo
- **GitHub Pages**: Use `gh-pages` package

## License

This project is open source and available for personal use.

