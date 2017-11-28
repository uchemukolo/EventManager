const Validation = {
    centerId(req, res, next){
        const centerId = req.params.centerId;
    
        if (isNaN(recipeId)) {
          return res.status(400).json({
            message: 'Parameter must be a number!'
          });
        }
        next();
      },
    
    userId(req, res, next){
        const userId = req.params.userId;
    
        if (isNaN(userId)) {
          return res.status(400).json({
            message: 'Parameter must be a number!'
          });
        }
        next();
      },
    signup(req, res, next) {
        const { username, email, password, confirmPassword } = req.body;
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
        }  next();
    },
    Signin(req, res, next) {
        const { username, password } = req.body;
        if (!username || typeof username !== 'string') {
        res.status(400).json({
            message: 'Please enter Your username or email'
         });
        } else if (!password || typeof password !== 'string') {
        res.status(400).json({
        message: 'Please enter Your Password'
        });
        } next();
    }
    }; 
    export default Validation;