var i;
let y = [100, 8 , 45, 5,5,-10,-24,0,30,40,59,100]

let x = y.filter(function (value,index,arr) {
       return arr[index] <= 0   
    })
y = y.filter(function(zeroENegativo) {
    return x.indexOf(zeroENegativo) == -1;
    });
    
console.log(x)
console.log(y)
// function findLoerPositiveInteger( arr){
//     let lower = Number.MAX_SAFE_INTEGER

//     for(let value of arr){
//         if (value < lower){
//             console.log(lower)
//             lower = value
//             console.log(lower)
//         }
//     }
//      return i = lower -1
// }

// findLoerPositiveInteger(y)
// console.log(i)