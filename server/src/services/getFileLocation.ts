import crypto from 'crypto';
import path from 'path';

export function getFileLocation(fileUrl: string): string {
  const fileUrlHash = crypto
    .createHash('md5')
    .update(fileUrl)
    .digest('hex');

  return path.join(process.cwd(), 'public', `${fileUrlHash}.docx`);
}
