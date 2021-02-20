// variables
const body = document.body;

const mouse = {
    x: null,
	y: null
};

const oldRipples = document.getElementsByTagName('div');

const button = document.getElementById('button');

// track mouse
window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

//innerHTML
window.addEventListener('click', function(event){
    const ripples = document.createElement('div');
    let randomSize = Math.random() * 400 + 100;
    ripples.style.top = mouse.y - randomSize/2 + 'px';
    ripples.style.left = mouse.x - randomSize/2 + 'px';
    ripples.style.width = randomSize + 'px';
    ripples.style.height = randomSize + 'px';
    body.appendChild(ripples);
});

//remove ripples

setInterval(function() {
    oldRipples[0].remove();
}, 4000);

//button

button.addEventListener('click', function() {
    if ( button.classList.contains('on') === false){
        button.classList.add('on');
        setInterval(function(){ 
            const ripples = document.createElement('div');
            ripples.style.top = Math.random() * 1080 + 'px';
            ripples.style.left = Math.random() * 1920 + 'px';
            let randomSize = Math.random() * 500;
            ripples.style.width = randomSize + 'px';
            ripples.style.height = randomSize + 'px';
            body.appendChild(ripples); 
        }, 25);
    } else if ( button.classList.contains('on') === true){
        button.classList.remove('on');
        clearInterval();
    }
});