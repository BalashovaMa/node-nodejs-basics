import fs from 'fs';

const read = async () => {
    const readStream = fs.createReadStream('./src/streams/files/fileToRead.txt');

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk)
    });

    readStream.on('end', () => console.log('\nFile reading completed'));

    readStream.on('error', (error) => console.error('Error reading file:', error));
};

await read();