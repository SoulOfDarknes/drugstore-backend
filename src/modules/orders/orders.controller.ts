import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from '../../interfaces/order.interface';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) { }

    @Get()
    findAll(): Promise<Order[]> {
        return this.ordersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Order> {
        return this.ordersService.findOne(id);
    }

    @Post()
    create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
        return this.ordersService.create(createOrderDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateOrderDto: CreateOrderDto): Promise<Order> {
        return this.ordersService.update(id, updateOrderDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<any> {
        return this.ordersService.delete(id);
    }
}