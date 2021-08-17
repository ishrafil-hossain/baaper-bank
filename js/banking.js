
function getInputAmount(id) {
    const inputId = document.getElementById(id);
    const inputValue = inputId.value;
    const inputAmount = parseFloat(inputValue);
    inputId.value = '';
    return inputAmount;
}

function getTextAmount(id, inputAmount) {
    // debugger;
    const textId = document.getElementById(id);
    const textValue = textId.innerText;
    const textAmount = parseFloat(textValue);
    textId.innerText = textAmount + inputAmount;
}

function updateBalance(yourAmount, add) {
    const balanceId = document.getElementById('balance-text');
    const balanceValue = balanceId.innerText;
    const totalBalance = parseFloat(balanceValue);
    if (add == true) {
        balanceId.innerText = totalBalance + yourAmount;
    }
    else {
        balanceId.innerText = totalBalance - yourAmount;
    }

}


document.getElementById('deposit-btn').addEventListener('click', function () {
    // input field amount 
    const totalDeposit = getInputAmount('deposit-input');

    // validation check 
    if (totalDeposit > 0) {
        //Set deposit text field amount 
        getTextAmount('deposit-text', totalDeposit);

        // Balance text field 
        updateBalance(totalDeposit, true);
    }
    else {
        alert('Please enter valid amount.Only positive number is valid.Text,Negative number,Empty number is invalid');
    }


});


document.getElementById('withdraw-btn').addEventListener('click', function () {
    // input field amount 
    const totalWithdraw = getInputAmount('withdraw-input');

    // validation check 
    if (totalWithdraw > 0) {
        //Set withdraw text field amount 
        getTextAmount('withdraw-text', totalWithdraw);

        // Balance text field 
        updateBalance(totalWithdraw, false);
    }
    else {
        alert('Please enter valid amount.Only positive number is valid.Text,Negative number,Empty number is invalid');
    }


})