// 가장 기본적인 방법
// const add = (x, y) => x + y

// const PI = 3.14159;

// const square = x => x * x;

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// math 자체를 export하는 방법
// const math = {
//     add: add,
//     PI: PI,
//     square: square
// }

// module.exports = math;

//아예 객체를 선언과 동시에 export
module.exports.add = (x, y) => x + y

module.exports.PI = 3.14159;

module.exports.square = x => x * x;
//exports.add =  이런식으로 단축해서도 사용가능
//단 exports를 문자열이나 다른걸로 선언한 경우 불가능(물론 하지 않아야 함)

//결과는 모두 같음
