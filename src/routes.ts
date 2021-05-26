import { Router } from 'express'
import axios from 'axios'

const routes = Router()

routes.get('/vacancy/search', async (req, res) => {
  const result = await axios.get('https://api.rabota.ua/vacancy/search', {
    params: req.query,
  })

  return res.json(result.data)
})

export default routes
