process.stdout.write('prompt $ ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  switch (cmd) {
    case 'pwd':
      process.stdout.write(process.cwd());
      process.stdout.write('\nprompt $ ');
      break;
    default:
      process.stdout.write('You typed: ' + cmd);
      process.stdout.write('\nprompt $ ');
  }
});
