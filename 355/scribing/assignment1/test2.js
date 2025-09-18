const fs = require('fs');
//const finished = require('stream');
const n = 100;
let arr = Array(n);
let c = 0;

const resolve = (index) => {
    const outputLocation = `./outputFile2/${index+1}_output_file.txt`;
    const text = `data_${index+1}`;

    fs.writeFile(outputLocation, text, () => {
        c += 1;
        console.log(`data_${index+1}`);   
        if(c == n-1){
            console.log('finished all tasked');
        }
    })
}
for (let i = 0; i < n;i++){
    resolve(i);
}