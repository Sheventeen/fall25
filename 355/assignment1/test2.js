// const fs = require('fs');
// //const finished = require('stream');
// const n = 100;
// let arr = Array(n);
// let c = 0;

// const resolve = (index) => {
//     const outputLocation = `./outputFile2/${index+1}_output_file.txt`;
//     const text = `data_${index+1}`;

//     fs.writeFile(outputLocation, text, () => {
//         c += 1;
//         console.log(`data_${index+1}`);   
//         if(c == n-1){
//             console.log('finished all tasked');
//         }
//     })

// }
// for (let i = 0; i < n;i++){
//     resolve(i);
// }

// const fs = require('fs');
// const n = 5;

// const recurs = (i) => {
//     if (i == n){
//         return 0;
//     }
//     return (recurs(i-1) => {
//         const outputFile = `./output2/${i}_output.txt`;
//         const text = `Data_2`;
//         c += 1;
//         fs.writeFile(outputFile, text, () => {
//         })
//         console.log(`${i}_output`);
//         if (c == n-1){
//             console.log('Finished all Tasks');
//         }
//     })
// }
const fs = require('fs');
const n = 100;
let c = 0;

const recurs = (i) => {
    if (i == n){
        console.log('finished all tasks');
        return;
    }
    const outputFile = `./output2/${i}_output.txt`;
    const text = `Data_2`;
    c += 1;

    fs.writeFile(outputFile, text, (err) => {
        console.log(`${i}_output`);
        return recurs(i+1);
    });
}
recurs(1);