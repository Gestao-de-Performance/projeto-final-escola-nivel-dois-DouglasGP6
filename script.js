


const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-menu');
const menuLinks = document.querySelectorAll("nav a");


toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    const icon = toggle.querySelector('i');
    if (nav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});


menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        const icon = toggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});


document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('active');
        const icon = toggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});


const backToTop = document.getElementById("backToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


const typingText = document.querySelector('.typing-text span');
const words = ['a Developer', 'a Student', 'Creative', 'Motivated'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWords() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeWords, isDeleting ? 50 : 100);
}


typeWords();




function animateSkillBars() {
    const skillCards = document.querySelectorAll('.skill-card');
    
  
    const skillLevels = {
        'HTML5': 85,
        'CSS3': 80,
        'JavaScript': 70,
        'Programming Logic': 75
    };
    
    skillCards.forEach(card => {
        const skillName = card.querySelector('h3').textContent;
        const level = skillLevels[skillName] || 50;
        
        
        if (!card.querySelector('.skill-progress')) {
            const progressContainer = document.createElement('div');
            progressContainer.className = 'skill-progress';
            progressContainer.innerHTML = `
                <div class="progress-bar">
                    <div class="progress-fill" data-level="${level}"></div>
                </div>
                <span class="progress-text">0%</span>
            `;
            card.appendChild(progressContainer);
        }
    });
}


function animateOnScroll() {
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress-fill');
    const progressTexts = document.querySelectorAll('.progress-text');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                progressBars.forEach((bar, index) => {
                    const level = parseInt(bar.dataset.level);
                    let currentLevel = 0;
                    
                    const animateProgress = () => {
                        if (currentLevel <= level) {
                            bar.style.width = currentLevel + '%';
                            progressTexts[index].textContent = currentLevel + '%';
                            currentLevel++;
                            setTimeout(animateProgress, 20);
                        }
                    };
                    
                    setTimeout(() => animateProgress(), index * 200);
                });
                
               
                const skillCards = document.querySelectorAll('.skill-card');
                skillCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 150);
                });
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(skillsSection);
}


function addHoverEffects() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
       
        const icon = card.querySelector('i');
        
        card.addEventListener('mouseenter', () => {
            icon.style.transform = 'rotate(360deg)';
            icon.style.transition = 'transform 0.6s ease';
            
           
            const progressFill = card.querySelector('.progress-fill');
            if (progressFill) {
                progressFill.style.animation = 'pulse 0.6s ease';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            icon.style.transform = 'rotate(0deg)';
        });
    });
}


function addFloatingParticles() {
    const skillsSection = document.getElementById('skills');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background-color: #b74b4b;
            border-radius: 50%;
            opacity: 0.3;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s infinite ease-in-out;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        skillsSection.appendChild(particle);
    }
}


function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Estilos para barras de progresso */
        .skill-progress {
            margin-top: 1rem;
            text-align: left;
        }
        
        .progress-bar {
            background-color: #333;
            height: 10px;
            border-radius: 5px;
            overflow: hidden;
            margin-bottom: 0.5rem;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #b74b4b, #ff5757);
            width: 0%;
            border-radius: 5px;
            transition: width 0.3s ease;
            box-shadow: 0 0 10px rgba(183, 75, 75, 0.5);
        }
        
        .progress-text {
            font-size: 1.2rem;
            color: #b74b4b;
            font-weight: 600;
        }
        
        /* Animação inicial para cards */
        .skill-card {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.6s ease;
        }
        
        /* Animações */
        @keyframes pulse {
            0% { box-shadow: 0 0 10px rgba(183, 75, 75, 0.5); }
            50% { box-shadow: 0 0 20px rgba(183, 75, 75, 0.8); }
            100% { box-shadow: 0 0 10px rgba(183, 75, 75, 0.5); }
        }
        
        @keyframes float {
            0%, 100% { 
                transform: translateY(0px) rotate(0deg); 
                opacity: 0.3;
            }
            50% { 
                transform: translateY(-20px) rotate(180deg); 
                opacity: 0.8;
            }
        }
        
        /* Efeito de brilho no hover */
        .skill-card:hover .progress-fill {
            animation: shimmer 1s ease-in-out;
        }
        
        @keyframes shimmer {
            0% { background-position: -100px 0; }
            100% { background-position: 100px 0; }
        }
        
        /* Posicionamento relativo para partículas */
        #skills {
            position: relative;
            overflow: hidden;
        }
    `;
    
    document.head.appendChild(style);
}


function initSkillsSection() {
   
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            addDynamicStyles();
            animateSkillBars();
            animateOnScroll();
            addHoverEffects();
            addFloatingParticles();
        });
    } else {
        addDynamicStyles();
        animateSkillBars();
        animateOnScroll();
        addHoverEffects();
        addFloatingParticles();
    }
}

// Inicializar tudo
initSkillsSection();
