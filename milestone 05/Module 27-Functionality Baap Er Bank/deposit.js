document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('input-field');
    const newDepositAmountString =  depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = ''

    if(isNaN(newDepositAmount)){
       alert('please provide a valid number')
       return;
    }

    // get the deposit amount
    const depositTotalElement = document.getElementById('deposit-total')
    const prevDepositAmountString = depositTotalElement.innerText;
    const prevDepositAmount = parseFloat(prevDepositAmountString)

    // get the balance 
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const prevBalanceTotalAmount = parseFloat(balanceTotalElementString);

    const currentTotalDepositAmount = prevDepositAmount + newDepositAmount;
    depositTotalElement.innerText = currentTotalDepositAmount;

    const currentTotalBalanceAmount = prevBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = currentTotalBalanceAmount;
})