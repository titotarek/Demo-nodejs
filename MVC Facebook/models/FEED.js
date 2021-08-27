const mongoose = require('mongoose')

const Schema = mongoose.Schema

const articleSchema = new Schema ({

    name : {
        type:String,
        require:true,
        maxLength: 15

    },
    message : {
        type:String,
        require:true,
        maxLength: 40
    }

} , {timestamps:true})

const FEED =mongoose.model('Article', articleSchema)
module.exports = {
    FEED
}