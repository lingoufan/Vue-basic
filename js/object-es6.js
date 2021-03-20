// es5定义对象，原型链
function Player (name,age) {
   this.name = name
   this.age = age
}

//成员函数挂在在原型链上
Player.prototype.myMethod = function () {
    console.log(this.name + '-------' + this.age)
}

var player1 = new Player('tom',20)
var player2 = new Player('jack',20)

player1.printInfo()
player2.printInfo()

class Player{
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    //定义成员函数
    printInfo () {
        console.log(this.name + '' + this.age)
    }
}

// let player = new Player('tom', 20)
// player.printInfo()

const player = new Player('tom', 20)
player.printInfo()
//player = new Player('jack',30)
player.name = 'jack'
player.printInfo()

//继承
class BestPlayer extends Player {
    constructor() {
        super()
        this.name = 'hello'
        this.age = 20
    }
}

let player = new BestPlayer()
player.printInfo()


let name = 'jack'
let age = 33
let play = {
    name,
    age,
    printInfo () {
        console.log(play)
    }
}
play.printInfo()