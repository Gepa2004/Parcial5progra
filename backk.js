document.addEventListener("DOMContentLoaded", function () {
    const botonTema = document.getElementById("cambiarTema");
    
    botonTema.addEventListener("click", function () {
        window.location.href = "https://www.salud.gob.sv/autoridades-de-salud-informan-sobre-la-situacion-del-dengue-en-el-salvador/"; 
    });   

    // Crear el custom element
    class AlertaDengue extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' }); // Crea un Shadow DOM
        }

        connectedCallback() {
            // Contenido del custom element
            this.shadowRoot.innerHTML = `
                <style>
                    alerta-dengue {
                        display: block;
                        margin: 20px auto;
                        padding: 10px;
                        background-color: rgba(255, 0, 21, 0.8);
                        color: white;
                        border-radius: 8px;
                        font-size: 16px;
                        text-align: center;
                    }
                </style>
                <span><strong>¡Atención!</strong> El dengue es una enfermedad transmitida por el mosquito Aedes. ¡Toma precauciones!</span>
            `;
        }
    }

    // Registro del custom element
    customElements.define('alerta-dengue', AlertaDengue);

    // Funcionalidad para insertar el custom element en el HTML
    const alerta = document.createElement('alerta-dengue');
    const contenidoDiv = document.querySelector('.contenido');
    contenidoDiv.insertBefore(alerta, contenidoDiv.firstChild); // Insertar el custom element antes del contenido principal

    // Funcionalidad de las imágenes
    const imagenes = document.querySelectorAll("#lugares img");
    imagenes.forEach(img => {
        img.addEventListener("click", function () {
            alert("¡Recuerda tomar medidas de prevención contra el dengue!");
        });
    });
});
