const fs = require('fs');
module.exports.name = "tochi"

module.exports.greet = ( name ) => {
    console.log(`hello to you ${name} hope you are doing well`);
};

module.exports.displayFileContents = ( filePath ) => {
    fs.readFile( filePath, 'utf8', (err,data) => {
        console.log(data);
    });
};