const {FEED} = require('../models/FEED')

const getHomePage = (req,res) =>{
    if(req.method === 'GET'){
        FEED.find()
        .then(result=> res.render('index', {result}))        
    } 

    if (req.method ==='POST'){
        // console.log(req.body)
        const article = new FEED(req.body)
        article.save()
        .then( result => 
            // console.log(result)
            res.redirect('/feed')
            )
        .catch(err => console.log(err))
        // errors.message
    }
}



const showOneArticle = (req,res) =>{
    FEED.findById({_id: req.params.id})
    .then(result => {
        console.log(result)
        res.render('showOne', { result})}
        )
    .catch(err => console.log(err))
     
    } 


const updateOneArticle = (req,res) =>{
    if(req.method === 'GET'){
    FEED.findById({_id: req.params.id})
        .then(result => {
            console.log(result)
            res.render('editArticle', { result})}
            )
        .catch(err => console.log(err))
    } 

    if (req.method ==='POST'){
    FEED.findByIdAndUpdate({_id: req.params.id})
        .then(result => {

            result.name = req.body.name
            result.message = req.body.message
            result.save() 
            .then((result) => 
            res.render('showOne', {result})) 

            .catch(err => console.log(err))
        
            }
            )
        .catch(err => console.log(err))   
    }
}   
    

    const deleteOneArticle =(req,res)  =>{
    FEED.findByIdAndDelete({_id: req.params.id})
        .then(result => res.redirect('/feed')) 
        .catch(err => console.log(err))
            
            }


module.exports = {
getHomePage,
showOneArticle,
updateOneArticle,
deleteOneArticle



}