// Your code goes here
const rapid = (text)=> {
    var result = ""
    for (let i = 0; i < text.length; i++) {
        if (["a", "e", "i", "o", "u"].includes(text[i])) {
            continue
        }
        result += text[i];
    }
    return result.toUpperCase()
}


// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
