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
      global.events.push(req.body);

      return res.status(201).send({
        message: 'Successful',
        event: global.events,
        error: false

      });
    }
  }
  editEvent(req, res) {
    let pos = global.events.findIndex(x => x.id === parseInt(req.params.id, 10)); {
      global.events[pos].location = req.body.location;
      global.events[pos].eventDate = req.body.eventDate;
      return res.status(201).send({
        message: 'Update Successful',
        event: global.events,
        error: false
      });
    }
    return res.status(404).send({
      message: 'Not Found',
      event: global.events,
      error: true
    });
  }
  deleteEvent(req, res) {
    let pos = global.events.findIndex(x => console.log(x)); {
      global.events.splice(pos, 1);
      return res.status(201).send({
        message: 'Event Deleted',
        event: global.events,
        error: false
      });
    }
    return res.status(404).send({
      message: 'Not Found',
      event: global.events,
      error: true
    });
  }
}

const eventController = new Event();

export default eventController;
