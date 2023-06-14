import { copyFile, mkdir, readdir } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url)
const __dirname  = dirname(__filename)
const src = path.join(__dirname,'files');
const dest = path.join(__dirname,'files__copy');


const copy = async () => {
   
    try{
        const entries = await readdir(src,{withFileTypes: true})
        await mkdir(dest,{recursive: false})

        for(const entry of entries){

            await copyFile(path.join(src,entry.name),path.join(dest,entry.name))
        }
    }
    catch (err){
        throw new Error('FS operation failed')
    }
    



};

await copy();
