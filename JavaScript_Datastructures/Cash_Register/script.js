let price = 11.95;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20], 
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
    ];

let cidTotal = cid.reduce((accumulator, currentValue) => accumulator + currentValue[1], 0).toFixed(2);

let button = document.getElementById('purchase-btn');
let changeDue = document.getElementById('change-due');
let cidText = document.getElementById('cidText');

button.addEventListener('click', () => {
    
    const insufficient = 'Status: INSUFFICIENT_FUNDS';
    const closed = 'Status: CLOSED';
    const open = 'Status: OPEN';

    let cash = parseFloat(document.getElementById('cash').value);
    let change = (cash - price) * 100 /100;

    function changeCalc(change) {  
        // does this need to be here since it's up there already in getChange()
        let changeBack = [];
        //using this copy as to not alter the original, though in a real world situation might be better to have the drawer set as an input or maybe a separate const depending on policy
        let cidCopy = [...cid].reverse();
            
        //values of each coin, initially I tried with just the values instead of the names too but i've gone through so many iterations, trying something different...
        let denominations = [
            ['ONE HUNDRED', 100.00],
            ['TWENTY', 20.00],
            ['TEN', 10.00],
            ['FIVE', 5.00],
            ['ONE', 1.00],
            ['QUARTER', .25],
            ['DIME', .10],
            ['NICKEL', .05],
            ['PENNY', .01]
        ];

        for (let i = 0; i < denominations.length; i++){
            let name = denominations[i][0];
            let value = denominations[i][1];
            let cidValue = cidCopy.find(i => i[0] === name)[1];

            if (change >= value && cidValue > 0) {
                //determines coin value I know it's in the name but it's like having a dollar and then breaking it up based on the value of change available 
                let coinValue = Math.floor(change / value) * value;
                //this one picks the lowest amount so you don't run over your limit of coins? kind of how it was explained to me
                cidCopy[i][1] -= coinValue;
                // cidTotal -= coinValue;
                let availableInCid = Math.min(coinValue, cidValue);
                    
                if (availableInCid > 0) {
                    changeBack.push([name, availableInCid]);
                    change -= availableInCid;
                    change = Math.round(change * 100) / 100;                 
                };

            };
                
        };
        return changeBack;
            
    };
        
    if (cash < price) {
        alert('Customer does not have enough money to purchase the item');
    }else if(cash == price) {
        const exactNode = document.createTextNode("No change due - customer paid with exact cash");
        changeDue.appendChild(exactNode);
    }else if(change > cidTotal){
        //need to expand on this like what happens if i run out of change on a specific coin
        const insufficientNode = document.createTextNode("Status: INSUFFICIENT_FUNDS");
        changeDue.appendChild(insufficientNode);
    }else {
        const changeNode = document.createTextNode(open + ' ' + changeCalc(change).map(i => `${i[0]}: ${i[1]}`).join(', '))
        changeDue.appendChild(changeNode);
        const cidNode = document.createTextNode(cid);
        cidText.appendChild(cidNode);
        // to test
        console.log(changeNode);

    }



    console.log(cidTotal)
});
