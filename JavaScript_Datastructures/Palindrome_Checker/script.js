// let x = "tacos";

// x = x.split("");

// function isPalindrome(arr) {
//     return arr.join('') === arr.slice().reverse().join('');
// }

// const ans = isPalindrome(x);

// if (ans) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

//===========================================================================//



const form = document.getElementById("form");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

isError = false;

form.addEventListener("submit", function (e) { 
    e.preventDefault()
 })

 