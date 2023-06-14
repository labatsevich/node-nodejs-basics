import * as fs from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {

    try{
       await fs.writeFile(path.join(__dirname,'files','fresh.txt'),'I am fresh and young',{encoding:'utf8',flag:'wx'});
    }
    catch (err){
       throw new Error('FS operation failed')
    }
    
};

await create();