import { Server, IncomingMessage, ServerResponse } from 'http';
import {
  FastifyInstance,
  RegisterOptions,
  FastifyRequest,
  FastifyReply,
} from 'fastify';
import { downloadFile } from '../services/downloadFile';

export const uploadFile = async (
  req: FastifyRequest,
  reply: FastifyReply<ServerResponse>
): Promise<void> => {
  try {
    await downloadFile(req.body.url, req.body.session);

    reply.send({ message: true }).status(200);
  } catch (error) {
    if (error instanceof Error) {
      reply.send({ message: error.message }).status(400);
    } else {
      reply.send({ message: 'Ошибка сервера' }).status(500);
    }
  }
};

const registerRoutes = (
  server: FastifyInstance,
  _: RegisterOptions<Server, IncomingMessage, ServerResponse>,
  done: Function
): void => {
  server.post(
    '/upload-file',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            url: { type: 'string' },
            session: { type: 'string' },
          },
        },
      },
    },
    uploadFile
  );

  done();
};

export default registerRoutes;
