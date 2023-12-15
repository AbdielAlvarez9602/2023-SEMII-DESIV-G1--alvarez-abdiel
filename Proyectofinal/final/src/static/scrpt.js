// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Agrega un listener para ejecutar el código cuando el DOM esté cargado

    // Obtén referencias a los elementos del DOM
    const pyramidContainer = document.getElementById("pyramid-container");
    const storedPyramidsContainer = document.getElementById("stored-pyramids");

    // Lógica para generar la pirámide
    function generatePyramid() {
        pyramidContainer.innerHTML = ""; // Limpiar la pirámide anterior, si existe

        const pyramidHeight = prompt("Ingrese la altura de la pirámide (entre 1 y 50):");
        if (!pyramidHeight || isNaN(pyramidHeight) || pyramidHeight < 1 || pyramidHeight > 50) {
            alert("Ingrese una altura válida entre 1 y 50.");
            return;
        }

        // Lógica para generar la pirámide (puedes ajustar esto según tu necesidad)
        const pyramidLevels = [];
        for (let i = 0; i < pyramidHeight; i++) {
            const level = [];
            for (let j = 0; j <= i; j++) {
                level.push(Math.floor(Math.random() * 99) + 1);
            }
            pyramidLevels.push(level);
        }

        // Mock de la ruta con mayor peso (ajusta esto según tu lógica)
        const maxWeightPath = pyramidLevels.map(level => Math.max(...level));
        
        // Sumatoria de la ruta con mayor peso
        const maxWeightSum = maxWeightPath.reduce((acc, val) => acc + val, 0);

        // Mostrar la pirámide
        displayPyramid(pyramidLevels);

        // Enviar la pirámide al backend
        const pyramidData = {
            levels: pyramidLevels,
            maxWeightPath: maxWeightPath,
            maxWeightSum: maxWeightSum
        };

        fetch('/storePyramid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pyramidData),
        })
        .then(response => response.json())
        .then(data => console.log('Pyramid stored successfully:', data))
        .catch(error => console.error('Error storing pyramid:', error));
    }

    // Lógica para mostrar pirámides almacenadas
    function fetchStoredPyramids() {
        fetch('/getStoredPyramids')
        .then(response => response.json())
        .then(storedPyramids => {
            // Limpiar el contenido anterior
            storedPyramidsContainer.innerHTML = "";

            // Mostrar las pirámides almacenadas
            storedPyramids.forEach(pyramid => {
                const pyramidElement = document.createElement('div');
                pyramidElement.className = 'stored-pyramid';
                pyramidElement.textContent = JSON.stringify(pyramid);
                storedPyramidsContainer.appendChild(pyramidElement);
            });
        })
        .catch(error => console.error('Error fetching stored pyramids:', error));
    }

    // Función para mostrar la pirámide en el frontend
    function displayPyramid(levels) {
        levels.forEach(level => {
            const pyramidRow = document.createElement('div');
            pyramidRow.className = 'pyramid-row';

            level.forEach(value => {
                const pyramidBox = document.createElement('div');
                pyramidBox.className = 'pyramid-box';
                pyramidBox.textContent = value;
                pyramidRow.appendChild(pyramidBox);
            });

            pyramidContainer.appendChild(pyramidRow);
        });
    }

    // Asigna las funciones a los botones del frontend
    document.getElementById("generateButton").addEventListener("click", generatePyramid);
    document.getElementById("fetchButton").addEventListener("click", fetchStoredPyramids);
});