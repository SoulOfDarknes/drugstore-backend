import { Document } from 'mongoose';
import { Drug } from './drug.interface';

export interface Store extends Document {
    name: string;
    location: string;
    drugs: Drug[];
}