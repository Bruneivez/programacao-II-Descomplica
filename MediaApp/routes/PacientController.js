import express from "express";
import pacientService from "../services/PacientService.js";

const router = express.Router();

router.get('/pacients', async (req, res) => {
    try {
        const pacients = await pacientService.getAllPacients();
        res.send(pacients);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getPacient/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pacient = await pacientService.getPacient(id);
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postPacient', async (req, res) => {
    const { name, birthDate, email, phone } = req.body;
    try {
        const pacient = await pacientService.savePacient({ name, birthDate, email, phone });
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/pacients/:id', async (req, res) => {
    const { id } = req.params;
    const { name, birthDate, email, phone } = req.body;
    try {
        const pacient = await pacientService.updatePacient(id, { name, birthDate, email, phone });
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/pacients/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pacient = await pacientService.deletePacient(id);
        res.send(pacient);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;
