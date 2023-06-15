import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const sourceFilePath = './src/zip/files/fileToCompress.txt';
    const targetFilePath = './src/zip/files/archive.gz';

    const readStream = fs.createReadStream(sourceFilePath);
    const writeStream = fs.createWriteStream(targetFilePath);

    const gzipStream = zlib.createGzip();

    readStream.pipe(gzipStream).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File has been compressed.');
    });

    writeStream.on('error', (error) => {
        console.error('Error compressing file:', error);
    });
};

await compress();