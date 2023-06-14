import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
    const fileData = fs.readFileSync('./src/hash/files/fileToCalculateHashFor.txt');
    const hash = crypto.createHash('SHA256').update(fileData).digest('hex');
    console.log(hash);
};


await calculateHash();