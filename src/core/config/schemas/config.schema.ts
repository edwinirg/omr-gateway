import * as Joi from 'joi';

export const validationSchema = Joi.object({
  //APP CONFIG
  PORT: Joi.number().required(),
  //MICROSERVICES
  STAFF_SERVICE_HOST: Joi.string().required(),
  STAFF_SERVICE_PORT: Joi.number().port().required(),
  PAYROLL_SERVICE_HOST: Joi.string().required(),
  PAYROLL_SERVICE_PORT: Joi.number().port().required()
});