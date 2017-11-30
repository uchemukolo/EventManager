import jwt from 'jsonwebtoken';

require('dotenv').config();

const key = process.env.SECRET_KEY;

const authenticate = {
  Verify: (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers.token;
    if (!token) {
      return res.status(401).send({
        message: 'Unauthorised User!'
      });
    }

    jwt.verify(token, key, (err, decoded) => {
      if (err) {
        return res.status(403).send({
          error: 'Token could not be authenticated'
        });
      }
      req.decoded = decoded;
      next();
    });
  },
  Admin: (req, res, next) => {
    if (req.decoded && req.decoded.role === 'Admin') {
      return next();
    }
    return res.status(401).send({
      message: 'Your not Authorized to access this page!'
    });
  }
};

export default authenticate;
