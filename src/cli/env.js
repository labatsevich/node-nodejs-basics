const parseEnv = () => {
  const result =  Object.entries(process.env).filter((value) => { 
    const [key,val] = value; 
     if(key.startsWith('RSS')) return value;
}).map((entry) => entry.join('=')).join('; ')

  process.stdout.write(result)

};

parseEnv();