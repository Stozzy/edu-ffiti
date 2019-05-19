    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
    let lineColor = '';

window.addEventListener("load", () => {
//    const canvas = document.querySelector("#canvas");
//    const context = canvas.getContext("2d");

    //Resizing canvas
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //variables
    let painting = false;

    function startPos(e) {
        painting = true;
        draw(e);
    }

    function stopPos() {
        painting = false;
        context.beginPath();
    }

    function draw(e) {
        if (!painting) return;

        context.lineWidth = 10;
        context.lineCap = 'round';
        context.lineTo(e.clientX, e.clientY);

        context.stroke();
        context.strokeStyle = lineColor;
        context.beginPath();
        context.moveTo(e.clientX, e.clientY); //makes drawing smoother
    }

    //event listeners
    canvas.addEventListener('mousedown', startPos);
    canvas.addEventListener('mouseup', stopPos);
    canvas.addEventListener('mousemove', draw);
    
    console.log(canvas);
});

function clearCanvas() {
     //http://bencentra.com/code/2014/12/05/html5-canvas-touch-events.html
    canvas.width = canvas.width;
    lineColor = 'Black';
}

function changeStrokeColor(color) {
    switch (color) {
        case 'black':
            lineColor = 'Black';
            console.log(color);
            break;
        case 'blue':
            lineColor = 'Blue';
            console.log(color);
            break;
        case 'red':
            lineColor = 'Red';
            console.log(color);
            break;
    }
}


