const express = require('express')
const app = express()
const port = 3002

app.use((req, res, next) => {
  res.set('access-control-allow-origin', 'http://10.0.40.215:8083')
  res.set('access-control-allow-headers', 'x-session-id,expires,origin,user-info,no-cache,remember-me,x-e4m-with,pragma,accept,token,authorization,if-modified-since,last-modified,x-requested-with,content-type,cache-control')
  res.set('access-control-allow-methods', 'POST,GET,OPTIONS,PUT,DELETE,PATCH,HEAD')
  res.set('access-control-allow-credentials', true)
  res.set('access-control-expose-headers', '*')
  res.set('access-control-max-age', '18000L')
  next()
})

app.post('/api/home', (req, res) => {
  res.send({ message: 'This is an home page' })
})

app.post('/api/about', (req, res) => {
  res.send({ message: 'This is an about page' })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
