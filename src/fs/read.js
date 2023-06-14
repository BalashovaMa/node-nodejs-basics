import fs from 'fs';

const filePath = './src/fs/files/fileToRead.txt';

const read = async () => {
    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed: source file does not exists');
    }
    const content = fs.readFileSync(filePath, "utf-8");
    console.log(content);
};

await read();