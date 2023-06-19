import { readFile } from 'node:fs/promises';
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const read = async () => {
  
    try {

        const data = await readFile(path.join(__dirname,'files','fileToRead.txt'),{encoding:'utf8'});
        process.stdout.write(data)
        
    } catch (error) {
        throw new Error('FS operation failed')
    }

};

await read();