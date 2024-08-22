document.addEventListener("DOMContentLoaded", (event) => {
    let price = 19.5;
    // cid  =  cash in drawer
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
    cid = cid.reverse;
    let cidValue = [.01, .05, .1, .25,1,5,10,20,100];

    let button = document.getElementById('purchase-btn');
    let changeDue = document.getElementById('change-due');

    const insufficient = 'Status: INSUFFICIENT_FUNDS';
    const closed = 'Status: CLOSED';
    const open = 'Status: OPEN';

    function getChange(cash) {
        
        if (cash < price) {
            alert('Customer does not have enough money to purchase the item');
        } else if (cash == price) {
            //a better way of doing this is the one i did in the first one and create the text element but since FCC is checking it maybe this is better for now??
            changeDue.append('No change due - customer paid with exact cash')
        } else {
            console.log(cid);
            for (let i = 0; i < cidValue.length; i++) {
                    while (cash > price) {
                        cash - cidValue[i]
                    }
                    
            }
            
        }
    }

    button.addEventListener('click', () => {
        let cash = parseFloat(document.getElementById('cash').value);
        
        getChange(cash);
    })
})