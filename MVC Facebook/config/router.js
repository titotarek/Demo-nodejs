const express =require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.all('/feed', controller.getHomePage)
// router.get('/', controller.getHomePage)


router.get('/feed/:id', controller.showOneArticle)

router.all('/edit-article/:id', controller.updateOneArticle)

router.get('/delete-article/:id', controller.deleteOneArticle)


module.exports = router