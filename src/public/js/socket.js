const socket = io();

socket.on("connect", () => {
    console.log("Conectado a Socket.io");
});

socket.on("serviceCreated", () => {
    loadServices();
});

socket.on("serviceUpdated", () => {
    loadServices();
});

socket.on("serviceDeleted", () => {
    loadServices();
});

async function loadServices() {

    try {

        const response = await fetch("/api/services");

        const data = await response.json();

        const container =
            document.querySelector("#services-container");

        container.innerHTML = "";

        data.services.forEach(service => {

            const card = document.createElement("div");

            card.classList.add("service-card");

            card.dataset.id = service._id;

            card.innerHTML = `
                <h2>${service.name}</h2>

                <p>${service.description}</p>

                <p>
                    Duración: ${service.duration} minutos
                </p>

                <p>
                    Precio: $${service.price}
                </p>

                <p>
                    Categoría: ${service.category}
                </p>

                <p>
                    ${
                        service.available
                            ? "Disponible"
                            : "No disponible"
                    }
                </p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error(
            "Error actualizando servicios:",
            error
        );
    }
}