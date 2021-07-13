const express = require('express')
const app = express()
const port = 3030

app.get('/', (req, res) => {
  res.send('Olá do Express via GET!!')
})
app.post('/', (req, res) => {
  res.send('Olá do Express via POST!!')
})
app.put('/put', (req, res) => {
  res.send('Olá do Express via PUT!!')
})
app.delete('/', (req, res) => {
  res.send('Olá do Express via DELETE!!')
})

app.listen(port, () => {
  console.log(`rodando o app em http://localhost:${port}`)
})