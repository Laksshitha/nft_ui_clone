document.addEventListener("scroll", function() {
    const nftSection = document.querySelector("#nft-collections");
    const collections = nftSection.querySelectorAll(".collection");

    const nftSectionPosition = nftSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (nftSectionPosition < screenPosition && nftSectionPosition > 0) {
        collections.forEach((collection) => {
            collection.classList.add("show");
        });
    } else {
        collections.forEach((collection) => {
            collection.classList.remove("show");
        });
    }
});

/* slide 3 */

document.addEventListener("DOMContentLoaded", function() {
    const paginationItems = document.querySelectorAll(".pagination span");

    paginationItems.forEach(item => {
        item.addEventListener("click", function() {
            // Remove active class from all pagination items
            paginationItems.forEach(el => el.classList.remove("active"));
            // Add active class to the clicked item
            this.classList.add("active");
            
            // Additional code to change content based on the page can be added here
            // For example, loading different NFTs or hiding/showing items.
        });
    });
});

document.querySelectorAll(".nft-item").forEach(item => {
    item.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.05)";
        this.style.transition = "transform 0.3s ease";
    });

    item.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
    });
});


document.querySelector('.btn-primary').addEventListener('click', function() {
    alert('Learn more button clicked!');
});

