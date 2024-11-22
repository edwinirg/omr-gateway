import { Controller, Get, Param } from '@nestjs/common';
import { OmrService } from './omr.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('OMR')
@Controller('omr')
export class OmrController {
  constructor(private readonly OmrService: OmrService) {}

  @Get('/empleados')
  async getAllEmpleados() {
    return this.OmrService.getAllEmpleados();
  }

  @Get('/puesto-paje')
  async PAJE() {
    return this.OmrService.getPuestosFromPaje();
  }

  @Get('/departamentos')
  async getDepartamentos() {
    return this.OmrService.getDepartamentos();
  }

  @Get('puesto-departamento/:_id')
  cross(@Param('_id') _id:string) {
    return this.OmrService.getPuestoByDepartment(_id)
  }

  @Get('join')
  join() {
    return this.OmrService.join()
  }
}
