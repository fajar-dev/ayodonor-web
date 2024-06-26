/*
|--------------------------------------------------------------------------
| Environment variables service
|--------------------------------------------------------------------------
|
| The `Env.create` method creates an instance of the Env service. The
| service validates the environment variables and also cast values
| to JavaScript data types.
|
*/

import { Env } from '@adonisjs/core/env'

export default await Env.create(new URL('../', import.meta.url), {
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  HOST: Env.schema.string({ format: 'host' }),
  LOG_LEVEL: Env.schema.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']),

  /*
  |----------------------------------------------------------
  | Variables for configuring database connection
  |----------------------------------------------------------
  */
  DB_HOST_MASTER: Env.schema.string({ format: 'host' }),
  DB_PORT_MASTER: Env.schema.number(),
  DB_USER_MASTER: Env.schema.string(),
  DB_PASSWORD_MASTER: Env.schema.string.optional(),
  DB_DATABASE_MASTER: Env.schema.string(),

  DB_HOST_SLAVE: Env.schema.string({ format: 'host' }),
  DB_PORT_SLAVE: Env.schema.number(),
  DB_USER_SLAVE: Env.schema.string(),
  DB_PASSWORD_SLAVE: Env.schema.string.optional(),
  DB_DATABASE_SLAVE: Env.schema.string(),

  DB_HOST_LOG: Env.schema.string({ format: 'host' }),
  DB_PORT_LOG: Env.schema.number(),
  DB_USER_LOG: Env.schema.string(),
  DB_PASSWORD_LOG: Env.schema.string.optional(),
  DB_DATABASE_LOG: Env.schema.string(),
})
