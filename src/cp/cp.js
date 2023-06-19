import { spawn } from 'node:child_process';
import path from 'node:path';
import { stdin, stdout } from 'node:process';
import {fileURLToPath} from 'node:url';

const child = path.join(path.dirname(fileURLToPath(import.meta.url)),'files','script.js');

const spawnChildProcess = async (args) => {

    const childProcess =  spawn('node', [child, ...args]);
    stdin.on('data', data => childProcess.stdin.write(data))
    childProcess.stdout.on('data', data => stdout.write(data.toString()));
    childProcess.on('close', code => console.log(`child process closed with code ${code}`))
    
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['Hi', 'there!', 'I\'m','simple','boring','script']);
