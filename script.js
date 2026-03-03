const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;

// Ajustar tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 200;

canvas.addEventListener('mousedown', () => drawing = true);
canvas.addEventListener('mouseup', () => { drawing = false; ctx.beginPath(); });
canvas.addEventListener('mousemove', draw);

function draw(e) {
    if (!drawing) return;
    ctx.lineWidth = document.getElementById('brushSize').value;
    ctx.lineCap = 'round';
    ctx.strokeStyle = document.getElementById('colorPicker').value;

    ctx.lineTo(e.clientX, e.clientY - 50); // Ajuste por el toolbar
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY - 50);
}

document.getElementById('clear').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Nota: Para conectar con Gemini, necesitarás una función que convierta 
// el canvas a Base64 y lo envíe a tu backend o a la API de Google.
