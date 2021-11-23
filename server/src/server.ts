import fastify, { FastifyInstance } from 'fastify';
import cors from 'fastify-cors';
// import helmet from 'fastify-helmet';

import config from './config';
import uploadFile from './routes/uploadFile';
import sendFile from './routes/sendFile';

export const configureServer = (): FastifyInstance => {
  const server = fastify({ logger: config.logger, genReqId: config.genReqId });

  server.register(cors as any);
  // server.register(helmet);

  server.register(uploadFile, { prefix: '/v1' });
  server.register(sendFile, { prefix: '/v1' });

  return server;
};
