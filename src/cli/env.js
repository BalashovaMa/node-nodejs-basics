const parseEnv = () => {
    const prefix = 'RSS_';
    const envVariables = Object.entries(process.env);
    envVariables.forEach(([name, value]) => {
        if (name.startsWith(prefix)) {
            console.log(`${name}=${value}`);
        }
    });
};

parseEnv();