import express from 'express';
import redis from 'redis';

const client = redis.createClient({
  host: 'rediscandoprasuamae',
});

const app = express();

const port = 3000;

app.listen(port, '0.0.0.0', err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Rodando na porta ${port}`);
});

import * as HomeController from './controllers/Home';
import NativeDevice from './controllers/NativeDevice';

const nativeController = new NativeDevice();

app.get('/', HomeController.index);
app.get('/memoryItem', nativeController.getMemoryItem);
app.post('/memoryItem', nativeController.setMemoryItem);
app.get('/featureToggle', nativeController.getFeatureToggle);
app.get('/routerRequest', nativeController.routerRequest);

export default app;
