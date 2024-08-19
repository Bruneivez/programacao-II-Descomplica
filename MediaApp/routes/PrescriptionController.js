import express from "express";
import prescriptionService from "../services/PrescriptionService.js";

const router = express.Router();

router.get('/prescriptions', async (req, res) => {
    try {
        const prescriptions = await prescriptionService.getAllPrescriptions();
        res.send(prescriptions);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getPrescription/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const prescription = await prescriptionService.getPrescription(id);
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postPrescription', async (req, res) => {
    const { date, appointmentId, medicine, dosage, instruction } = req.body;
    try {
        const prescription = await prescriptionService.savePrescription({ date, appointmentId, medicine, dosage, instruction });
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/prescriptions/:id', async (req, res) => {
    const { id } = req.params;
    const { date, appointmentId, medicine, dosage, instruction } = req.body;
    try {
        const prescription = await prescriptionService.updatePrescription(id, { date, appointmentId, medicine, dosage, instruction });
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/prescriptions/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const prescription = await prescriptionService.deletePrescription(id);
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;
