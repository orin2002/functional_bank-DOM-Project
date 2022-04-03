function getInputValue (inputId) {
    const inputField =  document.getElementById(inputId);
    const inputValue = inputField.value;
    const parseInputValue = parseFloat(inputValue);
    inputField.value = '';
    return parseInputValue;
}

function setValue (textId,fromInput) {
    const textField = document.getElementById(textId);
    const getText = textField.innerText;
    const parsingText = parseFloat(getText);
    textField.innerText = parsingText + fromInput
}

function getCurrentBalance () {
    const balanceId = document.getElementById('main-account-balance');
    const prevBalance = balanceId.innerText;
    const parseBalance = parseFloat(prevBalance);
    return parseBalance;
}

function setBalance (fromInputBalance,addOrNot) {
    const balanceId = document.getElementById('main-account-balance');
    const parseBalance = getCurrentBalance();
    if (addOrNot == true) {
        const setNewBalance = parseBalance + fromInputBalance;
        balanceId.innerText = setNewBalance;    
    }else{
        const setNewBalance = parseBalance - fromInputBalance;
        balanceId.innerText = setNewBalance;  
    }
}


document.getElementById('deposit-btn').addEventListener('click',function(){
    const input = getInputValue('deposit-input');
    // validation
    if (input > 0) {
        const updateDeposit = setValue('deposit-text',input);
        const setInBalance = setBalance(input,true);
    }

})

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const input = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (input > 0 && currentBalance > input) {
        const updateWithdraw = setValue('withdraw-main',input);
        const reduceBalance = setBalance(input,false);
    }else{
        alert('খুব শখ না ব্রো ? ব্যালাঞ্চের থেকে বেশি টাকা তোলার ? :) ')
    }
    
})