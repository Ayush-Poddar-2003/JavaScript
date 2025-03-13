function chai(){
    let username = "Ayush"
    console.log(this); //mess output
    console.log(this.username); //undefined
}
// chai()


const chai2 = function(){
    let username = "Ayush"
    console.log(this); //mess output
    console.log(this.username); //undefined
}
// chai2()


const chai3 = () => {
    let username = "Ayush"
    console.log(this); // {}
    console.log(this.username); //undefined
}
chai3()

//-------IMPLICIT VS EXPLICIT-------------

const addTwo = (a, b)=>{
    return a+b
}

const addTwoImplicit = (a, b) => a+b //no return statement