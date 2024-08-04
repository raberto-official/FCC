// const textInput = document.getElementById("#text-input");

var textInput = "racecar";

function palindromeChecker(textInput) {
    for(var i = 0; i < textInput; i++) {
        if(textInput[i] == textInput[-i]) {
            return true;
        } else {
            return false;
        };
    };
  };

console.log(palindromeChecker(textInput));

console.log(textInput);