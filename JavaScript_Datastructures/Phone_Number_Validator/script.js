document.addEventListener("DOMContentLoaded", (event) => {
    const checkButton = document.getElementById('check-btn');
    const clearButton = document.getElementById('clear-btn');
    const resultText = document.getElementById('results-div');


    function checkNumber(phoneNumber) {
        const phoneNumberEdited  = phoneNumber.trim().replace(/[-()\s]/g,"");

        if(phoneNumber.includes("(") && !phoneNumber.includes(")") || !phoneNumber.includes("(") && phoneNumber.includes(")")){
            resultText.append('Invalid US Number: ' + phoneNumber);
            console.log(phoneNumber);
        } else if(phoneNumber.includes("!","@","#","$","%","^","&","*")) {
            resultText.append('Invalid US Number: ' + phoneNumber)
            console.log(phoneNumberEdited);
        } else if (phoneNumber === '') {
            resultText.append(alert('Please provide a phone number'));
        } else if (phoneNumberEdited.length === 10) {
            resultText.append('Valid US Number: ' + phoneNumber);
            console.log(phoneNumberEdited);
        } else if ('1' == phoneNumberEdited.substring(0,1)) {
            resultText.append('Valid US Number: ' + phoneNumber);
            console.log(phoneNumberEdited);
        }  else {
            resultText.append('Invalid US Number: ' + phoneNumber)
            console.log(phoneNumberEdited);
        }
    }

    checkButton.addEventListener('click', () => {
        const phoneNumber = document.getElementById('user-input').value.trim();
        checkNumber(phoneNumber);
    })

    clearButton.addEventListener('click', () => {
        resultText.innerHTML = '';
    })
})