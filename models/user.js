const mongoose = require('mongoose');

//유저 스키마 작성
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        tpye: String
    },
    tokenExp: {
        type: Number
    }
})

//스키마를 모델로 감싸기   [모델 > 스키마]  구조
const User = mongoose.model('User',userSchema)

//모델을 다른 파일에서도 쓸 수 있게 export
module.exports = {User}