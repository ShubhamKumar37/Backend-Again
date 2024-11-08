import mongoose from "mongoose"

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    cordinates: {
        type: String,
    },
    specialized: [
        {
            type: String,
            required: true,
        },
    ],
    pinCode: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export const Hospital = mongoose.model("Hospital", hospitalSchema);