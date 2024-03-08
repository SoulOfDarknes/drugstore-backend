import { Document } from 'mongoose';

interface OrderItem {
    productId: string;
    quantity: number;
}

export interface Order extends Document {
    items: OrderItem[];
    email: string;
    phone: string;
    address: string;
    createdAt: Date;
}