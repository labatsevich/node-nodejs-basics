import { cpus } from 'node:os';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';

const __filename = fileURLToPath(import.meta.url);

const performCalculations = async () => {



    const arr = cpus().map((item, i) => new Promise((res, rej) => {

        const worker = new Worker(path.join(dirname(__filename), 'worker.js'), {
            workerData: 10 + i
        });

        worker.on('message', (message) => res(message));
        worker.on('error', (error) => rej(error));

    }));

    const result = await Promise.allSettled(arr);
    const res = result.map((item) => {
        return {
            status: item.status === 'fulfilled' ? 'resolved' : 'error',
            data: item.status === 'fulfilled' ? item.value : null
        }
    });

    console.log(res);

};

await performCalculations();