// // Objects


// // let obj = { title: "webbarin", age: 2 }
// // for(key in obj){
// //     console.log(key);
// // }


// let obj = {
//     title: "webbrain",
//     age: 5,
//     child: {
//         age: 4,
//         name: "webbrain",
//         child: {
//             age: 3
//         }
//     }
// }
// let sum = 0;
//  while(obj){
//    sum+=obj.age;
//    obj=obj.child;
//  }
//  console.log(sum);


// function lastNumber(arr) {
//     while (arr.length > 1) {
//         let array = arr.sort((a, b) => a - b);
//         let res = array[array.length - 1] - array[array.length - 2];
//         array.splice(array.length - 2, 2);
//         res ? array.push(res) : null;
//     }
//     return arr;
// }
// console.log(lastNumber([11, 16, 12]));