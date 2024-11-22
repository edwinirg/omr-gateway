import * as Joi from 'joi';

export const validationSchema = Joi.object({

  STAFF_DB_HOST: Joi.string().hostname().required(),
  STAFF_DB_PORT: Joi.number().port().required().default(5432),
  STAFF_DB_USER: Joi.string().required(),
  STAFF_DB_PASS: Joi.string().required(),
  STAFF_DB_NAME: Joi.string().required(),

  PAYROLL_DB_HOST: Joi.string().hostname().required(),
  PAYROLL_DB_PORT: Joi.number().port().required(),
  PAYROLL_DB_USER: Joi.string().required(),
  PAYROLL_DB_PASS: Joi.string().required(),
  PAYROLL_DB_NAME: Joi.string().required(),

});
