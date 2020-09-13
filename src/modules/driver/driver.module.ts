import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';
import { DriverSchema } from './schemas/driver.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Drivers', schema: DriverSchema }]),
  ],
  controllers: [DriverController],
  providers: [DriverService],
})
export class DriverModule {}