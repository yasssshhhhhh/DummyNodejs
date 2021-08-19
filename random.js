// var promise = new Promise(function(resolve, reject) {
//     const x = "geeksforgeeks";
//     const y = "geeksforgeeks"
//     if(x === y) {
//         resolve();
//     } else {
//         reject();
//     }
//     });
    
//     promise.
//         then(function () {
//             console.log('Success, You are a GEEK');
//         }).
//         catch(function () {
//             console.log('Some error has occured');
//         });


// let names = require('./app')
// console.log(names)


// let os = require('os');
// const user =  os.userInfo()
// console.log(os.uptime())
// console.log(user)



let filesync =require('fs')
let first = filesync.readFileSync('./first.txt','utf-8')
console.log(first)
