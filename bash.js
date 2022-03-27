import pwd from './pwd.js';
import ls from './ls.js';
import cat from './cat.js';
import curl from './curl.js';

process.stdout.write('prompt $ ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ')[0];
  const arg = data.toString().trim().split(' ')[1];
  switch (cmd) {
    case 'pwd':
      pwd();
      break;
    case 'ls':
      ls();
      break;
    case 'cat':
      if (!arg) {
        process.stdout.write('You must specify a file path');
        process.stdout.write('\nprompt $ ');
        break;
      }
      cat(arg);
      break;
    case 'curl':
      if (!arg) {
        process.stdout.write('You must specify a valid url');
        process.stdout.write('\nprompt $ ');
        break;
      }
      curl(arg);
      break;
    default:
      process.stdout.write('You typed: ' + cmd);
      process.stdout.write('\nprompt $ ');
  }
});
