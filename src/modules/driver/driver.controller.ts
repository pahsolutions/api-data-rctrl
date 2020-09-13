import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Res,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';
import { CreateDriverDto, UpdateDriverDto } from './dtos';
import { DriverService } from './driver.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('driver')
@Controller('driver')
export class DriverController {
  constructor(private driverService: DriverService) {}

  @Get()
  async getDrivers(@Res() res) {
    const drivers = await this.driverService.findAll();
    return res.status(HttpStatus.OK).json({
      drivers,
    });
  }

  @Get('/:driverId')
  async getDriver(@Res() res, @Param('driverId') driverId: string) {
    const driver = await this.driverService.findById(driverId);
    //if (!driver) throw new NotFoundException('Driver does not exists');
    return res.status(HttpStatus.OK).json(driver);
  }

  @Get('/find')
  public async findTodo(@Res() res, @Body() body) {
    const queryCondition = body;
    const todos = await this.driverService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(todos);
  }

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createDriver(@Res() res, @Body() createDriverDto: CreateDriverDto) {
    const driver = await this.driverService.create(createDriverDto);
    return res.status(HttpStatus.OK).json({ driver });
  }

  @Delete('/delete/:driverId')
  async deleteDriver(@Param('driverId') driverId: string, @Res() res) {
    const driverDeleted = await this.driverService.delete(driverId);
    return res.status(HttpStatus.OK).json({ driverDeleted });
  }

  @Put('/update/:driverId')
  async updateDriver(
    @Param('driverId') driverId: string,
    @Res() res,
    @Body() updateDriverDto: UpdateDriverDto,
  ) {
    const driverUpdated = await this.driverService.update(
      driverId,
      updateDriverDto,
    );
    return res.status(HttpStatus.OK).json({ driverUpdated });
  }
}