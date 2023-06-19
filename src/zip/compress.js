import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {

    const gzip = createGzip();
    const src   =  createReadStream(path.join(__dirname,'files','fileToCompress.txt'));
    const dest  =  createWriteStream(path.join(__dirname,'files','archive.gz'));

     await pipeline(src,gzip,dest).catch((err) => {
        if(err) console.log(`Error: ${err}`);
    })

};

await compress();