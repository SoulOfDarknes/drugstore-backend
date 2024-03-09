import * as mongoose from 'mongoose';

export const DrugSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false },
    imageUrl: { type: String, required: false },
    isFavorite: { type: Boolean, default: false },
});