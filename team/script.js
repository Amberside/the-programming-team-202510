// Sample project data
const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with React and Node.js",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "https://via.placeholder.com/400x200"
    },
    {
        title: "Task Manager",
        description: "Real-time task management application",
        technologies: ["Vue.js", "Firebase", "Sass"],
        image: "https://via.placeholder.com/400x200"
    },
    {
        title: "Social Media Dashboard",
        description: "Analytics dashboard for social media metrics",
        technologies: ["React", "D3.js", "Express"],
        image: "https://via.placeholder.com/400x200"
    }
];

// Sample skills data
const skills = [
    "JavaScript", "React", "Node.js",
    "Python", "SQL", "Git",
    "AWS", "Docker", "GraphQL"
];

// Dynamically load projects
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join(' ')}
                </div>
            </div>
        `;
        projectsGrid.appendChild(card);
    });
}

// Dynamically load skills
function loadSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.textContent = skill;
        skillsContainer.appendChild(skillItem);
    });
}

// Smooth scroll functionality
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    event.target.reset();
}

// Initialize portfolio
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadSkills();
});

// Add scroll animation for sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-out';
    observer.observe(section);
});