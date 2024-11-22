import { Injectable, Inject } from '@nestjs/common';
import { Departamento } from 'src/core/config/omr/payroll/departamento.entity';
import { puesto_paje } from 'src/core/config/omr/puestos_paje/puesto.entity';
import { Empleado } from 'src/core/config/omr/staff/empleado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OmrService {
  private empleadoRepository: Repository<Empleado>;
  private departamentoRepository: Repository<Departamento>;
  private puestoPajeRepository: Repository<puesto_paje>;

  constructor(
    @Inject('STAFF_DATASOURCE') private staffDataSource,
    @Inject('PAYROLL_DATASOURCE') private payrollDataSource,
    @Inject('PUESTO_PAJE_DATASOURCE') private puestoPajeDataSource,

  ) {
    this.empleadoRepository = this.staffDataSource.getRepository(Empleado);
    this.departamentoRepository = this.payrollDataSource.getRepository(Departamento);
    this.puestoPajeRepository = this.puestoPajeDataSource.getRepository(puesto_paje);

  }

  getAllEmpleados() {
    return this.empleadoRepository.find()
  }

  async join() {
    const empleados = await this.puestoPajeRepository.find();

    const departamentos = await this.departamentoRepository.find();

    return empleados.map((empleado) => {
      const departamento = departamentos.find(
        (dep) => dep._id === empleado.departamento_id
      );
      return {
        ...empleado,
        departamento: departamento,
      };
    });
  }

  // async join() {
  //   // const x = new Empleado()
  //   return PuestoPAJEDataSource
  //     .createQueryBuilder()
  //     .select()
  //     .from(Empleado, "Empleado")
  //     .addFrom(Departamento, "departamento")
  //     .andWhere("empleado.departamento_id = departamento._id")
  //     .getMany()
  // }


  getDepartamentos() {
    return this.departamentoRepository.find()
  }

  getPuestosFromPaje() {
    return this.puestoPajeRepository.find()
  }

  getPuestoByDepartment(_id: string) {
    return this.puestoPajeRepository.find({ where: { departamento_id: _id } })
  }
}
