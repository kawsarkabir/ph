document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const prevWithdrawAmount = getTextElementValueById("withraw-total");
  const currentWithdrawTotal = newWithdrawAmount + prevWithdrawAmount;
  setTextElementValueById("withdraw-total", currentWithdrawTotal);

  const prevBalanceTotal = getTextElementValueById("balance-total");
  const currentBalanceTotal = prevBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", currentBalanceTotal);
});
