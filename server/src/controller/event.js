global.events = [{
  id: 1,
  location: 'Lekki',
  attendees: 200,
  eventType: 'Wedding Reception',
  EventDate: '2/12/2017',
  phoneNumber: '080333222444'
},
{
  id: 2,
  location: 'Ikeja',
  attendees: 500,
  eventType: 'Corporate Party',
  EventDate: '3/12/2017',
  phoneNumber: '080111666777'

}];

class Event {

  addEvent(req, res) {
    const { location, attendees, eventType, eventDate, phoneNumber } = req.body;

    if (!location) {
      res.status(400).send({
        message: 'Location Cannot Be Empty!'
      });
    } else if (!attendees) {
      res.status(400).send({
        message: 'Field Cannot Be Empty!'
      });
    } else if (!eventType) {
      res.status(400).send({
        message: 'Please Select Type Of Event'
      });
    } else if (!eventDate) {
      res.status(400).send({
        message: 'Please Choose a Date'
      });
    } else if (!phoneNumber) {
      res.status(400).send({
        message: 'Please Add Phone Number'
      });
    } else {
      const events = {
        id: global.events.length + 1,
        location,
        attendees,
        eventType,
        eventDate,
        phoneNumber
      };
      global.events.push(events);


      return res.status(201).send({
        message: 'Successful',
        event: events,

      });
    }
  }
  editEvent(req, res) {
    let pos = global.events.findIndex(x => x.id === parseInt(req.params.id, 10));
    global.events[pos].location = req.body.location || global.events[pos].location;
    global.events[pos].attendees = req.body.attendees || global.events[pos].attendees;
    global.events[pos].eventType = req.body.eventType || global.events[pos].eventType;
    global.events[pos].eventDate = req.body.eventDate || global.events[pos].eventDate;
    global.events[pos].phoneNumber = req.body.phoneNumber || global.events[pos].phoneNumber;
    return res.status(200).send({
      message: 'Update Successful',
      event: global.events[pos],

    });
  }

  deleteEvent(req, res) {
    for (let i = 0; i < global.events.length; i++) {
      console.log(global.events[i]);
      if (global.events[i].id === Number(req.params.id)) {
        global.events.splice(i, 1);
        res.json({
          message: global.events,
        });
      }
    }
  }
}


const eventController = new Event();

export default eventController;
