import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Drug } from './interfaces/drug.interface';
import { Store } from './interfaces/store.interface';
import { drugData, stores } from './mock/mock';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Store') private storeModel: Model<Store>,
    @InjectModel('Drug') private drugModel: Model<Drug>
  ) { }

  async addSampleData(): Promise<void> {
    const createOrGetDrug = async (drugData: { name: string; price?: number; description?: string; }) => {
      let drug = await this.drugModel.findOne({ name: drugData.name }).exec();
      if (!drug) {
        drug = await this.drugModel.create(drugData);
      }
      return drug._id;
    };

    const drugIds = await Promise.all(drugData.map(drug => createOrGetDrug(drug)));

    for (const store of stores) {
      const existingStore = await this.storeModel.findOne({ name: store.name }).exec();
      if (!existingStore) {
        await this.storeModel.create({
          ...store,
          drugs: drugIds
        });
      }
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
