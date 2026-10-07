/**
 * ============================================================
 *  EDIT YOUR PERSONAL DETAILS HERE
 *  Fields marked  // TODO: REPLACE  are placeholders.
 * ============================================================
 */

export const profile = {
  name: "Dhruvin Sorathiya",
  logo: "Dhruvin",
  email: "sorathiyadhruvin2005@gmail.com",
  phone: "+91 9499816850",
  location: "Vadodara, Gujarat, India",
  github: "https://github.com/SorathiyaDhruvin",
  linkedin: "https://linkedin.com/in/sorathiya-dhruvin",
  resume: "/Sorathiya_Dhruvin_Resume.pdf",
  photo: "/ProfilePhoto.jpeg"
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]

export const roles = ["Software Engineer", "Full Stack Developer"]

export const stats = [
  { value: 300, suffix: "+", label: "DSA Problems Solved" },
  { value: 7, suffix: "+", label: "Projects Built" },
  { value: 5, suffix: "+", label: "Certifications" },
  { value: 2, suffix: "", label: "Internships Completed" },
]

export const interests = ["AI/ML", "Full Stack", "AR/VR", "Android", "DSA", "Open Source"]

export const whatIDo = [
  "Full-stack web apps with React.js, Node.js, Spring Boot, MongoDB, PostgreSQL",
  "AI-powered tools using OpenAI API",
  "AR/VR experiences with Unity and 360° tech",
  "Android apps with Kotlin and Java Core Systems",
]

export const skillGroups = [
  { category: "Programming Languages", items: ["Java", "C++", "C", "MySQL"] },
  { category: "Web Development", items: ["HTML5", "CSS3", "JavaScript", "React.js"] },
  { category: "Backend & Database", items: ["Node.js", "Express.js", "MongoDB", "Firebase", "JSON"] },
  { category: "Tools & Platforms", items: ["AWS", "Git", "GitHub", "Render", "Vercel", "Linux", "VS Code"] },
]

export const projects = [
  {
    title: "Job Application & Recruitment System",
    category: "Full Stack App",
    description:
      "An enterprise-grade recruitment SaaS platform engineered with Java 21, Spring Boot 3, React 18, and PostgreSQL. Features role-based access control (JWT), a 6-stage applicant tracking pipeline, and secure PDF resume management.",
    tech: ["React 18", "Spring Boot 3", "Java 21", "PostgreSQL", "Spring Security", "JWT"],
    tags: ["Full Stack", "Spring Boot", "React", "SaaS"],
    live: "https://job-application-recruitment-managem.vercel.app/",
    repo: "https://github.com/SorathiyaDhruvin/Job-Application-Recruitment-Management-System",
    image: "/job_recruitment_system.jpg",
  },
  {
    title: "360 Indoor Campus Navigation",
    category: "Website",
    description:
      "An interactive 360° campus navigation platform featuring a virtual 3D campus tour, interactive indoor maps, seamless 360° transitions between buildings, and a modern, responsive interface built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript", "JSON"],
    tags: ["Web", "Full Stack"],
    live: "https://indoor-campus-navigation.vercel.app/",
    repo: "https://github.com/SorathiyaDhruvin/Indoor-Campus-Navigation",
    image: "/Indoor Campus Navigation.png",
  },
  {
    title: "AI Lead Automation Software",
    category: "Web App",
    description:
      "An AI-powered lead automation platform that helps businesses manage, score, and convert leads using intelligent insights and automated workflows.",
    tech: ["React", "TypeScript", "Express", "MySQL", "OpenAI API", "Tailwind CSS"],
    tags: ["Web App", "Full Stack", "AI", "SaaS"],
    live: "https://ai-lead-automation-software.vercel.app/",
    repo: "https://github.com/SorathiyaDhruvin/AI-Lead-Automation-Software",
    image: "/AI Lead Automation Software.png",
  },
  {
    title: "Bank Management System",
    category: "Java System",
    description:
      "A robust banking application built in Java using Object-Oriented Programming (OOP) concepts. Supports account creation, deposit/withdrawal transactions, balance inquiry, inter-account transfers, and account search.",
    tech: ["Java", "OOP", "Data Structures", "ArrayList", "CLI"],
    tags: ["Java", "OOP", "Console"],
    live: "https://github.com/SorathiyaDhruvin/Bank-Management-System",
    repo: "https://github.com/SorathiyaDhruvin/Bank-Management-System",
    image: "/bank_management_system.jpg",
  },
  {
    title: "Student Management System",
    category: "Java System",
    description:
      "An object-oriented Java application for student records administration. Provides complete CRUD operations, student searching by ID/name, academic tracking, and details updating.",
    tech: ["Java", "OOP", "CRUD Operations", "ArrayList", "CLI"],
    tags: ["Java", "OOP", "Console"],
    live: "https://github.com/SorathiyaDhruvin/Student-Management-System",
    repo: "https://github.com/SorathiyaDhruvin/Student-Management-System",
    image: "/student_management_system.jpg",
  },
  {
    title: "Library Management System",
    category: "Java System",
    description:
      "A comprehensive library software system in Java for managing book inventories, member registrations, issue/return operations, and real-time inventory tracking.",
    tech: ["Java", "OOP", "Data Structures", "ArrayList", "CLI"],
    tags: ["Java", "OOP", "Console"],
    live: "https://github.com/SorathiyaDhruvin/Library-Management-System",
    repo: "https://github.com/SorathiyaDhruvin/Library-Management-System",
    image: "/library_management_system.jpg",
  },
  {
    title: "Quiz Android App",
    category: "Android",
    description:
      "An interactive quiz application with a clean splash experience, offering question-answer cards, show-answer functionality, and smooth navigation in a simple, user-friendly UI.",
    tech: ["Kotlin", "Android Studio", "UI/UX", "Mobile"],
    tags: ["Android", "Kotlin", "UI/UX"],
    live: "https://github.com/SorathiyaDhruvin/Flashcard-Quiz",
    repo: "https://github.com/SorathiyaDhruvin/Flashcard-Quiz",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80",
  },
]

