import express from 'express';
import rendererMiddleware from './server/middlewares/renderer';
import appController from './server/controllers/app';
import cardsController from './api/controllers/cards';
import cardController from './api/controllers/card';

const server = express();
const port = process.env.port || 8080;

server.use(rendererMiddleware);

server.use('/static', express.static('./static'));

server.use('/api/cards', cardsController);
server.use('/api/card/:id', cardController);

server.use('/', appController.fetch, appController.render);

server.listen(port, () => {
  // tslint:disable-next-line: no-console
  console.log(`Server running on port ${port}`);
});
