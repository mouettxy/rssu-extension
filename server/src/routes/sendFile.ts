import { Server, IncomingMessage, ServerResponse } from 'http';
import {
  FastifyInstance,
  RegisterOptions,
  FastifyRequest,
  FastifyReply,
} from 'fastify';
import { createReadStream } from 'fs';
import { getFileLocation } from '../services/getFileLocation';

export const getFile = async (
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
): Promise<void> => {
  res.header('Access-Control-Allow-Origin', 'sdo.rgsu.net');
  res.header('Access-Control-Allow-Methods', 'GET');

  const stream = createReadStream(getFileLocation(req.query.url));

  res
    .type(
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    )
    .send(stream);
};

const registerRoutes = (
  server: FastifyInstance,
  _: RegisterOptions<Server, IncomingMessage, ServerResponse>,
  done: Function
): void => {
  server.get(
    '/file',
    {
      schema: {
        querystring: {
          url: { type: 'string' },
          session: { type: 'string' },
        },
      },
    },
    getFile
  );

  done();
};

export default registerRoutes;
