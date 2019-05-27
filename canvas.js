    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
    let lineColor = '';

window.addEventListener("load", () => {

    //Resizing canvas
    canvas.height = 800;
    canvas.width = 1900;

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
        context.lineTo(e.clientX, (e.clientY-70));//-70 is the offset to adjust for navbar height

        context.stroke();
        context.strokeStyle = lineColor;
        context.moveTo(e.clientX, (e.clientY-70)); //makes drawing smoother
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


