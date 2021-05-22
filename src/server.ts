import app from './app'

app.listen(process.env.PORT || 5000, () => {
  console.log(`App has been started on localhost:${process.env.PORT || 5000}`)
})
