# Copilot Instructions for `prasadkankhar10.github.io`

This document provides guidance for AI coding agents working on this repository. It outlines the project's structure, conventions, and workflows to help agents be productive immediately.

## Project Overview

This repository hosts a personal portfolio website. The project is structured as a static site with HTML, CSS (SCSS), and JavaScript. It includes multiple sections showcasing projects, skills, and contact information.

### Key Components

1. **Root Files**:
   - `index.html`: The main entry point of the website.
   - `styles.css` and `styles.scss`: Stylesheets for the website. SCSS is used for modular and maintainable styling.
   - `scripts.js`: Contains JavaScript for interactivity.

2. **Project-Specific Files**:
   - `Project/On_the_Way/`: Contains files for the "On The Way" project, including:
     - `OntheWay.html`: A detailed page for the project.
     - `OnTheWayStyle.scss` and `OnTheWayStyle.css`: Styles for the project page.
     - `OnTheWayImg/`: Images used in the project page.

3. **Assets**:
   - `assets/`: Contains shared assets like images (e.g., `prasad.jpg`).

### External Dependencies

- **Fonts**: Google Fonts are used (e.g., `BIZ UDGothic`, `Oxanium`).
- **Icons**: Font Awesome and Ionicons are used for social and navigation icons.

## Developer Workflows

### SCSS Compilation
- SCSS files (`styles.scss`, `OnTheWayStyle.scss`) need to be compiled into CSS for the website to render correctly.
- Use a tool like `sass` to compile SCSS:
  ```bash
  sass styles.scss styles.css
  sass Project/On_the_Way/OnTheWayStyle.scss Project/On_the_Way/OnTheWayStyle.css
  ```

### Testing Changes
- Open `index.html` in a browser to test changes locally.
- Ensure all links and assets are correctly referenced, especially case-sensitive paths (e.g., `Project/On_the_Way/` vs. `project/on_the_way/`).

### Deployment
- This repository is likely hosted on GitHub Pages. Ensure changes are committed and pushed to the `main` branch for deployment.

## Project-Specific Conventions

1. **File Naming**:
   - Use PascalCase for project-specific files (e.g., `OnTheWayStyle.scss`).
   - Use lowercase for shared assets (e.g., `styles.scss`).

2. **HTML Structure**:
   - Follow semantic HTML practices (e.g., `<header>`, `<main>`, `<footer>`).
   - Use descriptive `alt` attributes for images.

3. **JavaScript**:
   - Keep interactivity minimal and focused on enhancing user experience.
   - Use `onclick` handlers sparingly and ensure paths are accurate.

## Examples of Patterns

### Linking Project Pages
In `index.html`, project pages are linked using `onclick` handlers:
```html
<button onclick="window.open('Project/On_the_Way/OntheWay.html', '_blank')">
  Read More
</button>
```
Ensure the file paths match the actual directory structure.

### Image References
Images are stored in project-specific folders (e.g., `OnTheWayImg/`) or the shared `assets/` folder. Use relative paths to reference them:
```html
<img src="Project/On_the_Way/OnTheWayImg/pj1_1.png" alt="Screenshot 1">
```

## Notes for AI Agents
- Always verify file paths and casing, especially for deployment on case-sensitive systems.
- Maintain the existing structure and conventions when adding new features or projects.
- Document any new workflows or dependencies in this file.

---

For questions or further clarification, refer to the project owner or existing code examples.
