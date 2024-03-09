import { Document } from 'mongoose';

interface OrderItem {
    name: string;
    productId: string;
    quantity: number;
    description: string;
    imageUrl?: string;
}

export interface Order extends Document {
    items: OrderItem[];
    email: string;
    phone: string;
    address: string;
    createdAt: Date;
}