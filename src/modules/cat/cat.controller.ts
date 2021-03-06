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
import { CreateCatDto, UpdateCatDto } from './dtos';
import { CatService } from './cat.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('cat')
@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Get()
  async getCats(@Res() res) {
    const cats = await this.catService.findAll();
    return res.status(HttpStatus.OK).json(cats);
  }

  @Get('/find')
  public async findCat(@Res() res, @Body() body) {
    const queryCondition = body;
    const cats = await this.catService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(cats);
  }

  @Get('/:catId')
  async getCat(@Res() res, @Param('catId') catId: string) {
    const cat = await this.catService.findById(catId);
    return res.status(HttpStatus.OK).json(cat);
  }

  @Get('/info/:catId')
  async getInfo(@Res() res, @Param('catId') catId: string) {
    const cat = await this.catService.info(catId);
    return res.status(HttpStatus.OK).json(cat);
  }

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createCat(@Res() res, @Body() createCatDto: CreateCatDto[]) {
    const cat = await this.catService.create(createCatDto);
    return res.status(HttpStatus.OK).json(cat);
  }

  @Delete('/delete/:catId')
  async deleteCat(@Param('catId') catId: string, @Res() res) {
    const catDeleted = await this.catService.delete(catId);
    return res.status(HttpStatus.OK).json(catDeleted);
  }

  @Put('/update/:catId')
  async updateCat(
    @Param('catId') catId: string,
    @Res() res,
    @Body() updateCatDto: UpdateCatDto,
  ) {
    const catUpdated = await this.catService.update(catId, updateCatDto);
    return res.status(HttpStatus.OK).json(catUpdated);
  }
}
