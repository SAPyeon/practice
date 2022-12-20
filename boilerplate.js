const fs = require('fs'); // fs를 사용하려면 작성
const folderName = process.argv[2] || "Project" // 디폴트로 undefind인 경우 Project가 파일이름임

//console.log(fs)

// 비동기식 mkdir
// https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#fsmkdirpath-options-callback 참조
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('CallBack!!')
//     if (err) throw err; // 에러가 발생할 경우 출력
// });

// 동기식 mkdir
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/apps.js`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
} catch (e) {
    console.log("something went wrong!!")
    console.log(e)
}

// console.log("I Come After MKDIR")