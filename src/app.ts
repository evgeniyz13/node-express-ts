import express, { Express } from 'express'

import routes from './routes'
import cors from 'cors'

class App {
  public server: Express

  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.static('ui/dist/ui'))
    this.server.use(cors())

    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server
