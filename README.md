# My Website

This is a personal website built using **React** and deployed on **GitHub Pages**. The website showcases:
- **Business Information**
- **Tech Projects** (Completed & In Progress)
- **Vacations & Travel Experiences**

## Tech Stack
- **React** (Frontend Framework)
- **React Router** (Client-Side Navigation)
- **GitHub Pages** (Deployment)
- **web-vitals** (Performance Monitoring)
- **@testing-library/react** (Testing)
- **gh-pages** (Deployment Helper)


## Setup & Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/my-website.git
   cd my-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```
   The website will be available at `http://localhost:3000`.

## Project Structure
```
my-website/
│── public/                 # Static assets
│── src/                    # Main application code
│   ├── components/         # Reusable components (Navbar, Footer, etc.)
│   ├── pages/              # Individual pages (Home, About, Projects, etc.)
│   ├── assets/             # Images, styles, etc.
│   ├── App.js              # Main app entry point
│   ├── index.js            # React root file
│── package.json            # Dependencies & scripts
│── README.md               # Project details
```

## Deployment to GitHub Pages
1. Install GitHub Pages package:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add the following to `package.json`:
   ```json
   "homepage": "https://YOUR_GITHUB_USERNAME.github.io/my-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build --repo https://github.com/YOUR_GITHUB_USERNAME/my-website.git""
   }
   ```

3. Deploy the app:
   ```bash
   npm run deploy
   ```

4. Visit `https://YOUR_GITHUB_USERNAME.github.io/my-website` to see the live site.

## Features
- Dynamic Routing with React Router
- Responsive Design for Mobile & Desktop
- Organized Project & Vacation Pages

## Future Enhancements
- **Custom Domain Integration**
- **Dark Mode Support**
- **Contact Form for Inquiries**

## License
This project is open-source and available under the [MIT License](LICENSE).

---

**Contributions & feedback are welcome!** 🚀

