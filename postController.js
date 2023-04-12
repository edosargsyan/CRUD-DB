const { findByIdAndUpdate } = require('./model.js')
let Post = require('./model.js')
class postController {
    async create(req,res){
            try{
                const{name, email, password } = req.body
                const post = await Post.create({name,email,password})
                res.send(post)
            }
             catch(e){
               res.status(500).json(e)
             }
        }

     async getAll(req,res){
         try{
             const posts = await Post.find()
             return res.json(posts)                                                                
         }
         catch(e){
            res.status(500).json(e)
         }
     }

     async getOne(req,res){
        try{
           const {id} = req.params
           const post = await Post.findById(id)
           if(!id){
            res.status(400).json({messgae:"Not Found"})
            }
           return res.json(post)
        }
        catch(e){
           res.status(500).json(e)
        }
     }
     async update(req,res){
        try{
           const post = req.body
           if(!post._id){
            res.status(400).json({messgae:"Not Found"})
           }
           const updatedPost = await Post.findByIdAndUpdate(post._id,post,{new:true})
           return res.json(updatedPost)
        }
        catch(e){
           res.status(500).json(e)
        }
     }
     async delete(req,res){
        try{
         const {id} = req.params
         const post = await Post.findByIdAndDelete(id)
         if(!id){
            res.status(400).json({messgae:"Not Found"})
         }
         return res.send('deleted')
        }
        catch(e){
           res.status(500).json(e)
        }
     }
}


module.exports = new postController();