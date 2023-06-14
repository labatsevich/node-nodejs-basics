import { rm } from 'node:fs/promises';
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filepath = path.join(__dirname,'files','fileToRemove.txt') 

const remove = async () => {

    try{
        await rm(filepath)
         
    }catch(err){
        throw new Error('FS operation failed')
    }
    
};

await remove();