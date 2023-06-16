import { Worker } from 'worker_threads';
import os from 'os';

const numCPUs = os.cpus().length;
const workerFile = './src/wt/worker.js';

const performCalculations = async () => {
    const results = [];

    const createWorker = (n) => {
        return new Promise((resolve) => {
            const worker = new Worker(workerFile);
            worker.on('message', (result) => {
                results.push({ status: 'resolved', data: result });
                resolve();
            });
            worker.on('error', (error) => {
                results.push({ status: 'error', data: null });
                resolve();
            });
            worker.postMessage(n);
        });
    };

    const start = 10;
    const workerPromises = [];

    for (let i = 0; i < numCPUs; i++) {
        const n = start + i;
        workerPromises.push(createWorker(n));
    }

    await Promise.all(workerPromises);

    console.log(results);
};

await performCalculations();