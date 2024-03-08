import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderSchema } from '../../schemas/order.schema';
import { Order } from '../../interfaces/order.interface';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }])
  ],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersModule { }
