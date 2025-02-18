// VARIABLES

const accountId = 69
let accountEmail = "ayushpoddar1603@gmail.com"
var accountPassword = "12345"
accountCity = "New Delhi"

// Rather than printing everything one by one
console.table([accountId, accountEmail, accountPassword, accountCity])

// accountId = 5 //Not allowed
accountEmail = "aditiYadav@gmail.com"
accountPassword = "98765"
accountCity = "Delhi"
console.table([accountId, accountEmail, accountPassword, accountCity])


/*----------------------------
Var is not prefferd as it has scope issue

----------------------------*/
let a
var b
console.table([a, b]) //both undefined