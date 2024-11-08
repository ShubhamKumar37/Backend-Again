import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    diagnosedWith: {
        type: String, 
        required: true,
    },
    address: {type: String},
    age: {type: Number},
    bloodGroup: {
        type: String,
        required: true,
    },
    gender: {
        type: String, 
        enum: ["M", "F", "O"],
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
}, {timestamps: true});

export const Patient = mongoose.model("Patient", patientSchema);