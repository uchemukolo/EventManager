import model from '../../models';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';
import Auth from '../middlewares/authenticate'


const events = model.Events

class Event {
  
  addEvent (req, res) {
    const { userId, centerId, eventType, eventDate } = req.body;
    console.log('helllloooo ' + req.headers.token)
    const decoded = jwt.decode(req.headers.token);
    console.log('helllloooo ' + decoded.user)
      events.findOne({
        where: {
        centerId: req.params.id,
        eventDate
      }
    }).then((event) => {
      if (event){
        return res.status(401).send({
          message:'Date Unavailable! Please Pick Another Day'
        })
      }
      return events
      .create ({
        userId: decoded.user.id,
        centerId: req.body.centerId,      
        eventType,
        eventDate
      })
      .then(created =>{
        return res.status(201).send({
          message: 'Event Added Successfully',
          centerId: req.body.centerId,      
          eventType: eventType
        });
      })
      .catch(err => res.send(err))
    })
    .catch(err => res.status(500).send(err)) 

    } 

  
    editEvent(req, res) {
    const { eventType, eventDate } = req.body;
    const update = (req, res) => {
    events.findOne({
      where: {
        userId: decoded.user.id,
      }
    })
      .then(events => {
      if (!events) {
        return res.status(404).send({
          message: 'Event Not Found',
        });
      } else {
        return events
        .update({ 
        eventType: req.body.eventType || events.eventType,
        description: req.body.eventDate || events.eventDate
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
}

//   deleteEvent(req, res) {
//     const destroy = (req, res) => {
//       events.findOne (req.decoded.id)
//       .then(events => {
//         console.log(events);
//       if (!events) {
//         return res.status(400).send({
//           message: 'Event Not Found',
//         });
//       } else {
//       return events
//         .destroy()
//         .then(() => res.status(204).send({
//             message: 'Event has been deleted'
//         }))
//         .catch(error => res.status(400).send(error));
//       }
//     })
//     .catch(error => res.status(400).send(error));
//   }
// }
}
const eventController = new Event();
export default eventController;
