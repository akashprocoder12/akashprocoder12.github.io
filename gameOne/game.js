document.addEventListener("DOMContentLoaded", () => {
  const question = document.getElementById("question");
  const options = document.querySelectorAll(".option");
  const hint = document.getElementById("hint");
  const celebration = document.getElementById("celebration");
  const crying = document.getElementById("crying");
  const timeLeft = document.getElementById("time-left");
  const scoreDisplay = document.getElementById("score");
  const mistakesDisplay = document.getElementById("mistakes");
 
  let totalTime = 240; 
  let hintTime = 60; 
  let score = 0;
  let mistakes = 0;
  let currentQuestionIndex = 0;

  // Array of question objects
  // Array of physics-based questions for 12th-grade level
  const questions = [
    {
      question: "A train travels 120 km in 2 hours. What is its average speed?",
      options: ["40 km/h", "50 km/h", "60 km/h", "70 km/h"],
      correctAnswer: "60 km/h",
      hint: "Speed = distance ÷ time.",
    },
    {
      question: "If a car accelerates from rest at 5 m/s², what is its velocity after 10 seconds?",
      options: ["25 m/s", "50 m/s", "75 m/s", "100 m/s"],
      correctAnswer: "50 m/s",
      hint: "Use the equation: v = u + at, where u = 0.",
    },
    {
      question: "What is the work done when a force of 10 N moves an object 5 m in the direction of the force?",
      options: ["10 J", "25 J", "50 J", "100 J"],
      correctAnswer: "50 J",
      hint: "Work = force × distance.",
    },
    {
      question: "A ball is dropped from a height of 20 m. How long will it take to hit the ground? (g = 10 m/s²)",
      options: ["1 second", "2 seconds", "4 seconds", "8 seconds"],
      correctAnswer: "2 seconds",
      hint: "Use the equation: h = 0.5 × g × t².",
    },
    {
      question: "A 100 W bulb is used for 5 hours. How much energy does it consume? (1 W = 1 J/s)",
      options: ["500 J", "5000 J", "180000 J", "1800000 J"],
      correctAnswer: "1800000 J",
      hint: "Energy = power × time (in seconds).",
    },
    {
      question: "A 1500 kg car moving at 20 m/s comes to rest in 5 seconds. What is the force applied by the brakes?",
      options: ["3000 N", "6000 N", "15000 N", "30000 N"],
      correctAnswer: "6000 N",
      hint: "Use F = ma; find acceleration using a = (v - u) / t.",
    },
    {
      question: "A cyclist travels 20 km in 30 minutes. What is their speed in m/s?",
      options: ["9.26 m/s", "11.11 m/s", "13.33 m/s", "15 m/s"],
      correctAnswer: "11.11 m/s",
      hint: "Convert km/h to m/s by multiplying by (1000/3600).",
    },
    {
      question: "A body of mass 5 kg is lifted to a height of 10 m. What is the potential energy gained? (g = 10 m/s²)",
      options: ["250 J", "500 J", "1000 J", "2000 J"],
      correctAnswer: "500 J",
      hint: "Use PE = mgh.",
    },
    {
      question: "Two resistors of 4 Ω and 6 Ω are connected in series. What is the total resistance?",
      options: ["2.4 Ω", "5 Ω", "10 Ω", "24 Ω"],
      correctAnswer: "10 Ω",
      hint: "For series connections, add the resistances directly.",
    },
    {
      question: "A car accelerates uniformly from 10 m/s to 30 m/s over a distance of 200 m. What is its acceleration?",
      options: ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"],
      correctAnswer: "2 m/s²",
      hint: "Use v² = u² + 2as to find acceleration.",
    },
    {
      question: "A machine does 1000 J of work in 5 seconds. What is its power output?",
      options: ["50 W", "100 W", "200 W", "500 W"],
      correctAnswer: "200 W",
      hint: "Power = work done ÷ time.",
    },
    {
      question: "If the kinetic energy of a body is 200 J and its mass is 5 kg, what is its velocity?",
      options: ["4 m/s", "8 m/s", "10 m/s", "16 m/s"],
      correctAnswer: "8 m/s",
      hint: "Use KE = 0.5 × m × v² to find velocity.",
    },
    {
      question: "A stone is thrown vertically upward with a speed of 20 m/s. What is the maximum height it reaches? (g = 10 m/s²)",
      options: ["10 m", "20 m", "30 m", "40 m"],
      correctAnswer: "20 m",
      hint: "Use v² = u² - 2gh, where v = 0 at the highest point.",
    },
    {
      question: "A truck of mass 2000 kg is moving with a velocity of 15 m/s. What is its momentum?",
      options: ["15000 kg·m/s", "30000 kg·m/s", "60000 kg·m/s", "75000 kg·m/s"],
      correctAnswer: "30000 kg·m/s",
      hint: "Momentum = mass × velocity.",
    },
    {
      question: "An electric heater uses 1000 W of power for 30 minutes. How much energy is consumed in kWh?",
      options: ["0.5 kWh", "1.0 kWh", "1.5 kWh", "2.0 kWh"],
      correctAnswer: "0.5 kWh",
      hint: "Convert time to hours and use Energy = Power × Time.",
    },
    {
      question: "A body moves with a uniform acceleration of 2 m/s² for 5 seconds. If it starts from rest, what is the distance traveled?",
      options: ["25 m", "50 m", "75 m", "100 m"],
      correctAnswer: "25 m",
      hint: "Use s = ut + 0.5 × a × t², where u = 0.",
    },
    {
      question: "A force of 10 N is applied at an angle of 60° to move a block 5 m. What is the work done?",
      options: ["25 J", "50 J", "75 J", "100 J"],
      correctAnswer: "25 J",
      hint: "Use Work = Force × Distance × cos(θ).",
    },
    {
      question: "A spring with a spring constant of 200 N/m is compressed by 0.1 m. What is the potential energy stored in the spring?",
      options: ["1 J", "2 J", "3 J", "4 J"],
      correctAnswer: "1 J",
      hint: "Use PE = 0.5 × k × x².",
    },
    {
      question: "What is the velocity of sound in air at room temperature (approx. 20°C)?",
      options: ["330 m/s", "343 m/s", "350 m/s", "360 m/s"],
      correctAnswer: "343 m/s",
      hint: "Standard value; memorize it.",
    },
    {
      question: "A body of mass 10 kg is moving at a velocity of 5 m/s. What is its kinetic energy?",
      options: ["100 J", "125 J", "250 J", "500 J"],
      correctAnswer: "125 J",
      hint: "Use KE = 0.5 × m × v².",
    },
    // Add 80 more questions following the same format
  ];


  // Start the timer
  const timerInterval = setInterval(() => {
    if (totalTime > 0) {
      totalTime--;
      updateTime();
    } else {
      window.location.href = "gameover.html";
      clearInterval(timerInterval);
      alert("Time's up! The correct answer was: " + questions[currentQuestionIndex].correctAnswer);
    }
  }, 1000);

  // Update the timer display
  function updateTime() {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    timeLeft.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    // Show hint after 1 minute
    if (totalTime === 180) {
      hint.textContent = questions[currentQuestionIndex].hint;
      hint.classList.remove("hidden");
    }
  }

  
  options.forEach((option) => {
    option.addEventListener("click", () => {
      if (option.textContent === questions[currentQuestionIndex].correctAnswer) {
        const audio = new Audio("../files/correct.wav");
        audio.play();
        score++;
        scoreDisplay.textContent = score;
        celebration.classList.remove("hidden");
        crying.classList.add("hidden");
        
      } else {
        crying.classList.remove("hidden");
        const audio = new Audio("../files/incorrect.wav");
        audio.play();
        mistakes++;
        mistakesDisplay.textContent = mistakes;
        
      }
      setTimeout(() => {
        nextQuestion();
      }, 600);
    });
  });

  
  function nextQuestion() {
    celebration.classList.add("hidden");
    crying.classList.add("hidden");
    hint.classList.add("hidden");

    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      totalTime = 240; 
      
      const currentQuestion = questions[currentQuestionIndex];
      question.textContent = `${currentQuestionIndex+1 }.  ${questions[currentQuestionIndex].question}`;
      options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
      });
    } else {
      alert("Game over! Your final score is: " + score);
      clearInterval(timerInterval);
    }
  }

  // Load the first question on page load
  function loadFirstQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
    question.textContent = `${currentQuestionIndex+1 } .  ${questions[currentQuestionIndex].question}`;
    options.forEach((option, index) => {
      option.textContent = currentQuestion.options[index];
    });
  }

  loadFirstQuestion();
});
