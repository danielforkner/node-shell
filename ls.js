import { readdir } from 'fs';
import done from './done.js';

function ls() {
  readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      done(files.join('\n'));
    }
  });
}

export default ls;
