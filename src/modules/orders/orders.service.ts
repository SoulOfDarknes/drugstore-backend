import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from '../../interfaces/order.interface';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
    constructor(@InjectModel('Order') private readonly orderModel: Model<Order>) { }

    async findAll(): Promise<Order[]> {
        return this.orderModel.find().exec();
    }

    async findOne(id: string): Promise<Order> {
        return this.orderModel.findById(id).exec();
    }

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        const newOrder = new this.orderModel(createOrderDto);
        return newOrder.save();
    }

    async update(id: string, updateOrderDto: CreateOrderDto): Promise<Order> {
        return this.orderModel.findByIdAndUpdate(id, updateOrderDto, { new: true }).exec();
    }

    async delete(id: string): Promise<any> {
        return this.orderModel.findByIdAndDelete(id).exec();
    }

    async search(query: { email?: string, phone?: string, id?: string }): Promise<Order[]> {
        let filter = {};
        if (query.email) {
            filter = { ...filter, email: query.email };
        }
        if (query.phone) {
            filter = { ...filter, phone: query.phone };
        }
        if (query.id) {
            filter = { ...filter, _id: query.id };
        }
        return this.orderModel.find(filter).exec();
    }

}