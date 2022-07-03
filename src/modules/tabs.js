const tabsBtn = document.querySelectorAll('.goods__tabs-control-btn');
const tabsContent = document.querySelectorAll('.goods__tabs-content-block');
const tabsControl = document.querySelector('.goods__tabs-control');

function hideTabContent() {
    tabsContent.forEach(item => {
        item.style.display = 'none';
    });

    tabsBtn.forEach(item => {
        item.classList.remove('goods__tabs-control-btn--active');
    });
}

function showTabsContent(i = 0) {
    tabsContent[i].style.display = 'block';
    tabsBtn[i].classList.add('goods__tabs-control-btn--active');
}

hideTabContent();
showTabsContent();

tabsControl.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('goods__tabs-control-btn')) {
        tabsBtn.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabsContent(i);
            }
        });
    }
});