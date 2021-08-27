// const mongoose = require('mongoose')



// mongoose.connect(db,  { useUnifiedTopology: true ,useNewUrlParser: true })
// 	.then(()=> console.log("connected to online DB ..."))
// 	.catch(err=>console.log(err))

const mongoose = require('mongoose')

const db = 'mongodb+srv://tarek:12345@tarek.etrlz.mongodb.net/facebook?retryWrites=true&w=majority'

mongoose.connect(db,  { useUnifiedTopology: true ,useNewUrlParser: true })
	.then(()=> console.log("connected to online DB ..."))
	.catch(err=>console.log(err))
