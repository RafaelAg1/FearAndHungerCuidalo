const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('✅ Conectado a MongoDB'))
    .catch(err => console.error('❌ Error de conexión:', err));
    const ProgresoPrueba = new mongoose.Schema({
        nombreJugador: String,
        personajeSeleccionado: {
            nombre: String,
            edad: Number,
            hambre: Number,
            miedo: Number,
            salud: Number,
            sueño: Number
        },
        jugador: {
            oro: Number,
            cantPanMohoso: Number,
            cantCarneSeca: Number,
            cantVialAzul: Number,
            cantBotellaWhisky: Number,
            cantPocionCuracion: Number,
            cantLibroIluminacion: Number
        },
        nivelesExpedicion: [
            {
                id: Number,
                nombre: String,
                desbloqueado: Boolean,
                miedo: Number,
                oro: Number,
                sueño: Number
            }
        ]
    });
    const ProgresoPruebaaa = mongoose.model('ProgresoPrueba', ProgresoPrueba);
app.post('/save', async (req, res) => {
    const { nombreJugador, personajeSeleccionado,jugador, nivelesExpedicion} = req.body;
    const progreso = await ProgresoPruebaaa.findOneAndUpdate(
    { nombreJugador },
    { personajeSeleccionado, jugador, nivelesExpedicion },
    { upsert: true, new: true }
);
    res.json(progreso);
});
app.get('/load/:nombreJugador', async (req, res) => {
    const progreso = await ProgresoPruebaaa.findOne({ nombreJugador: req.params.nombreJugador });
    if (!progreso) {
        return res.status(404).send('No encontrado');
    }
    
    res.json(progreso);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));