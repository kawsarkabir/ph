// step 1: add event listener to the deposit button
document.getElementById("deposit-btn").addEventListener("click", function () {
  // step 2: get the deposit amount from the deposit input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseInt(newDepositAmountString);

  // step 4: clear the deposit value
  depositField.value = "";

  if(isNaN(newDepositAmount)){
    alert('please provided a valid number')
    return;
  }

  // step 3: get the deposit amount
  const depositTotalElement = document.getElementById("deposit-total");
  const prevDepositTotalString = depositTotalElement.innerText;
  const prevDepositTotal = parseInt(prevDepositTotalString);

//   step 4: sum of prev and new deposit amount
  const currentDepositTotal = prevDepositTotal + newDepositAmount;

  // set the deposit total 
  depositTotalElement.innerText = currentDepositTotal;

  // step 5: get the balance current total
  const balanceTotalElement = document.getElementById('balance-total');
  const prevBalanceTotalString =balanceTotalElement.innerText;
  const prevBalanceTotal = parseInt(prevBalanceTotalString);

  // step 6: calculate curent total balance amount
   const currentBalanceTotal = prevBalanceTotal + newDepositAmount;

   // set the balance total 
   balanceTotalElement.innerText = currentBalanceTotal

  
});
