document.addEventListener("DOMContentLoaded", (event) => {
    const button = document.getElementById("convert-btn");
    const result = document.getElementById("output-text");
    result.innerHTML = '';

    function numeralConverter(number) {
        const resultNode = document.createTextNode("I");
        const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']; 
        const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        
        
        switch (true) {
            case number == '':
                alert('Please enter a valid number');
                break;
            case isNaN(number):
                alert('Please enter a valid number');
                break;
            case number <= 0:
                alert('Please enter a number greater than or equal to 1');
                break;
            case number >= 4000:
                alert('Please enter a number less than or equal to 3999');
                break;
            default:
                break;
            
        }
    }

    button.addEventListener('click', () => {
        const number = parseInt(document.getElementById("number").value.trim(), 10);
        numeralConverter(number);
        });

});
