const fs = require('fs');
const dir = './data/zadanie02/';

fs.readdir(dir, (err, files)=>{
    if(err !== null){
        console.log('There was an error while reading a directory.', err);
        return false;
    }
    files.forEach(file => {
       fs.readFile(`${dir}${file}`,'utf-8',(err, data)=>{
         if(err !== null){
             console.log(`There was an error while reading a file ${file}`, err);
         }else{
             console.log(data);
         }
       });
    });
});