function coverCount(coverId, isIncrease) {
    const coverCountField = document.getElementById(coverId);
    const covercountString = coverCountField.value;
    const previousCoverCount = parseInt(covercountString);

    let newCoverCount;

    if (isIncrease) {
        newCoverCount = previousCoverCount + 1;
    }
    else {
        newCoverCount = previousCoverCount - 1;
    }
    coverCountField.value = newCoverCount;
    return newCoverCount;
}

function coverCountAmount(newCoverCountNumber, coverTotalID) {
    let coverCountTotal;
    if (coverTotalID === 'cover-total') {
        coverCountTotal = newCoverCountNumber * 59;
    }
    else {
        coverCountTotal = newCoverCountNumber * 1219;
    }
    const coverCountTotalShow = document.getElementById(coverTotalID);
    coverCountTotalShow.innerText = coverCountTotal;
    return coverCountTotal;
}

function itemstotalCount(paymentID) {
    const itemtotalCountElement = document.getElementById(paymentID);
    const itemtotalCountString = itemtotalCountElement.innerText;
    const itemtotalCount = parseInt(itemtotalCountString);
    return itemtotalCount;
}
function calculateTotalPrice() {
    const currentPhoneTotal = itemstotalCount('phone-total');
    const currentCoverTotal = itemstotalCount('cover-total');

    const currentSubTotal = currentPhoneTotal + currentCoverTotal;
    setTotalValue('sub-total', currentCoverTotal);

    const currenTaxTotalString= (currentSubTotal*0.1).toFixed(2);
    const currenTaxTotal=parseFloat(currenTaxTotalString);
    setTotalValue('tax-total', currenTaxTotal);

    const totalAmount=currenTaxTotal+currentSubTotal;
    setTotalValue('amount-total', totalAmount);
}

function setTotalValue(totalID, value){
    const setSubTotal = document.getElementById(totalID);
    setSubTotal.innerText = value;
}