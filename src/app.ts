import express, { Express } from 'express';

export function createApp(): Express {
  const app = express();
  app.use(express.json());

  app.get('/hello', (req, res) => {
    const name = (req.query.name as string) || '世界';
    res.json({ message: `こんにちは、${name}!` });
  });

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  return app;
}
