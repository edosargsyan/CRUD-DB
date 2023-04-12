const {Router} = require('express')
const router = new Router()
const Post = require('./model.js')
const postController = require('./postController.js')
router.post('/posts',postController.create)
router.get('/posts',postController.getAll)
router.get('/posts/:id',postController.getOne)
router.put('/posts',postController.update)
router.delete('/posts/:id',postController.delete)

module.exports = router