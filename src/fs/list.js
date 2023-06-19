import { readdir } from 'node:fs/promises';
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const list = async () => {

    try{

        const entries = await readdir(path.join(__dirname,'files'));
        entries.forEach(entry => process.stdout.write(`${entry}\n`))


    }catch(err){
        throw new Error('FS operation failed')
    }
};

await list();