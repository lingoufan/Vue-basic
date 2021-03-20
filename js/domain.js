if (true) {
    var externalVal = 'externalVal'
}

function domainTest(){
    var funVal = 'funVal'
    console.log(externalVal + '---------' + funVal)
}

domainTest()

if (true) {
    console.log(externalVal)
    console.log(funVal)
}