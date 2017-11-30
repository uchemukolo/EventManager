const Validation = {

  signup(req, res, next) {
    const {username, firstName, lastName, email, password, confirmPassword} = req.body;
    if (!username) {
      return res.status(400).send({
        username: 'Please Enter Username'
      });
    } else if (!email) {
      return res.status(400).send({
        email: 'Please Enter Email'
      });
    } else if (!firstName) {
      return res.status(400).send({
        email: 'Please Enter Your First Name'
      });
    } else if (!lastName) {
      return res.status(400).send({
        email: 'Please Enter Your Last Name'
      });
    } else if (!password) {
      return res.status(400).send({
        password: 'Please Enter password'
      });
    } else if (password.length < 6) {
      return res.status(400).send({
        password: 'Password is too short!'
      });
    } else if (password !== confirmPassword) {
      return res.status(400).send({
        password: 'password does not match'
      });
    } next();
  },
  signin(req, res, next) {
    const { username, password } = req.body;
    if (!username) {
      res.status(400).send({
        message: 'Please enter Your username or email'
      });
    } else if (!password) {
      res.status(400).send({
        message: 'Please enter Your Password'
      });
    } next();
  },
  addEvent(req, res, next) {
    const { userId, centerId, eventType, eventDate } = req.body;
    if (!eventType) {
      res.status(400).send({
        message: 'Please Select Type Of Event'
      });
    } else if (!userId) {
      return res.status(400).send({
        message: 'Field Cannot Be Empty!'
      });
    } else if (!centerId) {
      return res.status(400).send({
        message: 'Field Cannot Be Empty!'
      });
    } else if (!eventDate) {
      res.status(400).send({
        message: 'Please Choose a Date'
      });
    } next();
  },
  addCenter(req, res, next) {
    const { userId, centerId, name, description, location, capacity, venueType, } = req.body;
    if (!name) {
      res.status(400).send({
        message: 'Please Add Name Of The Center!'
      });
    } else if (!description) {
      res.status(400).send({
        message: 'Field Cannot Be Empty!'
      });
    } else if (!userId) {
      return res.status(400).send({
        message: 'Field Cannot Be Empty!'
      });
    } else if (!centerId) {
      return res.status(400).send({
        message: 'Field Cannot Be Empty!'
      });
    } else if (!location) {
      res.status(400).send({
        message: 'Please Select location Of Event Center'
      });
    } else if (!capacity) {
      res.status(400).send({
        message: 'Please Select Capacity'
      });
    } else if (!venueType) {
      res.status(400).send({
        message: 'Please Select Venue Type'
      });
    } next();
  }
};
export default Validation;
