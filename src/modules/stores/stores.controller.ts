import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { StoresService } from './stores.service';
import { Store } from '../../interfaces/store.interface';
import { Drug } from 'src/interfaces/drug.interface';

@Controller('stores')
export class StoresController {
    constructor(private readonly storesService: StoresService) { }

    @Get()
    findAll(@Query('sortBy') sortBy?: string, @Query('order') order?: string, @Query('favoritesFirst') favoritesFirst?: string): Promise<Store[]> {
        return this.storesService.findAll(sortBy, order, favoritesFirst === 'true');
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

    @Put(':id/favorite')
    markAsFavorite(@Param('id') id: string): Promise<Drug> {
        return this.storesService.markAsFavorite(id);
    }

    @Delete(':id/favorite')
    removeFromFavorites(@Param('id') id: string): Promise<Drug> {
        return this.storesService.removeFromFavorites(id);
    }

}

