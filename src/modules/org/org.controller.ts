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
  ParseIntPipe,
} from '@nestjs/common';
import { CreateOrgDto, UpdateOrgDto } from './dtos';
import { OrgService } from './org.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('org')
@Controller('org')
export class OrgController {
  constructor(private orgService: OrgService) {}

  @Get()
  async getOrgs(@Res() res) {
    const orgs = await this.orgService.findAll();
    return res.status(HttpStatus.OK).json({
      orgs,
    });
  }

  @Get('/:orgId')
  async getOrg(@Res() res, @Param('orgId') orgId: string) {
    const org = await this.orgService.findById(orgId);
    //if (!org) throw new NotFoundException('Org does not exists');
    return res.status(HttpStatus.OK).json(org);
  }

  @Get('/find')
  public async findTodo(@Res() res, @Body() body) {
    const queryCondition = body;
    const todos = await this.orgService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(todos);
  }

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createOrg(@Res() res, @Body() createOrgDto: CreateOrgDto) {
    const org = await this.orgService.create(createOrgDto);
    return res.status(HttpStatus.OK).json({ org });
  }

  @Post('/multicreate')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async multiCreateOrg(@Res() res, @Body('data') createOrgDto: CreateOrgDto[]) {
    const newOrg = [];
    for (const org of createOrgDto) {
      newOrg.push(await this.orgService.create(org));
    }
    return res.status(HttpStatus.OK).json(newOrg);
  }

  @Delete('/delete/:orgId')
  async deleteOrg(@Param('orgId') orgId: string, @Res() res) {
    const orgDeleted = await this.orgService.delete(orgId);
    return res.status(HttpStatus.OK).json({ orgDeleted });
  }

  @Put('/update/:orgId')
  async updateOrg(
    @Param('orgId') orgId: string,
    @Res() res,
    @Body() updateOrgDto: UpdateOrgDto,
  ) {
    const orgUpdated = await this.orgService.update(orgId, updateOrgDto);
    return res.status(HttpStatus.OK).json({ orgUpdated });
  }
}
