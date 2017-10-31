/* 以下示例请分别执行 */

/* normal use */
const files = require('files-io');
var path = require('path');

files.read([path.join(__dirname, '../..', 'README.md'), path.join(__dirname, '../..', 'package.json')], 'utf8', (error, allData) => {
    console.log(error, allData);
});


/* Easy way to create pipe which would handle all error events and redirect them to callback. */
const NameFrom = path.join(__dirname, '../..', 'README.md');
const NameTo = path.join(__dirname, '../..', 'README_COPY.gz');
    
const options = {
    gzip: true
};

files.pipe(NameFrom, NameTo, options, (error) => {
    console.log(error || 'done');
});

/* join couple files and save them to new file with streams */
const fs = require('fs');
const NAME = path.join(__dirname, '../..', 'Join');
const writeStream = fs.createWriteStream(NAME);

files.readPipe([path.join(__dirname, '../..', 'README.md'), path.join(__dirname, '../..', 'package.json')], writeStream, (error) => {
    if (error)
        console.log(error.message);
});
