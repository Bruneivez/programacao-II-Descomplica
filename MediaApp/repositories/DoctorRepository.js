import Doctor from "../models/Doctor.js";

const getAllDoctors = async () => {
    return await Doctor.find();
};

const getDoctor = async (id) => {
    try {
        return await Doctor.findById(id);
    } catch (error) {
        throw new Error(error);
    }
};

const saveDoctor = async ({ doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone }) => {
    try {
        const doctor = new Doctor({ doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone });
        return await doctor.save();
    } catch (error) {
        throw new Error(error);
    }
};

const updateDoctor = async (id, { doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone }) => {
    try {
        return await Doctor.findByIdAndUpdate(id, { doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone }, { new: true });
    } catch (error) {
        throw new Error(error);
    }
};

const deleteDoctor = async (id) => {
    try {
        return await Doctor.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
};

const doctorRepository = {
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor
};

export default doctorRepository;
