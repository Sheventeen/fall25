const fs = require("fs");
const n = 5;	//input size 0 < n < 100
for(let i = 0; i < n; i++ ){
    const outputFile = `./outputFile/${i+1}_output_file.txt`;
    const fileName = `data_${i+1}`

    fs.writeFile(outputFile, fileName, (e) => {
        try {
            console.log(fileName);
        } catch (error) {
            console.log(e);
        }
    });
}
console.log('writing complete');