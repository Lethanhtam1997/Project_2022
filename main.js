// Arrow function: hàm mũi tên
function add2so(a,b) 
{
    return(a+b);
}
var c = add2so(1,2);
console.log(c);
// function logger(log) {
//     console.log(log);
// }
// Đây được gọi là expression function
// const logger = function(log) {
//     console.log(log);
// }
// Đây là arrow function
const logger = (log) => {
    console.log(log);
}
logger('Message...');

// const  sum = (a,b) => {
//     return (a+b);
// }
// Cách viết ngắn bằng arrow function
const  sum = (a,b) => a + b;

const anyobject = (a,b) => ({a:a, b: b});
console.log(anyobject(2,2));