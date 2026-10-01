# 🚀 Dhruvin Sorathiya — Personal Portfolio

<div align="center">

  [![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.0.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15.0-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)

  <br />

  **A modern, responsive, high-performance personal developer portfolio built with React 19, TypeScript, Tailwind CSS, and Framer Motion.**

  [View Live Demo](https://github.com/SorathiyaDhruvin/portfolio) • [Report Bug](https://github.com/SorathiyaDhruvin/portfolio/issues) • [Request Feature](https://github.com/SorathiyaDhruvin/portfolio/issues)

</div>

---

## 📖 Overview

This repository hosts the source code for the personal portfolio of **Dhruvin Sorathiya**, an aspiring Software Engineer and Full Stack Developer. Engineered for speed, aesthetic appeal, and modularity, the portfolio presents a complete showcase of full-stack applications, Java core systems, competitive programming milestones, internships, certifications, and technical skills.

The application follows a **data-driven architecture**, where all personal information, achievements, projects, and links are decoupled from layout components and centralized within a single configuration file (`src/data.ts`).

---

## ✨ Features & Highlights

- **⚡ Blazing Fast Performance:** Powered by Vite 6 and React 19 for instantaneous hot module replacement (HMR) and optimized production bundles.
- **🎨 Glassmorphic & Modern UI:** Designed with an ice-cyan and deep-navy color scheme, subtle gradient glows, dot grid backgrounds, and custom glassmorphism utilities.
- **🌓 Dark & Light Mode Support:** Built-in theme switcher with smooth color transitions and persistent state stored in `localStorage`.
- **🎬 Fluid Animations:**
  - Dynamic typewriter effect for rotating developer roles in the Hero section.
  - Interactive count-up statistics counters for DSA problems, projects, and certifications.
  - Smooth reveal animations powered by `framer-motion`.
- **📁 Categorized Project Showcase:** Interactive tab filters (*All*, *Full Stack & Web*, *Java Systems*, *Android*) with quick links to live deployments and GitHub repositories.
- **🏆 Competitive Programming Dashboard:** Dedicated cards featuring live stats and problem-solving badges across LeetCode, CodeChef, and HackerRank.
- **📄 Interactive Resume & Contact:**
  - One-click resume PDF preview and download.
  - Quick-connect contact form that automatically formats and opens a draft in the user's Gmail client.
- **📱 Fully Responsive:** Clean mobile drawer navigation, responsive typography, and adaptive layouts across mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

| Category | Technologies / Tools |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5.7+](https://www.typescriptlang.org/) |
| **Build Tool & Bundler** | [Vite 6](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/), [PostCSS](https://postcss.org/), [Autoprefixer](https://github.com/postcss/autoprefixer) |
| **Animations** | [Framer Motion 11](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| **Deployment** | [Vercel](https://vercel.com/) / [GitHub Pages](https://pages.github.com/) |

---

## 📂 Project Structure

```text
portfolio/
├── public/                       # Static assets
│   ├── certificates/             # Credential & certification previews
│   ├── ProfilePhoto.jpeg         # Profile headshot
│   ├── Sorathiya_Dhruvin_Resume.pdf # Resume file
│   └── *.png, *.jpg              # Project screenshots & icons
├── src/
│   ├── components/               # Shared / Reusable components
│   │   ├── CountUp.tsx           # Animated statistics counter
│   │   ├── Footer.tsx            # Footer with quick links & social buttons
│   │   ├── Navbar.tsx            # Header navigation with mobile drawer & theme toggle
│   │   ├── Reveal.tsx            # Framer Motion scroll-reveal wrapper
│   │   └── SectionHeading.tsx    # Styled section heading with mono tag
│   ├── sections/                 # Main page sections
│   │   ├── About.tsx             # Bio, interests, and coding profile links
│   │   ├── Certifications.tsx    # Certificates grid with external links
│   │   ├── CodingProfiles.tsx    # LeetCode, CodeChef, HackerRank stats
│   │   ├── Contact.tsx           # Contact details and interactive Gmail launcher
│   │   ├── Education.tsx         # Academic background timeline
│   │   ├── Experience.tsx        # Internships & professional roles
│   │   ├── Hero.tsx              # Hero banner, typewriter text, and CTA buttons
│   │   ├── Projects.tsx          # Filterable project showcase
│   │   └── Skills.tsx            # Categorized skills grid with icon badges
│   ├── data.ts                   # ⚙️ Single source of truth for all content
│   ├── skillIcons.ts             # Icon mapping registry for technical skills
│   ├── theme.tsx                 # ThemeProvider (Dark / Light mode context)
│   ├── index.css                 # Global styling, design tokens, and CSS variables
│   ├── App.tsx                   # Main layout container
│   └── main.tsx                  # Application entry point
├── index.html                    # HTML shell with meta tags & favicon
├── package.json                  # Dependencies and scripts
├── tailwind.config.js            # Custom color palette & keyframe animations
├── tsconfig.json                 # TypeScript configuration
└── vite.config.ts                # Vite build configuration
```

---

## 🚀 Getting Started

Follow these instructions to run the portfolio locally on your machine.

### Prerequisites

Ensure you have the following installed:
- **Node.js**: `v18.0.0` or higher ([Download Node.js](https://nodejs.org/))
- **npm**, **pnpm**, or **yarn** package manager

### 1. Clone the Repository

```bash
git clone https://github.com/SorathiyaDhruvin/portfolio.git
cd portfolio
```

### 2. Install Dependencies

Using `npm`:
```bash
npm install
```

Or using `pnpm`:
```bash
pnpm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with hot module replacement (HMR).

### 4. Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production bundle locally:

```bash
npm run preview
```

---

## ⚙️ Customization Guide

You can easily adapt this portfolio for your own profile by editing just one file:

### 1. Update Personal Data (`src/data.ts`)
All site data is stored in `src/data.ts`. Modify the exported constants:
- **`profile`**: Name, email, phone, location, GitHub, LinkedIn, photo, and resume paths.
- **`roles`**: Array of roles animated in the Hero typewriter banner.
- **`stats`**: Numeric achievements shown in the Hero counter section.
- **`skillGroups`**: Categories and skill tags.
- **`projects`**: Title, category, description, tech stack, live demo URL, repository URL, and preview image.
- **`codingProfiles`**: Platform handles, ratings, badges, and stats for LeetCode, CodeChef, and HackerRank.
- **`experience` & `education`**: Professional milestones and academic history.
- **`certifications`**: Issued credentials and image/certificate links.

### 2. Replace Static Media (`public/`)
- Place your headshot at `public/ProfilePhoto.jpeg`.
- Place your resume PDF at `public/Sorathiya_Dhruvin_Resume.pdf`.
- Add project screenshots and certificate images directly to `public/` or `public/certificates/`.

### 3. Customize Colors & Themes (`tailwind.config.js` & `src/index.css`)
- Colors (`navy`, `ice`, `ink`) are mapped via CSS variables in `src/index.css` for instant theme customization.

---

## 💼 Featured Projects

| Project | Tech Stack | Highlights | Links |
| :--- | :--- | :--- | :--- |
| **Job Application & Recruitment System** | React 18, Spring Boot 3, Java 21, PostgreSQL, JWT | Enterprise recruitment SaaS with 6-stage candidate tracking pipeline and role-based security. | [Live Demo](https://job-application-recruitment-managem.vercel.app/) • [Repo](https://github.com/SorathiyaDhruvin/Job-Application-Recruitment-Management-System) |
| **360 Indoor Campus Navigation** | HTML, CSS, JavaScript, JSON | Virtual 3D campus tour with interactive indoor floor plans and 360° building transitions. | [Live Demo](https://indoor-campus-navigation.vercel.app/) • [Repo](https://github.com/SorathiyaDhruvin/Indoor-Campus-Navigation) |
| **AI Lead Automation Software** | React, TypeScript, Express, MySQL, OpenAI API | AI-powered lead management platform that automates lead scoring and outreach workflows. | [Live Demo](https://ai-lead-automation-software.vercel.app/) • [Repo](https://github.com/SorathiyaDhruvin/AI-Lead-Automation-Software) |
| **Bank Management System** | Java, OOP, Data Structures, CLI | Robust banking console app supporting account management, fund transfers, and ledger lookups. | [Repo](https://github.com/SorathiyaDhruvin/Bank-Management-System) |
| **Student Management System** | Java, OOP, CRUD, ArrayList, CLI | Academic record administration utility with ID/name search and complete CRUD operations. | [Repo](https://github.com/SorathiyaDhruvin/Student-Management-System) |
| **Library Management System** | Java, OOP, Data Structures, CLI | Book inventory tracking system managing issue/return records and real-time inventory counts. | [Repo](https://github.com/SorathiyaDhruvin/Library-Management-System) |
| **Flashcard Quiz App** | Kotlin, Android Studio, XML | Interactive Android quiz application featuring a clean splash screen and card navigation. | [Repo](https://github.com/SorathiyaDhruvin/Flashcard-Quiz) |

---

## 🏆 Coding Profiles & Problem Solving

- **LeetCode**: [@SorathiyaDhruvin](https://leetcode.com/u/SorathiyaDhruvin/) — 150+ Problems Solved (Top 20%)
- **CodeChef**: [@dhruvin_2005](https://www.codechef.com/users/dhruvin_2005) — 211 Problems Solved (Bronze Badge)
- **HackerRank**: [@DhruvinSorathiya](https://www.hackerrank.com/profile/DhruvinSorathiya) — 5★ C, 3★ C++, 3★ Java, 2★ Python

---

## 📬 Contact & Connect

- **Name:** Dhruvin Sorathiya
- **Email:** [sorathiyadhruvin2005@gmail.com](mailto:sorathiyadhruvin2005@gmail.com)
- **LinkedIn:** [linkedin.com/in/sorathiya-dhruvin](https://linkedin.com/in/sorathiya-dhruvin)
- **GitHub:** [@SorathiyaDhruvin](https://github.com/SorathiyaDhruvin)
- **Location:** Vadodara, Gujarat, India

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use this template for your own developer portfolio!
