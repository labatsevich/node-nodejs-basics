import { createUnzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    
    const unzip = createUnzip();
    const src   =  createReadStream(path.join(__dirname,'files','archive.gz'));
    const dest  =  createWriteStream(path.join(__dirname,'files','fileToCompress.txt'));

    await pipeline(src,unzip,dest).catch((err) => {
        if(err) console.log(`Error: ${err}`);
    })
};

await decompress();