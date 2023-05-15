// deposit function
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    
    const previousDepositAmountElement = document.getElementById('total-deposit');
    const previousDepositAmount = parseFloat(previousDepositAmountElement.innerText);
    
    const totalDepositAmount = previousDepositAmount + newDepositAmount;
    previousDepositAmountElement.innerText = totalDepositAmount;

    const previousTotalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalance = parseFloat(previousTotalBalanceElement.innerText);
    
    const newTotalBalance = previousTotalBalance + newDepositAmount;
    previousTotalBalanceElement.innerText = newTotalBalance;

    depositField.value = '';
    
})

// withdraw function
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    
    const previousWithdrawAmountElement = document.getElementById('total-withdraw');
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountElement.innerText);

    const newTotalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    previousWithdrawAmountElement.innerText = newTotalWithdrawAmount;

    const previousTotalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalance = parseFloat(previousTotalBalanceElement.innerText);

    const newTotalBalance = previousTotalBalance - newWithdrawAmount;
    previousTotalBalanceElement.innerText = newTotalBalance;


    withdrawField.value = '';
})