setTimeout(() => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
        setTimeout(() => {
            console.log(3)
        }, 3000)
    }, 2000)
}, 1000)
console.log(2)
console.log(3)
console.log(4)

// 同步：无反应则一直等
// 异步：不是同一个事件

//callback hell 回调地域
//Pending、Fulfilled、Rejected
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('p1')
        resolve('hello')
    }, 1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('p2')
        resolve(3 + 4)
    }, 2000)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('p3')
        resolve(['aaa', 'bbb'])
    }, 3000)
})

//按时间顺序显示，并回调每个值
Promise.all([p1, p2, p3]).then((res) => {
    console.log('全部完成')
    console.log(res)
})

//按时间顺序显示，回调最先完成的值
// Promise.race([p1, p2, p3]).then((res) => {
//     console.log('全部完成')
//     console.log(res)
// })
