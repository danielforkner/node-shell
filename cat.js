const fs = require('fs');

function cat(file) {
  fs.readFile(file, (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
    process.stdout.write('\nprompt $ ');
  });
}

module.exports = cat;
