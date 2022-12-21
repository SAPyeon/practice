// //fs가 아닌 다른 모듈을 require할때는 ./ 를 붙여야함
// const math = require('./math');
// //math모듈의 객체를 출력함
// // node app.js를 하면 결과값 출력
// console.log(math.PI)
// console.log(math.square(9))


// //구조분해 할당도 가능
// const { PI, square } = require('./math');

// console.log(PI)
// console.log(square(9))


// 다른 디렉토리에서 불러오기
const dogs = require('./shelter')
console.log("Required an entire Directory!", dogs);
//shelter/index.js파일에 있는 module.exports부분을 출력함
