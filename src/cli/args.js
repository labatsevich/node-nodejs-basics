const parseArgs = () => {
 const arr =  process.argv.slice(2);
 const temp = []

 while(arr.length){
  temp.push(arr.splice(0,2).join(' is ').replace('--',''))
 }

 process.stdout.write(temp.join(', '))

};

parseArgs();