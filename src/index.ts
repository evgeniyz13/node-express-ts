import 'reflect-metadata'
import { getConnection } from './dbConnection'

import app from './app'

getConnection()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `App has been started on localhost:${process.env.PORT || 5000}`
      )
    })
  })
  .catch((error) => console.log(error))
