import model from '../../models';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';

const events = model.Events

class Event {
  addEvent (req, res) {
    const { userId, eventType, eventDate } = req.body;
    //   events.findAll({
    //     where: {
    //     centerId: req.params.id,
    //     date: id
    //   }
    // });
      events
    .create ({
      userId: req.params.id,
      eventType,
      eventDate
    })
    .then(created =>{
      return res.status(201).send({
        message: 'Event Added Successfully',
        created
      })
    })
    .catch((err) => {
        console.log(err);
        return res.status(500).send({
           message: 'Some error occured!'
          });
        });
    }
  

  editEvent(req, res) {
    const { eventType, eventDate } = req.body;
    const update = (req, res) => {
    events.findOne({
      where: {
        userId: req.params.id,
        id: id
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

  deleteEvent(req, res) {
    const destroy = (req, res) => {
      events.findOne (req.params.id)
      .then(events => {
        console.log(events);
      if (!events) {
        return res.status(400).send({
          message: 'Event Not Found',
        });
      } else {
      return events
        .destroy()
        .then(() => res.status(204).send({
            message: 'Event has been deleted'
        }))
        .catch(error => res.status(400).send(error));
      }
    })
    .catch(error => res.status(400).send(error));
  }
}
}
const eventController = new Event();
export default eventController;
