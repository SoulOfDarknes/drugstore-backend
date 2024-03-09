import { IsEmail, IsNotEmpty, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class OrderItemDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    productId: string;

    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    imageUrl?: string;
}

export class CreateOrderDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OrderItemDto)
    items: OrderItemDto[];

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    address: string;
}
