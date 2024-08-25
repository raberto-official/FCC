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
    let reverseCid = cid.reverse();
    let newCid = [];

    const insufficient = 'Status: INSUFFICIENT_FUNDS';
    const closed = 'Status: CLOSED';
    const open = 'Status: OPEN';

    function getChange(cash) {
        let cidTotal = 0;
        
        for (let i = 0; i < reverseCid.length; i++) {
            cidTotal += reverseCid[i][1];
        }

        if (cash < price) {
            alert('Customer does not have enough money to purchase the item');
        } else if (cash == price) {
            //a better way of doing this is the one i did in the first one and create the text element but since FCC is checking it maybe this is better for now??
            changeDue.append('No change due - customer paid with exact cash')
        } else {
            cash -= price
            if (cash > 0 || reverseCid[i][1] > 0) {
                for (let i = 0; i < reverseCid.length; i++) {
                    if (reverseCid[i][1] < cash) {
                        reverseCid[i][1] -= cash.toFixed(2);
                        newCid.push(reverseCid[i]);
                        console.log(newCid);
                        console.log(cash);
                    }
                }
            }
            
            changeDue.append(newCid)
        }
    }

    button.addEventListener('click', () => {
        let cash = parseFloat(document.getElementById('cash').value);
        
        getChange(cash);
    })
})

// It seems like you’re getting close but need to refine how you handle the change calculation and update the UI. Here are some points to consider and steps to take to improve your function:

// ### 1. **Reversing the `cid` Array:**
//    - **Check Placement of Reversal:** Ensure that reversing the `cid` array doesn’t affect subsequent operations. The reversal should be done before the calculation starts, and the handling should be consistent.

// ### 2. **Calculating Total Cash Available:**
//    - **Check Total Cash:** You’re calculating the total cash correctly, but ensure the `cidTotal` is used to determine if there’s enough money in the drawer to provide change.

// ### 3. **Change Calculation Logic:**
//    - **Adjusting Cash Calculation:** You need to ensure that you’re correctly calculating how much of each denomination can be used. The condition `reverseCid[i][1] < cash` should check if the denomination is enough to cover part of the change.
//    - **Correctly Deducting Denominations:** Deduct the amount from the `cash` and adjust the available amount in `reverseCid` properly. The method `toFixed(2)` may cause issues; instead, work with raw numbers and round them when necessary.

// ### 4. **Updating `newCid`:**
//    - **Push Correct Denominations:** Make sure you push the denominations and their respective amounts into `newCid` only if they are used to provide the change. Keep track of each denomination’s usage.
//    - **Clear `newCid` on Each Calculation:** Ensure `newCid` is reset or cleared at the beginning of each calculation to avoid appending old results.

// ### 5. **Handle Change Due:**
//    - **Update the UI Correctly:** Use proper methods to display the change due. Instead of using `changeDue.append()`, consider using `changeDue.textContent` or similar methods to format and display the result. Make sure the result is clear and correctly formatted.

// ### 6. **Condition and Logic Corrections:**
//    - **Check and Fix Conditions:** Ensure your logic correctly handles cases where the remaining cash is zero and when it is less than the available denominations.

// ### Steps to Refine Your Code:

// 1. **Recheck `cid` Reversal:**
//    - Ensure the reversal is done once and used correctly for calculating change.

// 2. **Correct the Iteration and Calculation:**
//    - Iterate through `reverseCid` and use each denomination to cover the required change.
//    - Properly update `cash` and `newCid` while handling floating-point precision issues carefully.

// 3. **Update and Display Results:**
//    - Format the results properly and display them in `changeDue`.

// 4. **Handle Edge Cases:**
//    - Make sure to handle cases where the cash provided is exactly equal to the price or where the drawer does not have enough funds.

// By focusing on these areas, you should be able to resolve issues with your current implementation and ensure that the change calculation works correctly.