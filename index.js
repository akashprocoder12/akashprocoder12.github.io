<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ayurveda Sidebar</title>
    <!-- Font Awesome Icons -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- Sidebar -->
    <div class="sidebar" id="sidebar">
      <div class="toggle-btn" id="toggle-btn">
        <i class="fas fa-bars"></i>
      </div>
      <nav class="menu">
        <ul>
          <a href="#home">
            <li><i class="fas fa-home"></i> <span>Home</span></li>
            </a>
          <a href="#study-material">
            <li><i class="fas fa-book"></i> <span>Study Material</span></li>
          </a>
          <a href="#question-paper">
          <li><i class="fas fa-file-alt"></i> <span>Question Paper</span></li>
        </a>
        <a href="#counselling">
          <li><i class="fas fa-comments"></i> <span>Counselling</span></li>
        </a>
        <a href="#notes">
          <li><i class="fas fa-sticky-note"></i> <span>Notes</span></li>
        </a>
        <a href="#blog">
          <li><i class="fas fa-blog"></i> <span>Blog</span></li>
        </a>
        <a href="#contact">
          <li><i class="fas fa-envelope"></i> <span>Contact</span></li>
        </a>
        </ul>
      </nav>
    </div>

    <!-- Main content area -->
    <div class="content">
      <section id="home">
        <h1>Welcome to Ayurveda with Ritika</h1>
        <h2>Featured Resources</h2>
        <h3>Top Notes - Exclusive Notes Only on Ayurveda with Ritika</h3>
        <p>
          Get access to the top notes on Ayurveda with Ritika. These notes are
          exclusively available on our platform.
        </p>
       
        <div class="social-media">
          
          <a href="https://www.instagram.com" target="_blank">
            <i class="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <i class="fab fa-youtube"></i> YouTube
          </a>
        </div>
      </section>
      <section id="study-material">
        <div class="div-container">
        <h1>Study Material</h1>
        <p>Get premium content on subscription</p>
      </div>
        <div class="div-flex">
          <div>
        <h2>1st Prof</h2>
        <ul>
          <li>Anatomy</li>
          <li>Physiology</li>
          <li>Charak</li>
          <li>AshtaKNG</li>
          <li>PV</li>
        </ul></div>
        <div>

        <h2>2nd Prof</h2>
        <ul>
          <li>DG</li>
          <li>RN R&B</li>
          <li>Charak</li>
          <li>Agad</li>
        </ul>
      </div>
      <div>

        <h2>3rd Prof</h2>
        <ul>
         <li>alu</li>
         <li>alu</li>
         <li>alu</li>
         <li>alu</li>
        </ul>
      </div>
      </div>
      <p>study materials are regularly updated</p>
      </section>
      <section id="question-paper">
        <div class="div-container">
        <h1>Question Papers</h1>
        <p>
          Get access to the question papers for all the subjects. These question
          papers are available for all the years.
        </p></div>

        <h3>NCISM MGGAV</h3>
        <ul>
          <li>1st Prof</li>
          <li>2nd Prof</li>
          <li>3rd Prof</li>
        </ul>
      </section>
      <section id="counselling">
        <h1>Counselling</h1>
      </section>
      <section id="notes">
        <h1>Notes</h1>
      </section>
      <section id="blog">
        <h1>Blog</h1>
      </section>
      <section id="contact">
        <h1>Contact</h1>
      </section>

    </div>

    <!-- JavaScript to toggle the sidebar -->
    <script>
      const sidebar = document.getElementById("sidebar");
      const toggleBtn = document.getElementById("toggle-btn");

      toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
      });
    </script>
  </body>
</html>
