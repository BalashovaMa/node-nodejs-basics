import fs from 'fs';

const rename = async () => {
    const currentName = './src/fs/files/wrongFilename.txt';
    const newName = './src/fs/files/properFilename.md';

    if (!fs.existsSync(currentName)) {
        throw new Error('FS operation failed: File does not exist');
    }

    if (fs.existsSync(newName)) {
        throw new Error('FS operation failed: File with the new name already exists');
    }
    try {
        await fs.promises.rename(currentName, newName);
        console.log('File renamed successfully.');
    } catch (error) {
        throw new Error('FS operation failed: File rename error');
    }
};

await rename();