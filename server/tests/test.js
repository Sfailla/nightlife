const request = require('supertest')
const expect = require('expect');

const { app } = require('../../server/server');

describe('initialize app', () => {
    it('should successfully render hello world', (done) => {
        request(app)
            .get('/home')
            .expect('hello world')
            .expect(200)
            .end(done);
    });
});

