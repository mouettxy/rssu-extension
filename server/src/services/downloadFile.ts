import axios from 'axios';
import { createWriteStream, unlinkSync } from 'fs';
import * as stream from 'stream';
import { promisify } from 'util';
import { getFileLocation } from './getFileLocation';

const finished = promisify(stream.finished);

export async function downloadFile(
  fileUrl: string,
  session: string
): Promise<void> {
  const fileLocation = getFileLocation(fileUrl);
  const writer = createWriteStream(fileLocation);

  return axios({
    method: 'get',
    url: fileUrl,
    responseType: 'stream',
    headers: {
      Cookie: `PHPSESSID=${session};`,
    },
  }).then(async response => {
    if (['application/unknown'].includes(response.headers['content-type'])) {
      response.data.pipe(writer);

      return finished(writer);
    } else {
      writer.destroy();
      unlinkSync(fileLocation);

      throw new Error('Не удалось найти файл');
    }
  });
}
