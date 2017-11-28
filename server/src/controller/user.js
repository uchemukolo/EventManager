import models from '../../models';

const Users = models.Users;

class User {
    signup (req, res) {
        const {email, username, password, confirmPassword} = req.body;
            users.find({
                where:{
                    $or: [
                        { email: email },
                        { username: username },
                    ]
                }
            }).then(foundUser => {
                if (!foundUser) {
                    return users
                    .create({
                        email: email,
                        username: username,
                        password: bcryptjs.hashSync(password, 10)
                    }).then(signup => {
                        res.status(201).json(signup)
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(500).send({
                            message: 'some error occured!'
                        })
                    })
                } else if(foundUser.email) {
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

    signin (req, res) {
        const { username, email, password, } = req.body;
        return users
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
                         message: 'Wrong Signin Credentials!'
                     })
                 } else if(bcryptjs.compareSync(req.body.password, foundUser.password)){
                    
                    if (foundUser) {
                        return res.status(200).json({
                             message: 'Signin Successful!'
                            //  role: foundUser.role,
                            //  Token: token
                         }) 
                         } else {
                        res.status(401).json({
                            ERrOR: 'Incorrect Password'
                            })
                     };
                };
             });
        };
    }         
const userController = new User();

export default userController;