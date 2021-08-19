
function getInputValue(inputId) {
    const depositInput = document.getElementById(inputId);
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText);
    // clear the input field 
    depositInput.value = ''
    return depositInputAmount;
}

function updateTotal(totalField, amount) {
    const depositTotal = document.getElementById(totalField);
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText)
    depositTotal.innerText = depositTotalAmount + amount;
}

function validate() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    return balanceTotalAmount;
}

function updateBalance(depositInputAmount, isAdd) {
    const balanceTotalAmount = validate();
    const balanceTotal = document.getElementById('balance-total');
    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalAmount + depositInputAmount;
    } else {
        balanceTotal.innerText = balanceTotalAmount - depositInputAmount;
    }
}


document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInputAmount = getInputValue('deposit-input')

    if (depositInputAmount > 0) {
        updateTotal('deposit-total', depositInputAmount);
        updateBalance(depositInputAmount, true);
        document.getElementById('invalid-deposit').style.display = 'none';
    } else {
        document.getElementById('invalid-deposit').style.display = 'block';
    }
})


document.getElementById('withdraw-button').addEventListener('click', function () {

    const balanceTotalAmount = validate();
    const withdrawInputAmount = getInputValue('withdraw-input');
    if (withdrawInputAmount > 0) {
        if (withdrawInputAmount <= balanceTotalAmount) {
            updateTotal('withdraw-total', withdrawInputAmount);
            updateBalance(withdrawInputAmount, false);
            document.getElementById('invalid-withdraw2').style.display = 'none';
            document.getElementById('invalid-withdraw').style.display = 'none';
        } else {
            document.getElementById('invalid-withdraw2').style.display = 'block';
            document.getElementById('invalid-withdraw').style.display = 'none';
        }
    } else {
        document.getElementById('invalid-withdraw').style.display = 'block';
        document.getElementById('invalid-withdraw2').style.display = 'none';
    }
})

/*
document.getElementById('deposit-input').addEventListener('click', function () {
    document.getElementById('invalid').style.display = 'none';
})
document.getElementById('withdraw-input').addEventListener('click', function () {
    document.getElementById('invalid2').style.display = 'none';
}) */


// function validInvalid(inputField, messageId) {
//     document.getElementById(inputField).addEventListener('click', function () {
//         document.getElementById(messageId).style.display = 'none';
//     })
// }

// validInvalid('deposit-input', 'invalid-deposit')
// validInvalid('withdraw-input', 'invalid-withdraw')
// validInvalid('withdraw-input', 'invalid-withdraw2')