document.addEventListener('DOMContentLoaded', function() {
const body = document.querySelector('body');
const funFourth = document.querySelector('#fun-fourth');
funFourth.style.fontSize = '20px';
funFourth.style.margin = "20px"
funFourth.style.color = "red";
body.style.backgroundColor = 'black';
funFourth.style.textShadow = "1px 2px 12px yellow";
funFourth.style.lineHeight = '1.6';
funFourth.style.fontWeight = 'bold';
funFourth.style.letterSpacing = '2px';
// funFourth.style.fontWeight = 'bold';
const funtext = `alive! 🧮 Test your brain you explore the fascinating world of mathematics. 🧩 . 🎉 Aref numbers? 🧠`
const sepText = funtext.split('');
let countrep = 0;
const button = document.createElement('button');
button.innerHTML = 'Start Game';


button.style.padding = '10px';
button.style.margin = '20px';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
button.style.backgroundColor = 'green';
button.style.color = 'white';
button.style.fontSize = '20px';
button.style.fontWeight = 'bold';
button.style.textShadow = "1px 2px 12px yellow";
button.style.boxShadow = "1px 2px 12px yellow";
button.style.position = "fixed";
button.style.right = "20px";
button.style.bottom = "20px";
button.style.transition = "all 0.5s";
button.addEventListener('mouseover', function () {
    button.style.backgroundColor = 'darkgreen';
    button.style.transform = "translateY(-4px)";
});

button.addEventListener('mouseout', function () {
    button.style.backgroundColor = 'green';
    button.style.transform = "translateY(0px)";
});

button.addEventListener('click', function () {
    const audio = new Audio('files/aud2.wav');
    audio.play();
    setTimeout(function () {
        window.location.href = 'game.html';
    }, 4000);
});

const welcome = document.createElement('div');
const welcomeText = document.createElement('h1');
welcomeText.style.textAlign = 'center';
const marquee = document.createElement('marquee');
marquee.behavior = 'scroll';
marquee.scrollAmount = '10';
marquee.innerHTML = 'Welcome to Math Game';
welcomeText.appendChild(marquee);
welcome.appendChild(welcomeText);
welcome.style.position = 'fixed';
welcome.style.top = '50%';
welcome.style.left = '50%';
welcome.style.transform = 'translate(-50%, -50%)';
welcome.style.color = 'white';
welcome.style.fontSize = '40px';
welcome.style.fontWeight = 'bold';
welcome.style.textShadow = '1px 2px 12px yellow';
welcome.style.zIndex = '100';


function playText() {
    let i = 0;
    let text = '';
    let count = 0;
    
    setInterval(function () {
        if (i < sepText.length) {
            text += sepText[i];
            if (sepText[i] === '<') {
                count++;
            }
            if (count === 2 && sepText[i] === '>') {
                count = 0;
            }
            if (count === 0) {

                funFourth.innerHTML = text + "   ..🏹";
            }
            i++;
            window.scrollTo(0, document.body.scrollHeight);
        }
        else {
            // i = 0;
            // text = '';
            if (countrep === 0) {
                countrep++;
            }
            if (countrep === 1) {
                
                body.appendChild(button);
                body.appendChild(welcome);
            }
        }




    }, 100);
    

}


if (funFourth) {
    playText();
}
} );