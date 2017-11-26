import { expect } from 'chai';
import supertest from 'supertest';
import app from '../src/app';

const request = supertest(app);
const rootURL = '/api';
const centerUrl = `${rootURL}/v1/centers`;
const centerDetailUrl = `${rootURL}/v1/centers/1`;
const editCenterUrl = `${rootURL}/v1/centers/1`;
const addCenterUrl = `${rootURL}/v1/centers`;
const addEventUrl = `${rootURL}/v1/events`;
const editEventUrl = `${rootURL}/v1/events/1`;


describe('API Integration Tests', () => {
  describe('Get All Centers', () => {
    it('return 200 for successful', (done) => {
      request.get(centerUrl)
                .send()
                .end((err, res) => {
                  expect(res.status).to.equal(200);
                  done();
                });
    });
    describe('Get Center Details', () => {
      it('return 200 for successful', (done) => {
        request.get(centerDetailUrl)
                    .send()
                    .end((err, res) => {
                      expect(res.status).to.equal(200);
                      done();
                    });
      });
    });
    describe('Modify Center Details', () => {
      it('return 200 for Update successful', (done) => {
        request.put(editCenterUrl)
                      .send({
                        facilities: 'Air Conditioning',
                        description: 'Suitable for a Wedding Reception',
                      })
                      .end((err, res) => {
                        expect(res.status).to.equal(200);
                        done();
                      });
      });
    });
    describe('Add a New Center', () => {
      it('return 201 for successful', (done) => {
        request.post(addCenterUrl)
                        .send({
                          centerId: 1,
                          name: 'Diamonds Event Center',
                          description: 'Book reception halls, venues for your wedding reception parties e.t.c. Book Marquee, conference centers, party halls, meeting rooms, convention centers and various types of event centers.',
                          location: 'Victoria Island',
                          capacity: 400,
                          venueType: 'Hall',
                          facilities: 'Power supply, Air Conditioning, parking'
                        })
                        .end((err, res) => {
                          expect(res.status).to.equal(201);
                          done();
                        });
      });
    });
    describe('Modify Event Details', () => {
      it('return 200 for Update successful', (done) => {
        request.put(editEventUrl)
                        .send({
                          location: 'Lekki',
                          eventType: 'Wedding Reception',
                        })
                        .end((err, res) => {
                          expect(res.status).to.equal(200);
                          done();
                        });
      });
    });
    describe('Add a New Event', () => {
      it('return 201 for successful', (done) => {
        request.post(addEventUrl)
                          .send({
                            id: 1,
                            location: 'Lekki',
                            attendees: 200,
                            eventType: 'Wedding Reception',
                            eventDate: '2/12/2017',
                            phoneNumber: '080333222444'
                          })
                          .end((err, res) => {
                            expect(res.status).to.equal(201);
                            done();
                          });
      });
    });
  });
});
