// deposite function

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = document.getElementById('deposit-amount');
    
    depositAmount.innerText = depositInput.value;
    depositInput.value = '';

    const totalAmount = depositInput.value + depositAmount.innerText;
    return totalAmount;
})