document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('please provided a valid number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const prevWithdrawAmountString = withdrawTotalElement.innerText;
    const prevWithdrawAmount = parseFloat(prevWithdrawAmountString);

    const balanceTotalElement = document.getElementById('balance-total');
    const prevBalanceTotalAmountString = balanceTotalElement.innerText;
    const prevBalanceTotalAmount = parseFloat(prevBalanceTotalAmountString);

    if(newWithdrawAmount>prevBalanceTotalAmount){
        alert('taka nai eto jaw')
        return;
    }
    const currentWithdrawTotal = prevWithdrawAmount + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentTotalBalanceAmount = prevBalanceTotalAmount - newWithdrawAmount;
    balanceTotalElement.innerText = currentTotalBalanceAmount; 
})