// const express = require('express');
// const bodyParser = require('body-parser');
const request = require('supertest');
const expect = require('expect');

const { app } = require('../../server/server');
const { User } = require('../models/user');
const { users, populateUsers } = require('./seed/seed');

beforeEach(populateUsers);

describe('initialize app', () => {
	it('should successfully render home page', (done) => {
		request(app).get('/').expect(200).end(done);
	});
});

describe('POST /users', () => {
	it('should create a new user', (done) => {
		request(app).get('/users/sign-up').expect(200).end(done);
	});
});