export const experience = [
  {
    role: "AR / VR Internship",
    company: "Parul University",
    period: "Nov 2025 – Oct 2026",
    type: "Internship",
    description: "Building immersive AR/VR experiences and campus navigation concepts.",
  },
  {
    role: "CodeAlpha Internship",
    company: "Remote",
    period: "Sep 2025 – Oct 2025",
    type: "Remote Internship",
    description: "Worked on small projects using App technologies.",
  },
]

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    school: "Parul University, Vadodara, Gujarat",
    period: "2023 – Present",
    detail: "Learning software development, databases, and AI.",
  },
  {
    degree: "Higher Secondary Education (12th)",
    school: "Jamnagar, Gujarat",
    period: "2022 – 2023",
    detail: "Focus on Physics, Mathematics, and Computer Science.",
  },
]

export const certifications = [
  { name: "App Development Internship", issuer: "CodeAlpha", link: "/certificates/internship.png" },
  { name: "AWS Cloud Technical Essentials", issuer: "Coursera (Amazon Web Services)", link: "/certificates/AWS.jpg" },
  { name: "Java Course - Mastering the Fundamentals", issuer: "Scaler Topics", link: "/certificates/java.png" },
  { name: "SQL v/s NoSQL Course", issuer: "Scaler Topics", link: "/certificates/SQL.png" },
  { name: "Computer Networks And Internet Protocol", issuer: "NPTEL (IIT Kharagpur)", link: "/certificates/NPTEL.png" },
  { name: "Gemini Certified Student", issuer: "Google for Education", link: "/certificates/gemini.jpg" },
]

export const codingProfiles = [
  {
    platform: "LeetCode",
    username: "SorathiyaDhruvin",
    accent: "#ffa116",
    url: "https://leetcode.com/u/SorathiyaDhruvin/",
    stats: [
      { label: "Solved", value: "150+" },
      { label: "Easy", value: "70" },
      { label: "Medium", value: "65" },
      { label: "Hard", value: "15" },
    ],
    note: "Ranking: Top 20%",
  },
  {
    platform: "CodeChef",
    username: "dhruvin_2005",
    accent: "#5b4638",
    url: "https://www.codechef.com/users/dhruvin_2005",
    stats: [
      { label: "Rating", value: "Unrated" },
      { label: "Stars", value: "1★" },
      { label: "Solved", value: "211" },
      { label: "Contests", value: "0" },
    ],
    note: "Problem Solver - Bronze Badge",
  },
  {
    platform: "HackerRank",
    username: "DhruvinSorathiya",
    accent: "#2ec866",
    url: "https://www.hackerrank.com/profile/DhruvinSorathiya",
    stats: [
      { label: "C Language", value: "5★" },
      { label: "C++", value: "3★" },
      { label: "Java", value: "3★" },
      { label: "Python", value: "2★" },
    ],
    note: "Problem Solving & Java (Basic) Certified",
  },
]
