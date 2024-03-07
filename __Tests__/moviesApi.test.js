const { response, json } = require('express');
var request = require('supertest');

describe('loading express', function () {
  var server;
  var appServer;

  beforeEach(function () {
    // server = require('../index');
    server = require('../server')();
  });

  afterEach(function () {
    server.close();
    console.log('server closed')
  });

  it('responds to /movies', function testSlash(done) {
  request(server)
    .get('/movies')
    .expect(200, done);
  });

  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });

});