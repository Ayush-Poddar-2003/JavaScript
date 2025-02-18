# JavaScript Complete Notes

## Variables

```js
const accountId = 69
let accountEmail = "ayushpoddar1603@gmail.com"
var accountPassword = "12345"
accountCity = "New Delhi"

// Rather than printing everything one by one
console.table([accountId, accountEmail, accountPassword, accountCity])

// REASSIGNING values :-
// accountId = 5 //Not allowed
accountEmail = "aditiYadav@gmail.com"
accountPassword = "98765"
accountCity = "Delhi"
console.table([accountId, accountEmail, accountPassword, accountCity])
```

var is less preferred as it has scope issue

```js
let a
var b
// const c //can't
cosole.table([a, b]) //=> both undefined
```