import fs from 'node:fs'
import path, { dirname } from 'node:path';
import {fileURLToPath} from 'node:url';

const src = path.join(path.dirname(fileURLToPath(import.meta.url)),'files','fileToRead.txt');

const read = async () => {
   
    const chunks = []; 

    const rs = fs.createReadStream(src,{encoding:'utf8'});
    rs.on('data', (chunk) => chunks.push(chunk) );
    rs.on('end', () => process.stdout.write(chunks.join('')))
}

await read();