//必須是fs中存在的method,不能亂作**
//導入filesystem中的:readFileSync, writeFileSync
const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// console.log(first, second)

//此command 可以Generate一個file出來!!!
//writeFileSync('filepath','文件中的內容')
//打印番first.txt + second.txt去result-sync.txt
//flag不能亂設定有規定的格式,如使用a則成功執行並創建file.
//flag: 'r' 則會報錯;
writeFileSync('./content/result-sync.txt',
`Here is the result : ${first}, ${second}`, 
{ flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')






