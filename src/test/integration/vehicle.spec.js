const request = require('supertest');
const chai = require('chai');
const app = require('../../app');

const expect = chai.expect;

describe('Drivers', () => {
  it('Should fetch all drivers', (done) => {
    request(app)
      .get('/vehicles')
      .set('Accept', 'application/json')
      .expect(200, (err, data) => {
        done();
      })
  })
})
