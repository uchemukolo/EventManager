import chai from 'chai';
import app from './app';
const should = chai.should();

const x = {
    id: 1,
    location: 'Lekki',
    attendees: 200,
    eventType: 'Wedding Reception',
    EventDate: '2/12/2017',
    phoneNumber: 80333222444,
};
describe('Event Manager', () => {
    it('shoud get the home page', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('shoud return 404 for undefined page', (done) => {
        chai.request(app)
            .get('/xoxo')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });
});
describe('Events', () => {

    it('shoud return list of events', (done) => {
        chai.request(app)
            .get('/api/events')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('shoud delete an event', (done) => {
        chai.request(app)
            .delete('/api/events/1')
            .end((err, res) => {
                res.should.have.status(204);
                done();
            });
    });
    it('shoud modify an event', (done) => {
        chai.request(app)
            .put('/api/events/1')
            .end((err, res) => {
                res.should.have.status(204);
                done();
            });
    });
});
