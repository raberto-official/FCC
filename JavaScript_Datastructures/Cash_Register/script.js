document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.getElementById('purchase-btn');
    let changeDue = document.getElementById('change-due');

    let price = 19.5;
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
    cidValue = [100,20,10,5,1,.25,.1,.05,.01];
    cid.reverse();

    // tried out this method to get total and it's super cool had trouble accessing cid[i][1] till this solution came up
    const initialValue = 0;
    const cidTotal = cid.reduce((accumulator, currentValue) => accumulator + currentValue[1], 0);

    const insufficient = 'Status: INSUFFICIENT_FUNDS';
    const closed = 'Status: CLOSED';
    const open = 'Status: OPEN';

    function getChange(cash) {
        let change = Math.round((cash - price)*100)/100;
        let newCid = [];

        if (cash < price) {
            alert('Customer does not have enough money to purchase the item');
        } else if (cash == price) {
            changeDue.append('No change due - customer paid with exact cash')
        } else {
                for (let i = 0; i < cid.length; i++) {
                    let coin = cid[i][0];
                    let value = cid[i][1];
                    let changeReturn = 0;
                    if (change >= cidValue[i] ) {
                        change -= value;
                        changeReturn += value;
                        newCid.push([coin + ": "+ changeReturn]);
                        
                    } 
                }
                
                    changeDue.append(newCid);
                
            }

        
   
    }


    button.addEventListener('click', () => {
        let cash = document.getElementById('cash').value;
        
        getChange(cash);
    })
})

