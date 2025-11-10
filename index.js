document.addEventListener("DOMContentLoaded", function () {
    const imagenes = [
        "assets/adis.png",
        "assets/daici.png",
    ];

    document.getElementById("contacto").addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío por defecto
        const form = event.target;
        const data = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                mostrarAlerta("success", "¡Gracias por contactarnos! Te responderemos pronto.");
                form.reset();
            } else {
                mostrarAlerta("danger", "Hubo un error al enviar el mensaje. Intenta más tarde.");
            }
        }).catch(error => {
            mostrarAlerta("danger", "Error de red. Verifica tu conexión.");
        });
    });


    function mostrarAlerta(tipo, mensaje) {
        const iconos = {
            success: "check-circle-fill",
            warning: "exclamation-triangle-fill",
            danger: "exclamation-triangle-fill",
            info: "info-fill"
        };

        const colores = {
            success: "text-success",
            warning: "text-warning",
            danger: "text-danger",
            info: "text-info"
        };

        const alerta = document.createElement("div");
        alerta.className = `alert alert-${tipo} alert-dismissible fade show d-flex align-items-center mt-2`;
        alerta.style.maxWidth = "800px";
        alerta.style.fontSize = "0.9rem";
        alerta.style.wordWrap = "break-word";
        alerta.style.paddingTop = "70px";
        alerta.style.zIndex = "2000";

        alerta.innerHTML = `
    <svg style="z-index: 2000" class="bi flex-shrink-0 me-2 ${colores[tipo]}" width="20" height="20" role="img" aria-label="${tipo}">
        <use xlink:href="#${iconos[tipo]}"/>
    </svg>
    <div style="z-index: 2000">${mensaje}</div>
    <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>
  `;

        document.getElementById("alertContainer").appendChild(alerta);

        setTimeout(() => {
            alerta.classList.remove("show");
            alerta.classList.add("hide");
            setTimeout(() => alerta.remove(), 500);
        }, 6000);
    }


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