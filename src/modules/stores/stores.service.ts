import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Store } from '../../interfaces/store.interface';
import { Drug } from 'src/interfaces/drug.interface';

@Injectable()
export class StoresService {
    constructor(
        @InjectModel('Store') private readonly storeModel: Model<Store>,
        @InjectModel('Drug') private readonly drugModel: Model<Drug>
    ) { }

    async findAll(sortBy: string = '', order: string = 'asc', favoritesFirst: boolean = false): Promise<Store[]> {
        let sortOptions = {};

        if (favoritesFirst) {
            sortOptions['drugs.isFavorite'] = -1;
        }

        if (sortBy) {
            sortOptions[sortBy] = order === 'desc' ? -1 : 1;
        }

        return this.storeModel.find().populate({
            path: 'drugs',
            match: favoritesFirst ? { isFavorite: true } : {},
            options: { sort: sortOptions }
        }).exec();
    }

    markAsFavorite(drugId: string): Promise<Drug> {
        return this.drugModel.findByIdAndUpdate(drugId, { $set: { isFavorite: true } }, { new: true }).exec();
    }

    removeFromFavorites(drugId: string): Promise<Drug> {
        return this.drugModel.findByIdAndUpdate(drugId, { $set: { isFavorite: false } }, { new: true }).exec();
    }


    async findOne(id: string): Promise<Store> {
        const store = await this.storeModel.findById(id).populate('drugs').exec();
        if (!store) {
            throw new NotFoundException(`Store with ID "${id}" not found`);
        }
        return store;
    }

    async create(createStoreDto: any): Promise<Store> {
        const newStore = new this.storeModel(createStoreDto);
        return newStore.save();
    }

    async update(id: string, updateStoreDto: any): Promise<Store> {
        const existingStore = await this.storeModel.findByIdAndUpdate(id, updateStoreDto, { new: true }).exec();
        if (!existingStore) {
            throw new NotFoundException(`Store with ID "${id}" not found`);
        }
        return existingStore;
    }

    async delete(id: string): Promise<void> {
        const result = await this.storeModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException(`Store with ID "${id}" not found`);
        }
    }
}
