
const controlBtnGrid = document.querySelector('.shop__control-btn--grid'),
    controlBtnBlock = document.querySelector('.shop__control-btn--block'),
    shopProduct = document.querySelector('.shop__product'),
    productItem = document.querySelectorAll('.product-item');

controlBtnGrid.addEventListener('click', function () {
    if (shopProduct.classList.contains('shop__product--block')) {
        shopProduct.classList.remove('shop__product--block');
        shopProduct.classList.add('shop__product--grid');
    }
    productItem.forEach(item => {
        item.classList.add('product-item__list');
    });
});

controlBtnBlock.addEventListener('click', function () {
    if (shopProduct.classList.contains('shop__product--grid')) {
        shopProduct.classList.remove('shop__product--grid');
        shopProduct.classList.add('shop__product--block');
    }
    productItem.forEach(item => {
        item.classList.remove('product-item__list');
    });
}); 