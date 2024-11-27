document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.skills-list');
    const leftBtn = document.querySelector('.scroll-btn.left');
    const rightBtn = document.querySelector('.scroll-btn.right');

    let scrollAmount = 0;
    const maxScroll = list.scrollWidth - list.clientWidth;

    rightBtn.addEventListener('click', () => {
        list.scrollTo({
            top: 0,
            left: (scrollAmount += 300),
            behavior: 'smooth'
        });

        if (scrollAmount >= maxScroll) {
            rightBtn.style.visibility = 'hidden';
        }
        leftBtn.style.visibility = 'visible';
    });

    leftBtn.addEventListener('click', () => {
        list.scrollTo({
            top: 0,
            left: (scrollAmount -= 300),
            behavior: 'smooth'
        });

        if (scrollAmount <= 0) {
            leftBtn.style.visibility = 'hidden';
        }
        rightBtn.style.visibility = 'visible';
    });

    // Initial button visibility
    if (scrollAmount <= 0) {
        leftBtn.style.visibility = 'hidden';
    }
    if (scrollAmount >= maxScroll) {
        rightBtn.style.visibility = 'hidden';
    }
});
