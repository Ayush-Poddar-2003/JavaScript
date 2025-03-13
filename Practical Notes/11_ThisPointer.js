const user = {
    username: "ayush",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, loves aditi`);
        console.log(this); //shows which context are we talking
        
    }
}

user.welcomeMessage()
user.username="ayu"
user.welcomeMessage()

console.log(this); //on browser it refers to windows

//------------------------------------
/**Using this with sole function is chaos */
