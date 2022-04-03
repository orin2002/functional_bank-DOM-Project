
function getInputValue (inputId) {
    const getInput = document.getElementById(inputId);
    const getInputValue = getInput.value;
    getInput.value = '';
    return getInputValue;
}

document.getElementById('submit-btn').addEventListener('click',function(){
    debugger;
    const gmailField = getInputValue('gmail-field');
    const passField = getInputValue('pass-field');

    // validation 

    if (gmailField == 'admin@gmail.com' && passField == 'admin') {
        window.location.href = 'banking.html'
    }else{
        alert(' ব্রো ঠিকঠাক পাসওয়ার্ড দাও !')
    }

})