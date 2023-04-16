const { findByIdAndUpdate } = require('./model.js')
let Post = require('./model.js')
let postServices = require('./postServices.js')
class postController {
    async create(req,res){
            try{
                const post = await postServices.create(req.body)
                res.send(post)
            }
             catch(e){
               res.status(500).json(e)
             }
        }

     async getAll(req,res){
         try{
             const posts = await postServices.getAll()
             return res.json(posts)                                                                
         }
         catch(e){
            res.status(500).json(e)
         }
     }

     async getOne(req,res){
        try{
           const post = await postServices.getOne(req.params.id)
           return res.json(post)
        }
        catch(e){
           res.status(500).json(e)
        }
     }
     async update(req,res){
        try{
           const updatedPost = await postServices.update(req.body)
           return res.json(updatedPost)
        }
        catch(e){
           res.status(500).json(e)
        }
     }
     async delete(req,res){
        try{
         const post = await postServices.delete()
         return res.send(post)
        }
        catch(e){
           res.status(500).json(e)
        }
     }
}


module.exports = new postController();