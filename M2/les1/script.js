const canvas = document.getElementById('myCanvas');
const g = canvas.getContext('2d');

g.strokeStyle = "darkgreen";
g.lineWidth = 5;
g.fillStyle = "#a8d8ff";
g.fillRect(0, 0, 1000, 1000);
g.fillStyle = "green";

g.beginPath();
g.moveTo(150, 100);
g.lineTo(150, 700);
g.lineTo(850, 700);
g.lineTo(850, 100);
g.lineTo(725, 300);
g.lineTo(800, 500);
g.lineTo(500, 900);
g.lineTo(600, 700);
g.lineTo(500, 150);
g.lineTo(400, 700);
g.lineTo(500, 900);
g.lineTo(200, 500);
g.lineTo(275, 300);
g.lineTo(150, 100);
g.closePath();

g.fill();
g.stroke();

function drawCircle(x, y, r, fillColor, strokeColor = 'black') {
    g.beginPath();
    g.arc(x, y, r, 0, Math.PI * 2);
    g.fillStyle = fillColor;
    g.fill();
    g.lineWidth = 2;
    g.strokeStyle = strokeColor;
    g.stroke();
}

drawCircle(525, 400, 25, 'red');
drawCircle(480, 330, 20, 'yellow');
drawCircle(510, 490, 25, 'cyan');
drawCircle(420, 650, 30, 'purple');
drawCircle(560, 550, 22, 'lightgreen');
drawCircle(460, 540, 21, 'indigo');
drawCircle(460, 600, 26, 'blue');
drawCircle(588, 640, 26, 'darkred');

function drawTriangle(x1, y1, x2, y2, x3, y3, fillColor, strokeColor = 'black') {
    g.beginPath();
    g.moveTo(x1, y1);
    g.lineTo(x2, y2);
    g.lineTo(x3, y3);
    g.closePath();
    g.fillStyle = fillColor;
    g.fill();
    g.lineWidth = 3;
    g.strokeStyle = strokeColor;
    g.stroke();
}

drawTriangle(500, 125, 470, 250, 530, 250, '#ffd700', '#b8860b');