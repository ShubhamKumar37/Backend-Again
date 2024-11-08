import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number, 
        required: true,
    }
});

const orderSchema = new mongoose.Schema({
    customer: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderPrice: {
        type: Number,
        required: true,
    },  
    orderItems: {
        type: [orderItemSchema], 
        required: true,
    },
    address: {
        type: String
    },
    status: {
        type: String, 
        enum: ["PENDING", "CANCELD", "DELIVERED"],
        default: "PENDING"
    }
}, {timestamps: true});

export const Order = mongoose.model("Order", orderSchema);