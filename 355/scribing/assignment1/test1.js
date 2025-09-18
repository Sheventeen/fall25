const fs = require("fs");
const n = 100;	//input size 0 < n < 100
let c = 0;
for(let i = 0; i < n; i++ ){
    const outputFile = `./output1/${i+1}_output_file.txt`;
    const fileName = `data_1`;
    fs.writeFile(outputFile, fileName, () => {
        c+= 1;
        console.log(`${i}_output`);
        if(c == n)
            console.log('writing complete');
    });
}