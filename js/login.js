// handle deposit button 
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-amount');
    const newDepositAmountText = depositAmount.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // update deposite total 
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;
    // // update balance deposite
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal =parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText =newBalanceTotal;
    // clear the deposit input field 
    depositAmount.value = '';
});
// handle withdraw button 
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountText= withdrawAmount.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);
    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newWithdrawBalanceTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawBalanceTotal;
    // update balance withraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousBalanceText = parseFloat(balanceText);
    const newBalanceTotal = previousBalanceText - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

     // clear the deposit input field 
     withdrawAmount.value = '';
})