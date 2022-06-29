import { User} from "../models/user.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signUp = async function (req, res) {
    const newUser = new User(req.body)
    console.log(req.body)
    newUser.hash_password = bcrypt.hashSync(req.body.password, 10)
    console.log(newUser.hash_password);
    newUser.save((err, user)=>{
        if(err){
            res.status(400)
            return res.json({error: err.message})
        }
        //return res.json(user)
        return res.json({username: user.username, jwt: jwt.sign({username: user.username, email: user.email, _id: user.id},"backend-best-end") })
    })

}

export const signIn = (req,res) => {
    User.findOne({email: req.body.email}, (err, user)=>{
        if(err){
            res.status(400)
            return res.json({error: err.message})
        }
        console.log(user)
        if (!user || !bcrypt.compareSync(req.body.password, user.hash_password) ){
            res.status(400)
            return res.json({message: "Authentication failed"})
        }
        // return res.json(user)
        return res.json({username: user.username, jwt: jwt.sign({username: user.username, email: user.email, _id: user.id},"backend-best-end") })
    })
}

