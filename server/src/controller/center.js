import model from '../../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';
import Auth from '../middlewares/authenticate';


const center = model.Centers;

class Center {

  add(req, res) {
    const {name, description, decoded, location, capacity, userId, venueType, facilities} = req.body;
    const Decoded = jwt.decode(req.headers.token);
    center.create({
      userId: req.decoded.id,
      name,
      description,
      location,
      capacity,
      venueType,
      facilities
    })
      .then(created => res.status(201).send({
        message: 'Center Added Successfully',
        created
      }))
      .catch(err => res.status(500).send({
        message: 'Some error occured!'
      }));
  }

  update(req, res) {
    const {userId, name, description, location, capacity, venueType, facilities} = req.body;
    const Decoded = jwt.decode(req.headers.token);
    center.findOne({
      where: {
        userId: req.decoded.id,
      }
    })
      .then(center => {
        if (!center) {
          return res.status(404).send({
            message: 'Center Not Found',
          });
        }
        return center
          .update({
            userId: req.body.userId || center.userId,
            name: req.body.name || center.name,
            description: req.body.description || center.description,
            location: req.body.location || center.location,
            capacity: req.body.capacity || center.capacity,
            venueType: req.body.venueType || center.venueType,
            facilities: req.body.facilities || center.facilities
          })
          .then(created => res.status(201).send({
            message: 'Update Successful',
            created
          }))
          .catch(err => res.status(500).send({
            message: 'Some error occured!'
          }));
      });
  }

  getAll(req, res) {
    return center
      .all()
      .then((getAll) => {
        res.status(200).send({
          message: 'Successful',
          getAll
        });
      });
  }


 getOne (req, res) {
  return center
    .findById(req.params.id).then(found => {
      if (!found) {
        res.status(404).send({
          message: 'Center not Found!'
        })
      } else {
        res.status(200).send(found)
      }
    })
    .catch(error => res.status(400).send(error))
}
}
const centerController = new Center();

export default centerController;
