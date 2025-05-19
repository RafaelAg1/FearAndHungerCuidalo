const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/juego_avance')
    .then(() => console.log('✅ Conectado a MongoDB'))
    .catch(err => console.error('❌ Error de conexión:', err));
    const ProgresoPrueba = new mongoose.Schema({
        playerId: String,
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
    const { playerId, personajeSeleccionado,jugador, nivelesExpedicion} = req.body;
    const progreso = await ProgresoPruebaaa.findOneAndUpdate(
    { playerId },
    { personajeSeleccionado, jugador, nivelesExpedicion },
    { upsert: true, new: true }
);
    res.json(progreso);
});
app.get('/load/:playerId', async (req, res) => {
    const progreso = await Progreso.findOne({ playerId: req.params.playerId });
    if (!progreso) return res.status(404).send('No encontrado');
    res.json(progreso);
});
app.listen(3000, () => console.log('Servidor en http://localhost:3000'));