document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const photos = document.querySelectorAll(".photo__container");

    let currentIndex = 0;
    const visibleItems = 4;
    const totalItems = photos.length;

    const cloneFirstItems = () => {
        const itemsToClone = Array.from(photos).slice(0, visibleItems);
        itemsToClone.forEach(item => {
            const clone = item.cloneNode(true);
            carousel.appendChild(clone);
        });
    };

    cloneFirstItems();
    const allItems = document.querySelectorAll(".photo__container");

    function updateVisibility() {
        allItems.forEach((item, index) => {
            const start = currentIndex;
            const end = currentIndex + visibleItems;

            if (index >= start && index < end) {
                item.classList.remove("not__active");
            } else {
                item.classList.add("not__active");
            }
        });

        if (currentIndex >= totalItems) {
            currentIndex = 0;
            carousel.style.transition = 'none';
            updateVisibility();
        }
    }

    nextBtn.addEventListener("click", function() {
        currentIndex++;
        updateVisibility();
    });

    prevBtn.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateVisibility();
    });

    updateVisibility();
})