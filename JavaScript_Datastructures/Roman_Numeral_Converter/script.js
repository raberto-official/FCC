document.addEventListener("DOMContentLoaded", (event) => {
    const button = document.getElementById("convert-btn");
    let output = document.getElementById("output-text");

    function numeralConverter(number) {
        //made these instead of doing a switch statement or a ton of if else statements 
        const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']; 

        if(number == '' || isNaN(number)){
            output.append('Please enter a valid number')
        // is there a way to combine the next 2 else if statments? maybe if I use like a createTextNode() but I don't think it would be very feasible 
        }else if(number <= 0){
            output.append('Please enter a number greater than or equal to 1');
        }else if(number >= 4000){
            output.append('Please enter a number less than or equal to 3999');
        } else {
            //This was the hardest part for me I could understand everything else but I really got stuck on this so I think I'm ok at coding but struggle with creating "algorithms" to solve problems which I would think is a big part of coding, need to practice more
            for (let i = 0; i < values.length; i++) {
                //compares whatever values[i] is to number whether it's less than or equal to the number really were just trying to match the number to whatever it is in values
                while(values[i] <= number) {
                    //appending the output text to add the numeral text
                    output.append(numerals[i]);
                    //readjusting the number
                    number = number - values[i];
                    //I was using this to see what i was on each iteration mostly out of curiosity 
                    console.log(i);
                }
            }
        }
       
    }

    button.addEventListener('click', () => {
        const number = parseInt(document.getElementById("number").value.trim(), 10);
        output.innerHTML = '';
        numeralConverter(number);
        });

});

//doing this project made me wonder why the Romans would use this like this but it's defintlye following a patttern and a simple to understand system, but they were wicked smart so I'd be curious to know what they based it off of and why they used this instead of something else.

//I need to get better at getting the "algorithm" part figured out I've started working on word problems and algebra, and calculus but will need to just code more.