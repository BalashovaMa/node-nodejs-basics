import fs from 'fs';
import path from 'path';

const copy = async (sourceDir, targetDir) => {
    try {
        if (!fs.existsSync(sourceDir)) {
            throw new Error('FS operation failed: source directory does not exist.')
        }
        if (fs.existsSync(targetDir)) {
            throw new Error('FS operation failed: target directory already exists.')
        }
        await fs.promises.mkdir(targetDir);

        const files = await fs.promises.readdir(sourceDir);

        for (const file of files) {
            const sourcePath = path.join(sourceDir, file);
            const targetPath = path.join(targetDir, file);

            await fs.promises.copyFile(sourcePath, targetPath);
        }

    } catch (error) {
        console.error(error.message);
    }
};

await copy('./src/fs/files', './src/fs/files_copy');
