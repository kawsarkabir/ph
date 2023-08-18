document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-field");
  const prevDepositAmount = getTextElementValueById("deposit-total");
  const currentDepositTotal = prevDepositAmount + newDepositAmount;
  setTextElementValueById("deposit-total", currentDepositTotal);

  const prevBalanceTotal = getTextElementValueById('balance-total');
  const currentBalanceTotal = prevBalanceTotal + newDepositAmount;

  setTextElementValueById('balance-total', currentBalanceTotal);
});
