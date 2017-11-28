import model from '../../models';
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';


const Users = model.Users;
class User {
    signup (req, res) {
        const {email, username, firstName, lastName, password, confirmPassword} = req.body;
        if (!username || typeof username !== 'string') {
            return res.status(400).json({
              username: 'Please Enter Username'
            });
          } else if (!email || typeof email !== 'string') {
            return res.status(400).json({
              email: 'Please Enter Email'
            });
          } else if (!password || typeof  password !== 'string') {
            return res.status(400).json({
              password: 'Please Enter password'
            });
          } else if (password.length < 6) {
            return res.status(400).json({
              password: 'Password is too short!'
            });
          } else if(password !== confirmPassword) {
            return res.status(400).json({
              password: 'password does not match'
              });
          } else {
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
                        password: bcryptjs.hashSync(password, 10),
                        role: 'Regular'
                    }).then(signup => {
                        res.status(201).json({
                            message: 'Signup Successful',
                            signup
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(500).send({
                            message: 'some error occured!'
                        });
                    })
                
                });
                } else if (foundUser.email) {
                    res.status(400).json({
                        message: 'email already exists'
                    })
                } else if (foundUser.username) {
                    res.status(400).json({
                        message: 'user name already exists'
                    })
                }
            }) 
        }
    }
    signin (req, res) {
        const { username, email, password, } = req.body;
        if (!username || typeof username !== 'string') {
            res.status(400).json({
                message: 'Please enter Your username or email'
             });
            } else if (!password || typeof password !== 'string') {
            res.status(400).json({
            message: 'Please enter Your Password'
            });
            } else {
            return Users
            .findOne({
                 where: {
                    $or: [
                        { username: req.body.username },
                        { email: req.body.username }
                     ]
                 }
             }).then(foundUser => {
                 //console.log(found) 
                 if (!foundUser) {
                     res.status(400).json({
                         message: 'Username or Password!'
                     })
                 } else if(bcryptjs.compareSync(req.body.password, foundUser.password)){   
                    if (foundUser) {
                        return res.status(200).json({
                             message: 'Signin Successful!',
                         }) 
                         } else {
                        res.status(401).json({
                            Error: 'Incorrect Password'
                            })
                     };
                };
             });
        };
    }
    }         
const userController = new User();

export default userController;