import { Transform } from 'stream';

const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
        const reverseChunk = chunk.toString().split('').reverse().join('');

        callback(null, reverseChunk);
    }
});

const transform = async () => {
    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();