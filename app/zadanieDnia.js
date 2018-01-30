const fs = require('fs');
const arguments = process.argv.slice(2);

arguments.forEach(dir => {
   fs.readFile(dir, 'utf-8', (err, data)=>{
      if(err !== null){
          console.log(`There was an error while reading file ${dir}`, err);
          return false;
      }

      if(createBackup(dir, data)){
          let newString = modifyString(data);
          fs.writeFile(dir,newString, 'utf-8', err => {
             if(err !== null){
                 console.log(`There was an error while saving file ${dir}`, err);
             }else{
                 console.log(`${dir} modify successfully :)`);

             }
          });
      }

   });
});

function createBackup(dir, data){
    fs.writeFileSync(`${dir}.backup`,data, 'utf-8');
    return true;
}

function modifyString(string){
    let arrayOfChars = string.split('');
    let modifiedArray = arrayOfChars.map((char, pos) => pos%2 === 0 ? char.toUpperCase() : char.toLowerCase());
    return modifiedArray.join('');
}