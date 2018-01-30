const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf-8', (err, data)=>{
    if(err !== null){
        console.log('There is an error while reading a file', err);
        return false;
    }
    const sum = JSON.parse(data).reduce((a,b)=>a+b,0);
    fs.writeFile('./data/zadanie01/sum.txt', sum, err => {
        if(err !== null){
            console.log('There is an error while reading a file', err);
        }else{
            console.log('Result saved successfully! :)');
        }
    })
});