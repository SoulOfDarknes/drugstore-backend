import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StoresService } from './stores.service';
import { Store } from '../../interfaces/store.interface';

@Controller('stores')
export class StoresController {
    constructor(private readonly storesService: StoresService) { }

    @Get()
    findAll(): Promise<Store[]> {
        return this.storesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Store> {
        return this.storesService.findOne(id);
    }

    @Post()
    create(@Body() createStoreDto: any): Promise<Store> {
        return this.storesService.create(createStoreDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateStoreDto: any): Promise<Store> {
        return this.storesService.update(id, updateStoreDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<void> {
        return this.storesService.delete(id);
    }
}
