import * as mongoose from 'mongoose';
import { DrugSchema } from './drug.schema';

export const StoreSchema = new mongoose.Schema({
    name: String,
    location: String,
    drugs: [DrugSchema],
});