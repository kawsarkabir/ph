// step 1: add event listener to the deposit button
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseInt(newWithdrawAmountString);

  // cler the default value
  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("please provide a valid number");
    return;
  }

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const prevWithdrawTotalString = withdrawTotalElement.innerText;
  const prevWithdrawTotal = parseInt(prevWithdrawTotalString);

  // get the previous  balance total
  const balanceTotalElement = document.getElementById("balance-total");
  const prevBalanceTotalString = balanceTotalElement.innerText;
  const prevBalanceTotal = parseFloat(prevBalanceTotalString);

  if (newWithdrawAmount > prevBalanceTotal) {
    alert("Bank a ato TK nai !!");
    return;
  }

  //  sum of current withwraw amount
  const currentWithdrawTotal = prevWithdrawTotal + newWithdrawAmount;
  // set the withdraw amount
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // calculate current balance total
  const currentBalanceTotal = prevBalanceTotal - newWithdrawAmount;
  // set the current balance total
  balanceTotalElement.innerText = currentBalanceTotal;
});
