const request = require('supertest');
const app = require('../server');

describe('Health Check Endpoint', () => {
  test('GET /health should return application status', async () => {
    const response = await request(app).get('/health');

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('OK');
    expect(response.body.message).toBe('Book Catalogue application is running');
  });
});