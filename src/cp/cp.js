import {spawn} from 'child_process';

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', ['./src/cp/files/script.js', ...args]);

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    childProcess.on('exit', (code) => {
        console.log(`Child process exited with code ${code}`);
      });
};

const args = ['arg1', 'arg2', 'arg3'];
spawnChildProcess(args);

