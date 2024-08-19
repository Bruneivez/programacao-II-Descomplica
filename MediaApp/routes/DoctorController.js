import express from "express";
import bcrypt from "bcrypt";
import doctorService from "../services/DoctorService.js";

const router = express.Router();
const saltRounds = 10;

router.get('/doctors', async (req, res) => {
    try {
        const doctors = await doctorService.getAllDoctors();
        res.send(doctors);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getDoctor/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const doctor = await doctorService.getDoctor(id);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postDoctor', async (req, res) => {
    const { doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone } = req.body;
    try {
        // Hash da senha usando bcrypt no Controller
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        const doctor = await doctorService.saveDoctor({
            doctorId,
            name,
            login,
            password: hashedPassword,
            medicalSpecialty,
            medicalRegistration,
            email,
            phone
        });
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/doctors/:id', async (req, res) => {
    const { id } = req.params;
    const { doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone } = req.body;
    try {
        // Hash da senha usando bcrypt no Controller
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        const doctor = await doctorService.updateDoctor(id, {
            doctorId,
            name,
            login,
            password: hashedPassword,
            medicalSpecialty,
            medicalRegistration,
            email,
            phone
        });
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/doctors/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const doctor = await doctorService.deleteDoctor(id);
        res.send(doctor);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;
