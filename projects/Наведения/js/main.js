const blocks = document.querySelectorAll(".block");
const gray = document.querySelector(".gray");

blocks.forEach((item) => {
    item.addEventListener("mouseover", () => {
        gray.style.backgroundColor = getComputedStyle(item).backgroundColor;
        item.addEventListener("mouseout", () => {
            gray.style.backgroundColor = "gray";
        })
    }); 
});


