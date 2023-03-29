//Fs Module (Async)
const { readFile, writeFile } = require('fs')

console.log('start');

//如不加utf8變成Buffer >數字+字母的字串!!

//執行readFile > first.txt //callback
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result

//執行readFile > second.txt
//callback
readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
        }
    const second = result

//執行writeFile > result-async.txt //callback
writeFile(
    './content/result-async.txt',
    `Here is the result : ${first}, ${second}`,
    (err, result) => {
    if (err) {
        console.log(err)
        return
        }
        console.log('done with this task:D')
        }
      )     
    })
})

console.log('done with this taskkk')
