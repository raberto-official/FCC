//I started in Javascript but couldn't figure it out so I knew I could do it in Python so I did it there and just changed the code to fit JavaScript; obviously I had to do it to make the input work and everything with the alert and so on so that's what is below this section of commented out code
// let x = "racecar";

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


// Sends alert for empty input
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById("check-btn");
    const input = document.getElementById("text-input");
    const resultText = document.getElementById("result-text");

    function isPalindrome(arr) {
        return arr.join('') === arr.slice().reverse().join('');
    }

    button.addEventListener('click', () => {
        //something tells me that this is a poor way to store and retrieve the variable and it's so specific so I imagine that this wouldn't work as a long term solution
        let inputText = input.value.trim();
        let inputToCheck = input.value.toLowerCase().replace(/[\s_.,\\\/()-]/g, "").split("");
        const result = isPalindrome(inputToCheck);
        resultText.innerHTML = '';

        if(inputToCheck.length === 0 ) {
            alert('Please input a value');
        } else {
            const resultNode = document.createTextNode(result ? `${inputText} is a palindrome` :`${inputText} is not a palindrome`);
            //used this console.log to keep track and test
            console.log(inputToCheck);
            resultText.appendChild(resultNode);
        }

    });
});