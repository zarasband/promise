var promise = require('promise');
let promis = new Promise((resolve, reject) => {
    let str = 'Peransa';
    if (str === 'Peransa') {
        resolve(str);
    } else {
        reject(Error("something is wrong"));
    }
});
promis.then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});