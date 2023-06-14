import fs from 'fs';

const remove = async () => {
    const fileName = './src/fs/files/fileToRemove.txt';

    if (!fs.existsSync(fileName)) {
        throw new Error('FS operation failed: File does not exist');
    }

    try {
        await fs.unlinkSync(fileName)
        console.log('File deleted successfully.');
    } catch (error) {
        throw new Error('FS operation failed: File delete error');
    }
};

await remove();