require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route POST pour recevoir les messages du formulaire
app.post("/send-message", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Tous les champs sont obligatoires." });
    }

    try {
        // Configurer le transporteur SMTP
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Options de l'email
        let mailOptions = {
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: "siblisalomonsibli@gmail.com",
            subject: "Nouveau message depuis votre portfolio",
            text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        // Envoi de l'email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Message envoyé avec succès !" });
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de l'envoi du message." });
    }
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
