const {Router} = require('express')
const router = new Router()
const postController = require('./postController.js')
const path = require('path')
router.post('/posts',postController.create)
router.get('/posts',postController.getAll)
router.get('/posts/:id',postController.getOne)
router.put('/posts',postController.update)
router.delete('/posts/:id',postController.delete)

module.exports = router