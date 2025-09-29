document.addEventListener("DOMContentLoaded", () => {
    const flowers = document.querySelectorAll(".flowers img");
    const heartsContainer = document.querySelector(".hearts");

    // حركة الورد عند الضغط
    flowers.forEach(flower => {
        flower.addEventListener("click", () => {
            flower.style.transform = "scale(1.5) rotate(360deg)";
            setTimeout(() => {
                flower.style.transform = "scale(1) rotate(0deg)";
            }, 600);
        });
    });

    // إنشاء القلوب المتحركة
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }

    setInterval(createHeart, 500);
});