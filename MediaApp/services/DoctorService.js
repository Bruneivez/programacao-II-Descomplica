import DoctorRepository from "../repositories/DoctorRepository.js";

const getAllDoctors = async () => {
    return DoctorRepository.getAllDoctors();
};

const getDoctor = async (id) => {
    return DoctorRepository.getDoctor(id);
};

const saveDoctor = async ({ doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone }) => {
    return DoctorRepository.saveDoctor({ doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone });
};

const updateDoctor = async (id, { doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone }) => {
    return DoctorRepository.updateDoctor(id, { doctorId, name, login, password, medicalSpecialty, medicalRegistration, email, phone });
};

const deleteDoctor = async (id) => {
    return DoctorRepository.deleteDoctor(id);
};

const doctorService = {
    getAllDoctors,
    getDoctor,
    saveDoctor,
    updateDoctor,
    deleteDoctor
};

export default doctorService;
