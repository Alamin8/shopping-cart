document.getElementById('phone-increase').addEventListener('click', function () {
    handlePhoneProduct(true)
})

document.getElementById('phone-decrease').addEventListener('click', function () {
    handlePhoneProduct(false)
})

document.getElementById('case-increase').addEventListener('click', function () {
    handleCaseProduct(true);
})

document.getElementById('case-decrease').addEventListener('click', function () {
    handleCaseProduct(false);
})

//for phone price
function handlePhoneProduct(isIncrease) {
    const phoneCount = document.getElementById('phone-count').value;
    const phoneCountNumber = parseInt(phoneCount);
    let phoneNewCount = phoneCountNumber;
    if (isIncrease == true) {
        phoneNewCount = phoneCountNumber + 1;
    }
    if (isIncrease == false && phoneNewCount > 0) {
        phoneNewCount = phoneCountNumber - 1;
    }
    document.getElementById('phone-count').value = phoneNewCount;
    document.getElementById('phone-price').innerText = phoneNewCount * 1219;
    totalPrice()
}
// for case price
function handleCaseProduct(isIncrease) {
    const caseCount = document.getElementById('case-count').value;
    const caseCountNumber = parseInt(caseCount);
    let caseNewCountNumber = caseCountNumber;
    if (isIncrease == true) {
        caseNewCountNumber = caseCountNumber + 1
    }
    if (isIncrease == false && caseNewCountNumber > 0) {
        caseNewCountNumber = caseCountNumber - 1;
    }
    document.getElementById('case-count').value = caseNewCountNumber;
    document.getElementById('case-price').innerText = caseNewCountNumber * 59;
    totalPrice()
}

function totalPrice() {
    const phoneCount = document.getElementById('phone-count').value;
    const phoneCountNumber = parseInt(phoneCount);
    const phoneTotal = phoneCountNumber * 1219;

    const caseCount = document.getElementById('case-count').value;
    const caseCountNumber = parseInt(caseCount);
    const caseTotal = caseCountNumber * 59;
    const subTotal = phoneTotal + caseTotal;
    document.getElementById('sub-total').innerText = subTotal;
    const tax = (subTotal * 5) / 100;
    document.getElementById('tax').innerText = tax;
    const total = subTotal + tax;
    document.getElementById('total').innerText = total;
}

