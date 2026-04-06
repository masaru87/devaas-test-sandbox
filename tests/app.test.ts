import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app.js';

describe('GET /hello', () => {
  it('returns hello message', async () => {
    const res = await request(createApp()).get('/hello');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello, world.' });
  });
});

describe('GET /health', () => {
  it('returns ok status', async () => {
    const res = await request(createApp()).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
