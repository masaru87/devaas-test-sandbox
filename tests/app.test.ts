import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app.js';

describe('GET /hello', () => {
  it('returns greeting with default name', async () => {
    const res = await request(createApp()).get('/hello');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'こんにちは、世界!' });
  });

  it('returns greeting with specified name', async () => {
    const res = await request(createApp()).get('/hello').query({ name: '太郎' });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'こんにちは、太郎!' });
  });
});

describe('GET /health', () => {
  it('returns ok status', async () => {
    const res = await request(createApp()).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
