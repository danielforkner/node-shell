import { readFile } from 'fs';
import done from './done.js';

function cat(file) {
  readFile(file, (err, data) => {
    if (err) throw err;
    done(data);
  });
}

export default cat;
