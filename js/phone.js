document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneCountNumber= coverCount('phone-count',true);
    coverCountAmount(newPhoneCountNumber,'phone-total');

    calculateTotalPrice();
    

})
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneCountNumber= coverCount('phone-count',false);
    coverCountAmount(newPhoneCountNumber,'phone-total');

    calculateTotalPrice();
})