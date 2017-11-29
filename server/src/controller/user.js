import model from '../../models';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';

require('dotenv').config();

const Users = model.Users;
class User {
    signup (req, res) {
        const {email, username, firstName, lastName, password, confirmPassword} = req.body;

            Users.find({
                where:{
                    $or: [
                        { email: email },
                        { username: username },
                    ]
                }
            }).then(foundUser => {
                if (!foundUser) {
                    return Users
                    .create({
                        email: email,
                        username: username,
                        firstName: firstName,
                        lastName: lastName,
                        password: bcrypt.hashSync(password, 10),
                        role: 'Regular'
                    }).then(newUser => {
                        res.status(201).send({
                            message: 'Signup Successful',
                            newUser
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(500).send({
                            message: 'some error occured!'
                        });
                    })
                
                });
                 } 
                // else if (foundUser.email) {
                //     res.status(400).send({
                //         message: 'email already exists'
                //     })
                // } else if (foundUser.username) {
                //     res.status(400).send({
                //         message: 'user name already exists'
                //     })
                // }
            })
    }
    signin (req, res) {
        const { username, email, password, } = req.body;
        // if (!username || typeof username !== 'string') {
        //     res.status(400).send({
        //         message: 'Please enter Your username or email'
        //      });
        //     } else if (!password || typeof password !== 'string') {
        //     res.status(400).send({
        //     message: 'Please enter Your Password'
        //     });
        //     } else {
            return Users
            .findOne({
                 where: {
                    $or: [
                        { username: req.body.username },
                        { email: req.body.username }
                     ]
                 }
             }).then(foundUser => { 
                 if (!foundUser) {
                     res.status(400).send({
                         message: 'Username or Password!'
                     })
                 } else if(bcrypt.compareSync(req.body.password, foundUser.password)){ 
                    const token = jwt.sign({
                        id: founduser.id,
                        username: foundUser.username
                      }, key, {
                        expiresIn: 60 * 60 * 24 // Token expires in 24 hours
                      });  
                    if (foundUser) {
                        return res.status(200).send({
                             message: 'Signin Successful!',
                         }) 
                         } else {
                        res.status(401).send({
                            Error: 'Incorrect Password'
                            })
                     };
                };
             });
        };
    }        
const userController = new User();

export default userController;