// //Turns out this code doesn't work how I thought it did.
// //it doesn't return the insufficient status correctly, like if you run out of cid then it goes straight to the open status
// //it calculates but i think it calculates not how I want it to its weird like it'll get the correct change for the most part but I may need to rethink the logic in my calculations

// let price = 10;
// let cid = [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20], 
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100]
//     ];

// let cidTotal = cid.reduce((accumulator, currentValue) => accumulator + currentValue[1], 0).toFixed(2);

// let button = document.getElementById('purchase-btn');
// let changeDue = document.getElementById('change-due');
// let cidText = document.getElementById('cidText');

// button.addEventListener('click', () => {
    
//     const insufficient = 'Status: INSUFFICIENT_FUNDS';
//     const closed = 'Status: CLOSED';
//     const open = 'Status: OPEN';

//     let cash = parseFloat(document.getElementById('cash').value);
//     let change = (cash - price) * 100 /100;

//     function changeCalc(change) {  
//         // does this need to be here since it's up there already in getChange()
//         let changeBack = [];
//         //using this copy as to not alter the original, though in a real world situation might be better to have the drawer set as an input or maybe a separate const depending on policy
//         let cidCopy = [...cid].reverse();
            
//         //values of each coin, initially I tried with just the values instead of the names too but i've gone through so many iterations, trying something different...
//         let denominations = [
//             ['ONE HUNDRED', 100.00],
//             ['TWENTY', 20.00],
//             ['TEN', 10.00],
//             ['FIVE', 5.00],
//             ['ONE', 1.00],
//             ['QUARTER', .25],
//             ['DIME', .10],
//             ['NICKEL', .05],
//             ['PENNY', .01]
//         ];

//         for (let i = 0; i < denominations.length; i++){
//             let name = denominations[i][0];
//             let value = denominations[i][1];
//             let cidValue = cidCopy.find(i => i[0] === name)[1];
            
//             if (change >= value && cidValue > 0) {
//                 //determines coin value I know it's in the name but it's like having a dollar and then breaking it up based on the value of change available 
//                 let coinValue = Math.floor(change / value) * value;
//                 cidCopy[i][1] = Math.max(0, cidValue - coinValue);
//                 //this one picks the lowest amount so you don't run over your limit of coins? kind of how it was explained to me; update: realizing it doesn't work the way i expected
//                 let availableInCid = Math.min(coinValue, cidValue).toFixed(2);
//                 if (availableInCid > 0) {
//                     changeBack.push([name, availableInCid]);
//                     change = Math.max(0, (change - availableInCid)).toFixed(2);
//                     cidTotal -= coinValue;
//                     console.log(availableInCid)
//                 } 

//             }

//         }
//     return changeBack;

//     };
        
//     if(cash == 0 || cash == '' || cash == null){
//         alert('Please input a valid cash amount')
//     }else if (cash < price) {
//         alert('Customer does not have enough money to purchase the item');
//     }else if(cash === price) {
//         changeDue.textContent = "No change due - customer paid with exact cash";
//     }else if(change > cidTotal){
//         //need to expand on this like what happens if i run out of change on a specific coin
//         changeDue.textContent = insufficient;
//     }else {
//         const changeResult = changeCalc(change);
//         changeDue.textContent = open + ' ' + changeResult.map(i => `${i[0]}: $${i[1]}`).join(', ');
//         cidText.textContent = cid.map(i => `${i[0]}: $${i[1].toFixed(2)}`).join(", ");

//     }

// });

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

let cidReverse = [...cid].reverse();
let cidTotal = cid.reduce((accumulator, currentValue) => accumulator + currentValue[1], 0).toFixed(2);

const denominations = [ 
    {
        name: "ONE HUNDRED",
        value: 100
    },
    {
        name: "TWENTY",
        value: 20
    },
    {
        name: "TEN",
        value: 10
    },
    {
        name: "FIVE",
        value: 5
    },
    {
        name: "ONE",
        value: 1
    },
    {
        name: "QUARTER",
        value: .25
    },
    {
        name: "DIME",
        value: .1
    },
    {
        name: "NICKEL",
        value: .05
    },
    {
        name: "PENNY",
        value: .01
    }
];

let button = document.getElementById('purchase-btn');
let changeDue = document.getElementById('change-due');
let cidText = document.getElementById('cidText');

let changeAmount = (cash - price) * 100 /100;

 class change {
    constructor() {
        
    }
}

function getChange(cash, price){

    if(!cash) {
        alert("Please input a valid value.")
    }else if(cash < price) {
        alert("Customer does not have enough money to purchase the item");
    }else if(cash === price) {
        alert("No change due - customer paid with exact cash");
    }

    if(changeAmount !== 0) {
        //Calculate coins needed here but keep in mind that you have a very finite amount of coins
        
    }

}

button.addEventListener("click", () => {

    let cash = parseFloat(document.getElementById('cash').value);
    let changeAmount = (cash - price) * 100 /100;

    getChange(cash, price);
    cidText.innerText = change.penny.name + ': ' + change.penny.amount;
})