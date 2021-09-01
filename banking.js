// deposite function

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');

    const newDepositText = depositInput.value;
    depositInput.value = '';
    const newDepositAmount = parseFloat(newDepositText);


    const depositAmount = document.getElementById('deposit-amount');

    const previousDepositText = depositAmount.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount+ newDepositAmount;
    
    depositAmount.innerText = newDepositTotal;

    
// update account balance

const balanceTotal = document.getElementById('balance-total');

const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal =parseFloat(balanceTotalText); 
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotal.innerText = newBalanceTotal;
   
})

// handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function(){
   
    const withdrawInput = document.getElementById('withdraw-input');

    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    withdrawInput.value = '';
    
    // set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');

    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // update balance part 2

    // const balanceTotal = document.getElementById('balance-total');

    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal =parseFloat(balanceTotalText); 
    // const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // balanceTotal.innerText = newBalanceTotal;
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

})

