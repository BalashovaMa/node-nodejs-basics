import fs from 'fs';

const sourceDir = './src/fs/files';

const list = async () => {
    if (!fs.existsSync(sourceDir)) {
        throw new Error('FS operation failed: source directory does not exists')
    }

    const files = fs.readdirSync(sourceDir);
    files.forEach(file => console.log(file));
};

await list();