
const express = require('express')
const app = express()
const port = 3000

const names = [
  {id:1,  name: "test1"}, 
  {id:2,  name: "test2"},
  {id:3,  name: "test3"}
]

app.use(express.json())

app.get('/', (req, res) => {
  res.json(names)
})


app.post('/data', (req, res) => {
  const data = req.body
  names.push(data)
  console.log(data)
  res.json({message:'data received', data});
})

app.delete('/delete', (req, res) => {
  names.pop()
  res.json(names)
})

app.delete('/data/:id', (req, res) => {
  const id = parseInt(req.params.id)
  data = names.filter(item => item.id !== id );
  res.json({mensaje:'Data received', data})
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/name', (req, res) => {
  res.send('Arch')
})

