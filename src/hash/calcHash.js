import { readFile } from 'node:fs/promises';
import { createHmac } from  'node:crypto';
import path  from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url)

const calculateHash = async () => {

    try{

    const data = await readFile(path.join(path.dirname(__filename),'files', 'fileToCalculateHashFor.txt'),{encoding:'utf8'})
    const hash =  createHmac('sha256','secret key').update(data).digest('hex');

    process.stdout.write(hash);

    }catch(err){
        process.stdout.write(err.message)
    }
    
};

await calculateHash();