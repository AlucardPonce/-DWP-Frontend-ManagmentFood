require('dotenv').config();
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require("cors");
const bodyParser = require('body-parser');

//const Base_Url = 'https://development-iyl1.onrender.com';
const Base_Url = 'http://localhost:3001';
const app = express();
const port = process.env.PORT || 3001;

if (!process.env.FSA) {
    console.error("❌ ERROR: La variable de entorno FIREBASE_SERVICE_ACCOUNT no está configurada.");
    process.exit(1);
}


const serviceAccount = JSON.parse(process.env.FSA);


try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });

    console.log('✅ Firebase inicializado correctamente');
} catch (error) {
    console.error("❌ Error al inicializar Firebase:", error);
    process.exit(1);
}

const db = admin.firestore();

db.collection('users').limit(1).get()
    .then(() => console.log('✅ Conexión a Firebase establecida correctamente'))
    .catch((err) => console.error('❌ Error al conectar con Firebase:', err));


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en: ${Base_Url}`);
});

/*
const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '10m' });
};

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(403).json({ statusCode: 403, message: 'Token no proporcionado' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error('Error al verificar el token:', err);
            if (err.name === 'TokenExpiredError') {
                return res.status(440).json({ statusCode: 440, message: 'Token expirado, inicie sesión nuevamente' });
            }
            return res.status(401).json({ statusCode: 401, message: 'Token no válido' });
        }

        req.username = decoded.userId || decoded.username;
        next();
    });
};

app.post('/validate', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ statusCode: 400, intMessage: 'Se requieren username y password' });
    }

    try {
        const usersRef = db.collection('USERS');
        const querySnapshot = await usersRef.where('username', '==', username).get();

        if (querySnapshot.empty) {
            return res.status(401).json({ statusCode: 401, intMessage: 'Credenciales incorrectas' });
        }

        const user = querySnapshot.docs[0].data();
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ statusCode: 401, intMessage: 'Credenciales incorrectas' });
        }

        const token = generateToken(user.username);

        return res.status(200).json({
            statusCode: 200,
            intMessage: 'Operación exitosa',
            data: {
                message: 'Autenticación exitosa',
                user: { username: user.username, gmail: user.gmail },
                token
            }
        });

    } catch (err) {
        console.error('Error al validar usuario:', err);
        return res.status(500).json({ statusCode: 500, intMessage: 'Error interno del servidor', error: err.message });
    }
});
*/