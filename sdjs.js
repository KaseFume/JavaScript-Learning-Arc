for (i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//trim() removes whitespaces from both side.
var str = "   Hello World   ";
console.log(str.trim()); // Outputs: "Hello World"

//.length property returns the length of a string.
var str = "Hello World";
console.log(str.length); // Outputs: 11

//data structures
gooop=['go','stop','wait','slow']
array.forEach(gooop => {
    console.log(gooop)
});




goop= {   
    "name":["Min","Smth"],
    "age":["29","30"],
    "city":["smth","smth"],
}
for (let key in goop) {
    for (let i = 0; i < goop[key].length; i++) {
        console.log(key + " " + goop[key][i]);
    }
}


var u=['1','2','3','2','1']
var v=[]
for (let i = 0; i < u.length; i++) {
    if (u[i] === '1') {
        v.push(u[i])
        }
    }
console.log(v)


