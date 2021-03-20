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

let player1 = new Player('tom', 20)
player1.printInfo()
