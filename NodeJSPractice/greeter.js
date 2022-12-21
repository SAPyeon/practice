const args = process.argv.slice(2); // 처음 argv요소 두개는 무시(경로임)
for (let arg of args) {
    console.log(`Hi there, ${arg}`)
}


