const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    name:({
        type:String
    }),
    email:({
        type:String
    }),
    password:({
        type:String
    })
})

const MyModel = mongoose.model('register', schema);
module.exports = MyModel;
