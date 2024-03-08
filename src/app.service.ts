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
      } else {
        throw new HttpException(`Drug ${drugData.name} already exists.`, HttpStatus.CONFLICT);
      }
      return drug;
    };

    await Promise.all(drugData.map(drug => createOrGetDrug(drug).catch(error => { throw error; })));

    for (const store of stores) {
      const existingStore = await this.storeModel.findOne({ location: store.location }).exec();
      if (!existingStore) {
        await this.storeModel.create(store);
      } else {
        throw new HttpException(`Store at ${store.location} already exists.`, HttpStatus.CONFLICT);
      }
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
