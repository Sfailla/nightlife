const request = require('supertest')
const expect = require('expect');

const { app } = require('../../server/server');

describe('initialize app', () => {
    it('should successfully render hello world', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('homepage')
            .end(done);
    });
});

