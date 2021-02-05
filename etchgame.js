// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// Setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas.
const {width, height} = canvas;

// create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;
// write a draw function
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
// start the path


// write a handler for the keys
function handleClickKey(event) {
    hue += 1

    const arrowKeys = {
        'ArrowUp': true,
        'ArrowLeft': true,
        'ArrowRight': true,
        'ArrowDown': true
    }

    function updateCoors (keyPressed) {
        if (keyPressed.includes('Up')) {
            y -= MOVE_AMOUNT
        } else if (keyPressed.includes('Down')) {
            y += MOVE_AMOUNT;
        } else if (keyPressed.includes('Left')) {
            x -= MOVE_AMOUNT
        } else if (keyPressed.includes('Right')) {
            x += MOVE_AMOUNT
        }
    }

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);

    if(arrowKeys[event.key]) {
        event.preventDefault()

        // move our x and y values depending on what the user did
        updateCoors(event.key)
    }
   
    ctx.lineTo(x, y);
    ctx.stroke();
}

// clear /shke function
function handleClearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener(
            'animationend',
            function () {
                    console.log('Done the shake!');
                    canvas.classList.remove('shake');
            },
            { once: true }
    );
}

// listen for arrow keys
window.addEventListener('keydown', handleClickKey)
shakeButton.addEventListener('click', handleClearCanvas)

 


