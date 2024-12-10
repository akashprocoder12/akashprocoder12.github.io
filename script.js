const amazingui = document.querySelector('.amazingui');
const subjects = document.querySelector('.container');
let Text = "🎉 Welcome to the amazing quiz app! 🎉 Let's solve physics, math, and general science problems in a fun way! 🧠✨ Get ready to challenge yourself and learn new things! 🚀🔍📚"
let i = 0;
let text = "";
function writeText() {
    // Text = Text.slice(0, -1);
    text += Text[i];
    i++;
    amazingui.innerText = text;
    if (i < Text.length) {
        setTimeout(writeText, 10);
    }
    else {
        setTimeout(() => {
            amazingui.style.display = "none";
            subjects.style.display = "block";
            
        }, 500);
    }
}

const subjectsList = document.querySelectorAll('.subject');
let topic;
subjectsList.forEach(element => {
    element.addEventListener("click",function(){
        const audio = new Audio("files/aud2.wav");
        audio.play();
        topic = element.textContent;
        console.log("topic",topic);
        if (topic ==="Calculation"){
            window.location.href = "gameTwo/index.html"
        }
        else if (topic === "Basic Physics"){
            window.location.href = "gameOne/game.html"
        }
        
    })

    
});

writeText();