document.addEventListener("DOMContentLoaded", function () {
    const imagenes = [
        "assets/adis.png",
        "assets/daici.png",
    ];

    const carouselInner = document.getElementById("carousel-inner");
    const carouselIndicators = document.getElementById("carousel-indicators");

    imagenes.forEach((img, index) => {
        // Crear slide
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) item.classList.add("active"); // La primera activa
        item.innerHTML = `<img src="${img}" class="d-block w-100" height="500" alt="Slide ${index + 1}">`;
        carouselInner.appendChild(item);

        // Crear indicador
        const button = document.createElement("button");
        button.type = "button";
        button.setAttribute("data-bs-target", "#carousel");
        button.setAttribute("data-bs-slide-to", index);
        button.setAttribute("aria-label", `Slide ${index + 1}`);
        if (index === 0) button.classList.add("active");
        carouselIndicators.appendChild(button);
    });
});