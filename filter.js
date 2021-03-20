
//语法

// filter(function(element,index,arr))
// element (必须 当前元素的值)
// index (可选 当前元素的索引值)
// arr (可选 当期元素属于的数组对象)

//创建 一个是否存在某个值
var newarr = [
    { num: 1, val: 'ceshi', flag: 'aa' },
    { num: 2, val: 'ceshi2', flag: 'aa2' }
]
//item 等于 上文的element
console.log(newarr.filter(item => item.num === 2))
console.log("----------------")
//过滤掉 num 为2 的 
var newarr = [
    { num: 1, val: 'ceshi', flag: 'aa' },
    { num: 3, val: 'ceshi', flag: 'aa' },
    { num: 2, val: 'ceshi2', flag: 'aa2' }
]
console.log(newarr.filter(item => item.num != 2))
console.log("----------------")

//过滤掉不符合的数组元素
var arr = [20, 30, 50, 96, 50]
var newArr = arr.filter(item => item > 40)
console.log(newArr)



//过滤掉含有2 的元素
var arr = ['10','12','23','44','42']
var newArr = arr.filter(item => item.indexOf('2')<0) 
console.log(newArr)



数组去重
let arr = [1, 2, 3, 2, 3, 4]
let arrFilter = arr.filter((ele, index, arr) => {
  return arr.indexOf(ele) === index
})
console.log(arrFIlter)
结果 ：[1 2 3 4 ]

//es6 中set的
let arr = [1, 2, 3, 2, 3, 4]
let arrFilter = [...new Set(arr)]
console.log(arrFilter)



