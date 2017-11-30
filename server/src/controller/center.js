import model from '../../models';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';

const centers = model.Centers;

class Center {
  addCenter(req, res) {
    const { name, description, location, capacity, userId, venueType, facilities } = req.body;
      centers.create ({
      centerId: req.params.id,
      name,
      description,
      location,
      capacity,
      venueType,
      userId,
      facilities
    })
    .then(created =>{
      return res.status(201).send({
        message: 'Center Added Successfully',
        created
      })
    })
    // .catch((err) => {
    //   return res.status(500).send({
    //     message: 'Some error occured!'
    //   });
    // });
}
  
  editCenter(req, res) {
    const { userId, name, description, location, capacity, venueType, facilities } = req.body;
    centers.findOne({
        where: {
         userId: req.params.id,
        }
      })
      .then(centers => {
        if (!centers) {
          return res.status(404).send({
            message: 'Center Not Found',
          });
        } else {
          return centers
          .update({
            userId: req.body.userId || centers.userId,
            name: req.body.name || centers.name,
            description: req.body.description || centers.description,
            location: req.body.location || centers.location,
            capacity: req.body.capacity || centers.capacity,
            venueType: req.body.venueType || centers.venueType,
            facilities: req.body.facilities || centers.facilities     
        })
        .then(updated => { 
          return res.status(201).send({
          message: 'Update Successful',
          updated
        });
    })
    .catch((error) => {
        res.status(500).send({
          message: 'Some Error Occured'
        });
    })
  }
  })
    }

  getAll(req, res) {
    return centers
    .all()
    .then(getAll => {
    res.status(200).send({
      message: 'Successful',
      getAll
    });
  });
}

  getCenter(req, res) {
    const pos = global.centers.findIndex(x => x.centerId === parseInt(req.params.id, 10));
    return res.status(200).send({ center: global.centers[pos] });
  }

}
const centerController = new Center();

export default centerController;
