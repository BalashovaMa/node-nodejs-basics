import fs from 'fs/promises';

const dataToWrite = "I am fresh and young";

const create = async () => {
    const filePath = './src/fs/files/fresh.txt';

    try {
        await fs.access(filePath);
        throw new Error('FS operation failed: File already exists');
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
    }

    await fs.writeFile(filePath, dataToWrite);
    console.log('File created successfully');
};

await create();