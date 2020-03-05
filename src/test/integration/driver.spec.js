const request = require('supertest');
const chai = require('chai');
const app = require('../../app');

const expect = chai.expect;
describe('Drivers', () => {
  it('Should fetch all drivers', (done) => {
    request(app)
      .get('/drivers')
      .set('Accept', 'application/json')
      .expect(200, (err, data) => {
        done();
      })
  })
})

// This test was created with data from local DB.
describe('Driver by ID', () => {
  it('Should fetch 1 driver', (done) => {
    request(app)
      .get('/drivers/5e5ff57382dc031b646968b5')
      .set('Accept', 'application/json')
      .expect(200, (err, data) => {
        done();
      })
  })
})

// This test was created with data from local DB.
describe('Driver by ID', () => {
  it('Should fetch driver previous rentals', (done) => {
    request(app)
      .get('/drivers/5e5ff57382dc031b646968b5/vehicles')
      .set('Accept', 'application/json')
      .expect(200, (err, data) => {
        done();
      })
  })
})