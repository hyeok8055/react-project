const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

const config = require('./config/key');

//application/ x-www-form-urlencoded 의 형식을 분석해서 가져옴
app.use(bodyParser.urlencoded({extended: true}));
//json 타입을 분석해서 가져옴
app.use(bodyParser.json());



//몽고DB를 mongoose를 통해 편하게 사용하기
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then( () => console.log('mongoDB connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! asfasdfasfaf')
})


app.post('/register',(req,res) =>{
    //회원 가입할때 필요한 정보들을 client에서 가져오면 
    //그것들을 데이터베이스에 넣어준다

    const user = new User(req.body)
    //몽고DB에서 오는 메소드
    user.save((err,doc) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})