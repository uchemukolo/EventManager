import model from '../../models';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';

require('dotenv').config();

const Users = model.Users;
class User {
    signup(req, res){
        const {email, username, firstName, lastName, password, confirmPassword} = req.body;
        Users.find({
            where:{
                $or: [
                    { email: email },
                    { username: username }
                  ]
                }
              })
              .then(foundUser => {
                if (!foundUser) {
                  return Users.create({
                    email: email,
                    username: username,
                    firstName: firstName,
                    lastName: lastName,
                    password: bcrypt.hashSync(password, 10),
                    role: 'Regular'
                  })
                  .then(newUser => {
                    res.status(201).send({
                       message: 'Signup Successful',
                       email: email,
                       username: username,
                       firstName: firstName,
                       lastName: lastName
                      })
                    })
                    .catch(err => {
                      res.status(500).send({
                        message: 'some error occured!'
                      });
                    });
                  }
                })
                .catch(err => {
                  res.status(500).send({
                    message: 'some error occured!'
                  });
                });
              }

      signin (req, res) {
        const { username, email, password, } = req.body;
        Users.findOne({
          where: {
            $or: [
              { username: req.body.username },
              { email: req.body.username }
            ]
          }
        })
        .then(foundUser => {
          if (!foundUser) {
            res.status(400).send({
              message: 'Incorrect Signin Credentials!'
            })
          } else if(bcrypt.compareSync(req.body.password, foundUser.password)){
            const token = jwt.sign({user: foundUser}, process.env.SECRET_KEY, {
              expiresIn: 60 * 60 * 24
            });
            console.log(foundUser.role)
            if (foundUser.role === 'Admin') {
              return res.status(200).send({
                message: 'Welcome Admin',
                role: foundUser.role,
                Token: token
              })  
            }else{
              return res.status(200).send({
                message: 'Signin Successful!',
                Token: token
                
              })
            }
          }else {
            res.status(401).send({
              Error: 'Incorrect Password'
            })
          };
        });
      };
    }
const userController = new User();
export default userController;