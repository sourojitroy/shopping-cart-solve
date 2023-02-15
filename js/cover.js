document.getElementById('btn-cover-plus').addEventListener('click', function () {
    const newCoverCountNumber= coverCount('cover-count',true);
    coverCountAmount(newCoverCountNumber,'cover-total');

    calculateTotalPrice();
})
document.getElementById('btn-cover-minus').addEventListener('click', function () {
    const newCoverCountNumber= coverCount('cover-count',false);
    coverCountAmount(newCoverCountNumber,'cover-total');

    calculateTotalPrice();
})