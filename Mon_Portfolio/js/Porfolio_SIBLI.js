// Fonction pour changer le contenu affiché
function changerContenu(id, element) {
    // Masquer tous les contenus sauf celui de PROJECTS
    var contenus = document.querySelectorAll('.contenu');
    contenus.forEach(function(contenu) {
        contenu.style.display = 'none';
    });

    // Afficher le contenu correspondant à l'élément cliqué
    var contenuAffiche = document.getElementById(id);
    if (contenuAffiche) {
        contenuAffiche.style.display = 'block';
    }

    // Masquer le contenu de PROJECTS si un autre contenu est affiché
    var jects = document.getElementById('pro');
    if (id !== 'pro') {
        jects.style.display = 'none';
    } else {
        jects.style.display = 'grid'; // Réafficher en grille
    }

    // Retirer la classe "active" de tous les éléments
    var elements = document.querySelectorAll('.prj');
    elements.forEach(function(el) {
        el.classList.remove('active');
    });

    // Ajouter la classe "active" à l'élément cliqué
    element.classList.add('active');
}

// Script pour l'apparition de l'image au scroll
const image = document.querySelector('.scroll-appear-image');

function checkVisibility() {
    const rect = image.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        image.classList.add('visible');
        window.removeEventListener('scroll', checkVisibility); 
    }
}

window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Vérifie au chargement de la page

// Script pour le texte animé
const text = "Bonjour, je suis Sibli, élève ingénieur à l'Institut National Polytechnique Félix Houphouët-Boigny (INPHB). Actuellement, je poursuis mes études dans la filière de la science et de la technologie de l'information et de la communication (STIC). Passionné par les nouvelles technologies, la data science, l'intelligence artificielle (IA), et le développement web, je mets en pratique mes compétences à travers divers projets innovants. Sur mon portfolio, vous découvrirez mes réalisations et l'étendue de mes compétences dans ces domaines fascinants. Bienvenue !"; // Texte à afficher
const typedTextElement = document.getElementById("typed-text");

let index = 0;

function typeText() {
    if (index < text.length) {
        typedTextElement.textContent += text.charAt(index); // Ajoute une lettre à la fois
        index++;
        setTimeout(typeText, 30); // Délai entre chaque lettre (en millisecondes)
    }
}

typeText();
setTimeout(function() {
    const hiddenText = document.getElementById("typed-text");
    hiddenText.style.display = "block"; // Affiche l'élément
}, 3000);

// Script pour la section About Me
document.addEventListener('DOMContentLoaded', function() {
    // Faire apparaître la div de gauche après 500ms
    setTimeout(() => {
        const leftDiv = document.querySelector('.slide-in-left');
        if (leftDiv) {
            leftDiv.classList.add('visible');
        }
    }, 500);

    // Faire apparaître la div de droite après 1000ms
    setTimeout(() => {
        const rightDiv = document.querySelector('.slide-in-right');
        if (rightDiv) {
            rightDiv.classList.add('visible');
        }
    }, 1000);
});

// Script pour l'apparition des sections au scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Désactive l'observation après l'affichage
            }
        });
    }, { threshold: 0.2 }); // Se déclenche quand 20% de la section est visible

    sections.forEach(section => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".hidden1");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Désactive l'observation après l'affichage
            }
        });
    }, { threshold: 0.2 }); // Se déclenche quand 20% de la section est visible

    sections.forEach(section => observer.observe(section));
});
function changerContenu(id, element) {
    // Masquer tous les contenus sauf celui de PROJECTS
    var contenus = document.querySelectorAll('.contenu');
    contenus.forEach(function(contenu) {
        contenu.style.display = 'none';
    });

    // Afficher le contenu correspondant à l'élément cliqué
    var contenuAffiche = document.getElementById(id);
    if (contenuAffiche) {
        if (id === 'certi') {
            contenuAffiche.style.display = 'flex'; // Utiliser 'flex' pour centrer CERTIFICATES
        } else {
            contenuAffiche.style.display = 'grid'; // Utiliser 'grid' pour TECH STACK et PROJECTS
        }
    }

    // Masquer le contenu de PROJECTS si un autre contenu est affiché
    var jects = document.getElementById('pro');
    if (id !== 'pro') {
        jects.style.display = 'none';
    } else {
        jects.style.display = 'grid'; // Réafficher en grille
    }

    // Retirer la classe "active" de tous les éléments
    var elements = document.querySelectorAll('.prj');
    elements.forEach(function(el) {
        el.classList.remove('active');
    });

    // Ajouter la classe "active" à l'élément cliqué
    element.classList.add('active');
}
