// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";

// Firebase configuration (remplace par tes propres valeurs)
const firebaseConfig = {
  apiKey: "AIzaSyCFvywPEkLIRCYidgnvDOShYLLic5a1hOE",
  authDomain: "base-de-donnee-sibli.firebaseapp.com",
  projectId: "base-de-donnee-sibli",
  storageBucket: "base-de-donnee-sibli.firebasestorage.app",
  messagingSenderId: "372459432478",
  appId: "1:372459432478:web:4a2a51921ae71bcf929c0f",
  measurementId: "G-PLXLQ8V70H"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Function to send a message
function sendMessage(nom, email, message) {
  const messagesRef = ref(db, 'messages');
  push(messagesRef, {
    nom: nom,
    email: email,
    message: message,
    timestamp: new Date().toISOString()
  }).then(() => {
    console.log("Message envoyé avec succès !");
    alert("Message envoyé avec succès !"); // Affiche une alerte à l'utilisateur
  }).catch((error) => {
    console.error("Erreur lors de l'envoi du message : ", error);
    alert("Erreur lors de l'envoi du message. Veuillez réessayer."); // Affiche une alerte en cas d'erreur
  });
}

// Handle form submission
const contactForm = document.querySelector('form'); // Sélectionne le formulaire

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupère les valeurs des champs
  const nom = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const message = contactForm.querySelector('textarea').value;

  // Envoie le message à Firebase
  sendMessage(nom, email, message);

  // Réinitialise le formulaire (optionnel)
  contactForm.reset();
});