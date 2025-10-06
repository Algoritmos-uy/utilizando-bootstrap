const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/enviar-correo', (req, res) => {
    const { to, subject, text } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'devgenerico@gmail.com', // Reemplaza con tu dirección de correo
            pass: 'DEv099336132', // Reemplaza con tu contraseña
        },
    });

    const mailOptions = {
        from: 'devgenerico@gmail.com',
        to,
        subject,
        text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            res.status(500).json({ message: 'Error al enviar el correo' });
        } else {
            console.log('Correo enviado: ' + info.response);
            res.json({ message: 'Formulario enviado correctamente' });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
