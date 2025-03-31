document.addEventListener('DOMContentLoaded', () => {
    // Experience Data
    const experience = [
        {
            title: 'Educational Content Creator',
            company: 'Civilization Research Institute',
            period: 'April 2024 - November 2024',
            details: `• Designed and produced visual content to simplify complex topics in systemic change
• Advised on communication strategies
• Advised on curricular design`,
            testimonial: {
                text: "David's work is remarkable for its clarity and evocativeness.\nHe is able to work with extremely abstract and complex ideas and then bring them into explanatory and aesthetic forms that greatly help with intuitive understanding.\nAs a visual storyteller his skills are world class.",
                author: "Zak Stein",
                title: "Co-founder, Civilization Research Institute, Consilience Project"
            }
        },
        {
            title: 'Visual Storytelling & Systems Change Consultant',
            company: 'Liminal Consulting',
            period: '2022-Present',
            details: `• Created animated videos and educational materials explaining complex systemic change concepts
• Developed Python library for 3D animations
• Provided consulting services focused on visual metaphors for high-profile organizations`,
            testimonial: {
                text: "David's capability to explain modern age concepts with visual clarity is unparalleled.\nHis clear narrative style and eye-pleasing graphic animations are a powerful tool for the communication of your world-changing ideas.",
                author: "Jeff Emmett",
                title: "Mycopunk"
            }
        },
        {
            title: 'Student Research Assistant',
            company: 'Institute for Information Systems, Karlsruhe Institute of Technology (KIT)',
            period: 'July 2022 - July 2023',
            details: `• Developed a meeting assistant leveraging open-source ML models (Hugging Face)
• Built API endpoints using FastAPI, Pydantic, and Postman
• Integrated transcription (Whisper), diarization, sentiment/emotion analysis, and LLM models
• Utilized Docker for containerization`,
            testimonial: null // No testimonial provided for this role
        },
        {
            title: 'Project Liminality | Founder',
            company: '',
            period: '2021-Present',
            details: `• Developing collective intelligence communication protocol
• Built prototype using React Three Fiber and Electron
• Created YouTube channel showcasing animated explanations of complex concepts
• Managing open-source repositories for visualization tools and educational content`,
            testimonial: {
                text: "The power of centralized institutions is weakening, but its potential peer to peer replacements are as yet too fragmented and disorienting to carry public debate.\nProject Liminality is working on potentially important solutions: \nthe use of visual metaphors to catalize broader conversations.\nCheck it out.",
                author: "Michel Bauwens",
                title: "P2P Foundation"
            }
        },
    ];

    // Education Data
    const education = [
        {
            degree: 'Bachelor Research Project in Quantum Optics',
            institution: 'Leiden University',
            period: 'February 2020 - June 2020',
            details: 'Developed novel approach to quantum state tomography using deep learning and neural networks (PyTorch)'
        },
        {
            degree: 'B.Sc. in Physics',
            institution: 'Heidelberg University',
            period: 'Sept 2017 - June 2020'
        },
        {
            degree: 'Erasmus Exchange',
            institution: 'Leiden University',
            period: 'Sept 2019 - June 2020'
        }
    ];

    // Skills Data
    const skills = [
        {
            category: 'Visual Communication',
            items: [
                'Cinema 4D, FinalCutProX',
                'Visual Storytelling & Metaphor Design',
                'Educational Content Creation'
            ]
        },
        {
            category: 'Programming',
            items: [
                'Python (Custom Animation Library, Manim, FastAPI, Pydantic)',
                'Deep Learning (PyTorch)',
                'ML Model Integration (Hugging Face: Whisper, LLMs, etc.)',
                'React Three Fiber',
                'Docker'
            ]
        },
        {
            category: 'Systems Thinking',
            items: [
                'Meta-Crisis Analysis',
                'First Principles Thinking',
                'Knowledge Transfer Systems'
            ]
        }
    ];


    // Render Experience
    const experienceContainer = document.querySelector('.experience-items');
    experience.forEach(item => {
        experienceContainer.innerHTML += `
            <div class="experience-item">
                <div class="experience-content">
                    <h3>${item.title}${item.company ? ` | ${item.company}` : ''}</h3>
                    <div class="date">${item.period}</div>
                    <p>${item.details}</p>
                </div>
                ${item.testimonial ? `
                    <div class="testimonial">
                        "${item.testimonial.text}"
                        <div class="testimonial-author">${item.testimonial.author}</div>
                        <div class="testimonial-title">${item.testimonial.title}</div>
                    </div>
                ` : ''}
            </div>
        `;
    });

    // Render Education
    const educationContainer = document.querySelector('.education-items');
    education.forEach(item => {
        educationContainer.innerHTML += `
            <div class="education-item">
                <h3>${item.degree} | ${item.institution}</h3>
                <div class="date">${item.period}</div>
                ${item.details ? `<p>${item.details}</p>` : ''}
            </div>
        `;
    });

    // Render Skills
    const skillsContainer = document.querySelector('.skills-grid');
    skills.forEach(category => {
        skillsContainer.innerHTML += `
            <div class="skill-category">
                <h3>${category.category}</h3>
                <ul>
                    ${category.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    });

});
