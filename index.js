const express = require('express')
const app = express()
const port = 5000

//몽고DB를 편하게 사용하기
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://root:root@react-project.5cjmt.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then( () => console.log('mongoDB connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})