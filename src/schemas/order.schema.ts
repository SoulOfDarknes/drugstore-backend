import * as mongoose from 'mongoose';

const OrderItemSchema = new mongoose.Schema({
    name: String,
    productId: mongoose.Schema.Types.ObjectId,
    quantity: Number,
    description: String,
    imageUrl: String,
    price: Number,
});

export const OrderSchema = new mongoose.Schema({
    items: [OrderItemSchema],
    email: String,
    phone: String,
    address: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
});
