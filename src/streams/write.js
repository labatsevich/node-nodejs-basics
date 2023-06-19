import fs from 'node:fs'
import path, { dirname } from 'node:path';
import {fileURLToPath} from 'node:url';

const dest = path.join(path.dirname(fileURLToPath(import.meta.url)),'files','fileToWrite.txt');

const write = async () => {
    
    const ws = fs.createWriteStream(dest,{encoding:'utf8'});
    process.stdin.pipe(ws);
};

await write();