const supertest = require('supertest');
var express = require('express'),
  app = express();
var News = require('../api/models/news_model');
jest.setTimeout(30000);

it("tests the news new news endpoint and returns as success message", async () => {

  const response = await supertest(app).post('/news').send({
    name: 'Test News',
    content: 'Content of test news',
  });

  expect(response.status).toBe(200);
  expect(response.body.message).toBe('News added');

});

afterEach(async () => {
  await News.deleteOne({
    name: 'Test News'
  })
})