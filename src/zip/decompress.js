import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    const sourceFilePath = './src/zip/files/archive.gz';
    const targetFilePath = './src/zip/files/fileToCompress.txt';

    const readStream = fs.createReadStream(sourceFilePath);
    const writeStream = fs.createWriteStream(targetFilePath);

    const gunzipStream = zlib.createGunzip();

    readStream.pipe(gunzipStream).pipe(writeStream);

    writeStream.on('finish', () => console.log('File has been decompressed'));

    writeStream.on('error', (error) => console.error('Error decompressing file: ', error));
};

await decompress();