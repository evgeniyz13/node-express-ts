import { Connection, createConnection, Repository } from 'typeorm'

let connection: Connection | undefined

export async function getRepository<TEntity>(
  model: any
): Promise<Repository<TEntity>> {
  return connection.getRepository<TEntity>(model)
}

export async function getConnection(): Promise<Connection> {
  if (!connection) {
    connection = await createConnection()
  }

  return connection
}
