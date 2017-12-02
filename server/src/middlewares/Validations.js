const Validation = {

  signup(req, res, next) {
    const {username, firstName, lastName, email, password, confirmPassword} = req.body;
    if (!username || typeof username !== 'string') {
      return res.status(400).send({
        username: 'Please Enter Username'
      });
    } else if (!email || typeof email !== 'string') {
      return res.status(400).send({
        email: 'Please Enter Email'
      });
    } else if (!firstName || typeof firstName !== 'string') {
      return res.status(400).send({
        email: 'Please Enter Your First Name'
      });
    } else if (!lastName || typeof lastName !== 'string') {
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
    if (!username || typeof username !== 'string') {
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
    console.log(centerId);
    if (!eventType || typeof eventType !== 'string') {
      res.status(400).send({
        message: 'Please Select Type Of Event'
      });
    } else if (!userId) {
      return res.status(400).send({
        message: 'Please Add your User ID!'
      });
    } else if (!centerId || isNaN(centerId)) {
      return res.status(400).send({
        message: 'Please Add your Center ID!'
      });
    } else if (!eventDate) {
      res.status(400).send({
        message: 'Please Choose a Date'
      });
    } next();
  },
  addCenter(req, res, next) {
    const { userId, centerId, name, description, location, capacity, venueType, } = req.body;
    if (!name || typeof name !== 'string') {
      res.status(400).send({
        message: 'Please Add Name Of The Center!'
      });
    } else if (!description || typeof description !== 'string') {
      res.status(400).send({
        message: 'Please Add Description!'
      });
    } else if (!userId) {
      return res.status(400).send({
        message: 'Field Cannot Be Empty!'
      });
    } else if (!location || typeof location !== 'string') {
      res.status(400).send({
        message: 'Please Select location Of Event Center'
      });
    } else if (!capacity) {
      res.status(400).send({
        message: 'Please add Capacity'
      });
    } else if (!venueType || typeof venueType !== 'string') {
      res.status(400).send({
        message: 'Please Select Venue Type'
      });
    } next();
  }
};
export default Validation;
