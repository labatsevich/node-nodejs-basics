import {stdin,stdout} from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
    
 const reverse = new Transform({
    transform(chunk,encoding,callback){
        callback(null,[...chunk.toString()].reverse().join(''))
    }
 })
    
 stdin.pipe(reverse).pipe(stdout)

};

await transform();