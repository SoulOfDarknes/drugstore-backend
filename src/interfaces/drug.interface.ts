import { Document } from 'mongoose';

export interface Drug extends Document {
    name: string;
    price: number;
    description: string;
    imageUrl?: string;
}


