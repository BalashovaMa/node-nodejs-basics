import fs from 'fs';

const write = async () => {
    const filePath = './src/streams/files/fileToWrite.txt';

    const writeStream = fs.createWriteStream(filePath);

    process.stdin.pipe(writeStream);

    process.stdin.on('end', () => {
        writeStream.end();
    });

    await new Promise((resolve, reject) => {
        writeStream.on('finish', () => {
            resolve();
        });

        writeStream.on('error', (error) => {
            reject(error);
        });
    });


};

await write();