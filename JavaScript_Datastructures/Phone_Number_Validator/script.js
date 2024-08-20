document.addEventListener("DOMContentLoaded", (event) => {
    const checkButton = document.getElementById('check-btn');
    const clearButton = document.getElementById('clear-btn');
    const resultText = document.getElementById('results-div');


    function checkNumber(phoneNumber) {
        // code seems inefficient on several levels need to get it working more effectively
        const phoneNumberEdited  = phoneNumber.trim().replace(/[-()\s]/g,"");
        const invalid = 'Invalid US Number: ' + phoneNumber;
        const valid = 'Valid US Number: ' + phoneNumber;

        // if (phoneNumber.charAt(0) == "(" && phoneNumber.charAt(phoneNumber.length - 1) == ")") {
        //     resultText.append('Invalid US Number: ' + phoneNumber);
        //     console.log(phoneNumber);
        // } else if (phoneNumberEdited.length > 11) {
        //     resultText.append('Invalid US Number: ' + phoneNumber);
        //     console.log(phoneNumber);
        // } else if(phoneNumberEdited.charAt(1) == '0') {
        //     resultText.append('Invalid US Number: ' + phoneNumber);
        //     console.log(phoneNumber);
        // } else if(phoneNumber.includes("(") && !phoneNumber.includes(")") || !phoneNumber.includes("(") && phoneNumber.includes(")")){
        //     resultText.append('Invalid US Number: ' + phoneNumber);
        //     console.log(phoneNumber);
        // } else if(phoneNumber.includes("!","@","#","$","%","^","&","*")) {
        //     resultText.append('Invalid US Number: ' + phoneNumber)
        //     console.log(phoneNumberEdited);
        // } else if (phoneNumber === '') {
        //     resultText.append(alert('Please provide a phone number'));
        // } else if (phoneNumberEdited.length === 10) {
        //     resultText.append('Valid US Number: ' + phoneNumber);
        //     console.log(phoneNumberEdited);
        // } else if(phoneNumber.charAt(0) === '-') {
        //     resultText.append('Invalid US Number: ' + phoneNumber);
        //     console.log(phoneNumber);
        // } else if ('1' === phoneNumberEdited.substring(0,1)) {
        //     resultText.append('Valid US Number: ' + phoneNumber);
        //     console.log(phoneNumberEdited);
        // }  else {
        //     resultText.append('Invalid US Number: ' + phoneNumber)
        //     console.log(phoneNumberEdited);
        // }

        const countryCode = phoneNumberEdited.charAt(0);
        const areaCode = phoneNumberEdited.slice(0,3);
        const midSection = phoneNumberEdited.slice(3,6);
        const endSection = phoneNumberEdited.slice(6,phoneNumber.length - 1);

        switch (true) {
            case phoneNumber.includes("(") && !phoneNumber.includes(")"):
                resultText.append(invalid);
                break;
            case !phoneNumber.includes("(") && phoneNumber.includes(")"):
                resultText.append(invalid);
                break;
            case phoneNumber.charAt(phoneNumber.length - 1) == ")":
                resultText.append(invalid);
                break;
            case phoneNumber.includes("!","@","#","$","%","^","&","*"):
                resultText.append(invalid);
                break;
            case phoneNumber.charAt(0) == '-':
                resultText.append(invalid);
                break;
            case phoneNumberEdited.length == 11:
                if(phoneNumberEdited.charAt(0) != '1') {
                    resultText.append(invalid);
                } else {
                    resultText.append(valid);
                }
                break;
            case phoneNumberEdited.length == 10:
                if(phoneNumberEdited.charAt(0) == '1' || phoneNumber.charAt(phoneNumber.length - 2) == '-') {
                    resultText.append(invalid);
                } else {
                    resultText.append(valid);
                }
                break;
            case phoneNumberEdited == '':
                alert('Please provide a phone number');
                break;
            default:
                resultText.append(invalid)
                break;
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