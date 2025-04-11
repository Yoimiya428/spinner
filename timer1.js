const args = process.argv.slice(2); 
let number = 0;

if (args.length !== 0){
    for (const i of args) {
        
        number = Number(i);
        if (i === NaN|| i <= 0) continue;
        setTimeout(() => {
            process.stdout.write('\x07'); 
            }, number * 1000); 
}
};