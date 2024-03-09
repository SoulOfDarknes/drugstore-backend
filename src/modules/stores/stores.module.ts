import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoresController } from './stores.controller';
import { StoresService } from './stores.service';
import { StoreSchema } from '../../schemas/store.schema';
import { DrugSchema } from 'src/schemas/drug.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Store', schema: StoreSchema }, { name: 'Drug', schema: DrugSchema }]),
  ],
  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule { }
