import { rename as renameFile, constants, access, readFile } from 'node:fs/promises';
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const src = path.join(__dirname, 'files', 'wrongFilename.txt')
const dest = path.join(__dirname, 'files', 'properFilename.md')

const rename = async () => {

    try {
        await readFile(src);

        const fileExists = false;

        try {

            await access(dest, constants.F_OK);
            fileExists = true;
            throw new Error('FS operation failed')

        } catch (err) {

            if (!fileExists) await renameFile(src, dest);
            if (fileExists) {
                process.stdout.write(err.message)
                return
            };

        }
    }catch(err){
        process.stdout.write(`FS operation failed`)
    }

   
};

await rename();