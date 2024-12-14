import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

declare var Typed: any;
declare var ScrollReveal: any;

@Component({
  selector: 'app-portfolio-details',
  encapsulation: ViewEncapsulation.None,
  template: `
    <link
      rel="icon"
      type="image/x-icon"
      href="src/assets/assets/images/favicon.png"
    />
    <div class="container">
      <!-- --------------- HEADER --------------- -->
      <nav id="header">
        <div class="nav-logo">
          <p class="nav-name">DKG</p>
          <span>.</span>
        </div>
        <div class="nav-menu" id="myNavMenu">
          <ul class="nav_menu_list">
            <li class="nav_list">
              <a href="#home" class="nav-link active-link">Home</a>
              <div class="circle"></div>
            </li>
            <li class="nav_list">
              <a href="#about" class="nav-link">About</a>
              <div class="circle"></div>
            </li>
            <li class="nav_list">
              <a href="#projects" class="nav-link">Projects</a>
              <div class="circle"></div>
            </li>
            <li class="nav_list">
              <a href="#contact" class="nav-link">Contact</a>
              <div class="circle"></div>
            </li>
          </ul>
        </div>
        <div class="nav-button">
          <button class="btn">
            Download CV <i class="uil uil-file-alt"></i>
          </button>
        </div>
        <div class="nav-menu-btn">
          <i class="uil uil-bars" onclick="myMenuFunction()"></i>
        </div>
      </nav>

      <!-- -------------- MAIN ---------------- -->
      <main class="wrapper">
        <!-- -------------- FEATURED BOX ---------------- -->
        <section class="featured-box" id="home">
          <div class="featured-text">
            <div class="featured-text-card">
              <span>Deepak Kumar</span>
            </div>
            <div class="featured-name">
              <p>
                I'm <span class="typedText"></span>
                <span id="typed-output"></span>
              </p>
            </div>

            <div class="featured-text-info">
              <p>
                Experienced frontend developer with a passion for creating
                visually stunning and user-friendly websites.
              </p>
            </div>
            <div class="featured-text-btn">
              <button class="btn blue-btn">Hire Me</button>
              <button class="btn">
                Download CV <i class="uil uil-file-alt"></i>
              </button>
            </div>
            <div class="social_icons">
              <div class="icon"><i class="uil uil-instagram"></i></div>
              <div class="icon"><i class="uil uil-linkedin-alt"></i></div>
              <div class="icon"><i class="uil uil-dribbble"></i></div>
              <div class="icon"><i class="uil uil-github-alt"></i></div>
            </div>
          </div>
          <div class="featured-image">
            <div class="image">
              <img
                src="../../../assets/assets/images/avatar.png"
                alt="avatar"
              />
            </div>
          </div>
          <div class="scroll-icon-box">
            <a href="#about" class="scroll-btn">
              <i class="uil uil-mouse-alt"></i>
              <p>Scroll Down</p>
            </a>
          </div>
        </section>
        <!-- -------------- ABOUT BOX ---------------- -->
        <section class="section" id="about">
          <div class="top-header">
            <h1>About Me</h1>
          </div>
          <div class="row">
            <div class="col">
              <div class="about-info">
                <h3>My introduction</h3>
                <p>
                  I am well-versed in HTML, CSS and JavaScript , and other
                  cutting edge frameworks and libraries,which allows me to
                  implement interactive features. Additionally, I have
                  experirence working with content management systems (CMS) like
                  WordPress.
                </p>
                <div class="about-btn">
                  <button class="btn">
                    Download CV <i class="uil uil-import"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="skills-box">
                <div class="skills-header">
                  <h3>Frontend</h3>
                </div>
                <div class="skills-list">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Bootstrap</span>
                  <span>JavaScript</span>
                  <span>Vue</span>
                  <span>React</span>
                  <span>Angular</span>
                </div>
              </div>
              <div class="skills-box">
                <div class="skills-header">
                  <h3>Backend</h3>
                </div>
                <div class="skills-list">
                  <span>PHP</span>
                  <span>JAVA</span>
                  <span>Python</span>
                  <span>C++</span>
                </div>
              </div>
              <div class="skills-box">
                <div class="skills-header">
                  <h3>Database</h3>
                </div>
                <div class="skills-list">
                  <span>MySQL</span>
                  <span>PostgreSQL</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- -------------- EDUCATION BOX ---------------- -->
        <section class="section" id="education">
          <div class="top-header">
            <h1>Education</h1>
          </div>
          <div class="row">
            <div class="col">
              <div class="education-info">
                <h3>Bachelor's in Computer Science</h3>
                <p><strong>University:</strong> Example University</p>
                <p><strong>Year:</strong> 2015 - 2019</p>
                <p>
                  <strong>Description:</strong> Focused on software development,
                  algorithms, and data structures. Completed projects in web
                  development and machine learning.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="education-info">
                <h3>Master's in Software Engineering</h3>
                <p><strong>University:</strong> Example University</p>
                <p><strong>Year:</strong> 2020 - 2022</p>
                <p>
                  <strong>Description:</strong> Specialized in full-stack web
                  development, cloud computing, and data science. Contributed to
                  open-source projects and developed several web applications.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="education-info">
                <h3>PhD in Artificial Intelligence</h3>
                <p><strong>University:</strong> Example University</p>
                <p><strong>Year:</strong> 2023 - Present</p>
                <p>
                  <strong>Description:</strong> Research in machine learning,
                  deep learning, and AI algorithms. Focus on neural networks and
                  AI-driven applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- -------------- PROJECT BOX ---------------- -->

        <section class="section" id="projects">
          <div class="top-header">
            <h1>Projects</h1>
          </div>
          <div class="project-container">
            <div class="project-box">
              <i class="uil uil-briefcase-alt"></i>
              <h3>Completed</h3>
              <label>15+ Finished Projects</label>
            </div>
            <div class="project-box">
              <i class="uil uil-users-alt"></i>
              <h3>Clients</h3>
              <label>25+ Happy Clients</label>
            </div>
            <div class="project-box">
              <i class="uil uil-award"></i>
              <h3>Experience</h3>
              <label>7+ Years in the field</label>
            </div>
          </div>
        </section>

        <!-- -------------- CONTACT BOX ---------------- -->

        <section class="section" id="contact">
          <div class="top-header">
            <h1>Get in touch</h1>
            <span>Do you have a project in your mind, contact me here</span>
          </div>
          <div class="row">
            <div class="col">
              <div class="contact-info">
                <h2>Find Me <i class="uil uil-corner-right-down"></i></h2>
                <p><i class="uil uil-envelope"></i> Email: johndoe.com</p>
                <p><i class="uil uil-phone"></i> Tel: +250 708 770 000</p>
              </div>
            </div>
            <div class="col">
              <div class="form-control">
                <div class="form-inputs">
                  <input type="text" class="input-field" placeholder="Name" />
                  <input type="text" class="input-field" placeholder="Email" />
                </div>
                <div class="text-area">
                  <textarea placeholder="Message"></textarea>
                </div>
                <div class="form-button">
                  <button class="btn">
                    Send <i class="uil uil-message"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <!-- --------------- FOOTER --------------- -->
      <footer>
        <div class="top-footer">
          <p>Deepak Kumar .</p>
        </div>
        <div class="middle-footer">
          <ul class="footer-menu">
            <li class="footer_menu_list">
              <a href="#home">Home</a>
            </li>
            <li class="footer_menu_list">
              <a href="#about">About</a>
            </li>
            <li class="footer_menu_list">
              <a href="#projects">Projects</a>
            </li>
            <li class="footer_menu_list">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div class="footer-social-icons">
          <div class="icon"><i class="uil uil-instagram"></i></div>
          <div class="icon"><i class="uil uil-linkedin-alt"></i></div>
          <div class="icon"><i class="uil uil-dribbble"></i></div>
          <div class="icon"><i class="uil uil-github-alt"></i></div>
        </div>
        <div class="bottom-footer">
          <p>
            Copyright &copy;
            <a href="#home" style="text-decoration: none;">Folio Designers</a> -
            All rights reserved
          </p>
        </div>
      </footer>
    </div>
  `,
  styles: [
    `
      #typed-output {
        font-size: 44px;
        font-family: 'Arial', sans-serif;
        color: var(--text-color-third);
      }
      /* ----- POPPINS FONT Link ----- */
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

      /* ----- VARIABLES ----- */
      /* ----- VARIABLES ----- */
      :root {
        --body-color: rgb(250, 250, 250);
        --color-white: rgb(255, 255, 255);

        --text-color-second: rgb(68, 68, 68);
        --text-color-third: rgb(30, 159, 171);

        /* Updated Gemini Gradient colors */
        --first-color: linear-gradient(45deg, #6a11cb, #2575fc);
        /* Gemini gradient */
        --first-color-hover: linear-gradient(45deg, #5a0db3, #1e5fd9);
        /* Darker Gemini gradient */
        --second-color: linear-gradient(45deg, #6a11cb, #2575fc);
        /* Same gradient */

        --third-color: rgb(192, 166, 49);
        --first-shadow-color: rgba(0, 0, 0, 0.1);
      }

      /* ----- BASE ----- */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
      }

      /* ----- SMOOTH SCROLL ----- */
      html {
        scroll-behavior: smooth;
      }

      /* ----- CHANGE THE SCROLL BAR DESIGN ----- */
      ::-webkit-scrollbar {
        width: 10px;
        border-radius: 25px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      ::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 30px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #bbb;
      }

      /* ---##-- REUSABLE CSS --##--- */

      /* ----- GLOBAL BUTTON DESIGN ----- */
      .btn {
        font-weight: 500;
        padding: 12px 20px;
        background: #efefef;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.4s;
      }

      .btn > i {
        margin-left: 10px;
      }

      .btn:hover {
        background: var(--second-color);
        color: var(--color-white);
      }

      /* ----- GLOBAL ICONS DESIGN ----- */
      i {
        font-size: 16px;
      }

      /* ------- BASE -------- */
      body {
        background: var(--body-color);
      }

      .container {
        width: 100%;
        position: relative;
      }

      /* ----- NAVIGATION BAR ----- */
      nav {
        position: fixed;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 90px;
        line-height: 90px;
        background: var(--body-color);
        padding-inline: 9vw;
        transition: 0.3s;
        z-index: 100;
        margin-left: -7.5%;
      }

      .nav-logo {
        position: relative;
      }

      .nav-name {
        font-size: 30px;
        font-weight: 600;
        color: var(--text-color-third);
      }

      .nav-logo span {
        position: absolute;
        top: -15px;
        right: -20px;
        font-size: 5em;
        color: var(--text-color-second);
      }

      .nav-menu,
      .nav_menu_list {
        display: flex;
      }

      .nav-menu .nav_list {
        list-style: none;
        position: relative;
      }

      .nav-link {
        text-decoration: none;
        color: var(--text-color-second);
        font-weight: 500;
        padding-inline: 15px;
        margin-inline: 20px;
      }

      .nav-menu-btn {
        display: none;
      }

      .nav-menu-btn i {
        font-size: 28px;
        cursor: pointer;
      }

      .active-link {
        color: var(--first-color);
        transition: 0.3;
      }

      .active-link::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -15px;
        transform: translate(-50%, -50%);
        width: 5px;
        height: 5px;
        background: var(--first-color);
        border-radius: 50%;
      }

      /* ----- WRAPPER DESIGN ----- */
      .wrapper {
        padding-inline: 10vw;
      }

      /* ----- FEATURED BOX ----- */
      .featured-box {
        position: relative;
        display: flex;
        height: 100vh;
        min-height: 700px;
      }

      /* ----- FEATURED TEXT BOX ----- */
      .featured-text {
        position: relative;
        display: flex;
        justify-content: center;
        align-content: center;
        min-height: 80vh;
        flex-direction: column;
        width: 50%;
        padding-left: 20px;
      }

      .featured-text-card span {
        background: var(--third-color);
        color: var(--color-white);
        padding: 3px 8px;
        font-size: 12px;
        border-radius: 5px;
      }

      .featured-name {
        font-size: 50px;
        font-weight: 600;
        color: var(--text-color-second);
        margin-block: 20px;
      }

      .typedText {
        text-transform: capitalize;
        color: var(--text-color-third);
      }

      .featured-text-info {
        font-size: 15px;
        margin-bottom: 30px;
        color: var(--text-color-second);
      }

      .featured-text-btn {
        display: flex;
        gap: 20px;
      }

      .featured-text-btn > .blue-btn {
        background: var(--first-color);
        color: var(--color-white);
      }

      .featured-text-btn > .blue-btn:hover {
        background: var(--first-color-hover);
      }

      .social_icons {
        display: flex;
        margin-top: 5em;
        gap: 30px;
      }

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
        cursor: pointer;
      }

      .icon:hover {
        color: var(--first-color);
      }

      /* ----- FEATURED IMAGE BOX ----- */
      .featured-image {
        display: flex;
        justify-content: right;
        align-content: center;
        min-height: 80vh;
        width: 50%;
      }

      .image {
        margin: auto 0;
        width: 380px;
        height: 380px;
        border-radius: 55% 45% 55% 45%;
        overflow: hidden;
        animation: imgFloat 7s ease-in-out infinite;
      }

      .image img {
        width: 380px;
        height: 380px;
        object-fit: cover;
      }

      @keyframes imgFloat {
        50% {
          transform: translateY(10px);
          border-radius: 45% 55% 45% 55%;
        }
      }

      .scroll-btn {
        position: absolute;
        bottom: 0;
        left: 50%;
        translate: -50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 50px;
        gap: 5px;
        text-decoration: none;
        color: var(--text-color-second);
        background: var(--color-white);
        border-radius: 30px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
      }

      .scroll-btn i {
        font-size: 20px;
      }

      /* ----- MAIN BOX ----- */
      .section {
        padding-block: 5em;
      }

      .row {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 50px;
      }

      .col {
        display: flex;
        width: 50%;
      }

      /* -- ## --- RESUABLE CSS -- ## -- */
      .top-header {
        text-align: center;
        margin-bottom: 5em;
      }

      .top-header h1 {
        font-weight: 600;
        color: var(--text-color-second);
        margin-bottom: 10px;
      }

      .top-header span {
        color: #999;
      }

      h3 {
        font-size: 20px;
        font-weight: 600;
        color: var(--text-color-second);
        margin-bottom: 15px;
      }

      /* ----- ABOUT INFO ----- */
      .about-info {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-block: 30px 70px;
        padding-inline: 20px;
        width: 100%;
        background: var(--color-white);
        box-shadow: 1px 8px 10px 2px var(--first-shadow-color);
        border-radius: 20px;
      }

      .about-info p {
        text-align: center;
        font-size: 15px;
        color: #777;
      }

      .about-btn button {
        position: absolute;
        right: 20px;
        bottom: 20px;
        background: var(--first-color);
        color: var(--color-white);
        border-radius: 30px;
      }

      .about-btn button:hover {
        background: var(--first-color-hover);
      }

      /* ----- ABOUT / SKILLS BOX ----- */
      .skills-box {
        margin: 10px;
      }

      .skills-header {
        margin-bottom: 30px;
      }

      .skills-list {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
      }

      .skills-list span {
        font-size: 14px;
        background: var(--first-color);
        color: var(--color-white);
        padding: 2px 10px;
        border-radius: 5px;
      }

      /* ----- PROJECTS BOX ----- */
      .project-container {
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 20px;
        flex-wrap: wrap;
      }

      .project-box {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 30%;
        height: 250px;
        background: var(--color-white);
        border-radius: 20px;
        box-shadow: 1px 8px 10px 2px var(--first-shadow-color);
        overflow: hidden;
      }

      .project-box > i {
        font-size: 50px;
        color: #00b5e7;
        margin-bottom: 25px;
      }

      .project-box label {
        font-size: 15px;
        color: #777;
      }

      .project-box::after,
      .contact-info::after {
        content: '';
        position: absolute;
        bottom: -100%;
        background: var(--second-color);
        width: 100%;
        height: 100%;
        transition: 0.4s;
        z-index: 1;
      }

      .project-box:hover.project-box::after,
      .contact-info:hover.contact-info::after {
        bottom: 0;
      }

      .project-box:hover.project-box i,
      .project-box:hover.project-box > h3,
      .project-box:hover.project-box > label {
        color: var(--color-white);
        z-index: 2;
      }

      /* ----- CONTACT BOX ----- */
      .contact-info {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 30px;
        width: 100%;
        height: 315px;
        background: var(--second-color);
        border-radius: 10px;
        box-shadow: 1px 8px 10px 2px var(--first-shadow-color);
        overflow: hidden;
      }

      .contact-info > h2 {
        color: var(--color-white);
        margin-bottom: 20px;
      }

      .contact-info > p {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--color-white);
        margin-block: 5px;
      }

      .contact-info p > i {
        font-size: 18px;
      }

      .contact-info::after {
        background: var(--color-white);
      }

      .contact-info:hover.contact-info h2,
      .contact-info:hover.contact-info p,
      .contact-info:hover.contact-info i {
        color: #777;
        z-index: 2;
      }

      /* ----- CONTACT FORM ----- */
      .form-control {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
      }

      .form-inputs {
        display: flex;
        gap: 10px;
        width: 100%;
      }

      .input-field {
        width: 50%;
        height: 55px;
        background: transparent;
        border: 2px solid #aaa;
        border-radius: 10px;
        padding-inline: 20px;
        outline: none;
      }

      textarea {
        width: 100%;
        height: 172px;
        background: transparent;
        border: 2px solid #aaa;
        border-radius: 10px;
        padding: 15px 10px;
        outline: none;
        resize: none;
      }

      .form-button > .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--second-color);
        color: var(--color-white);
      }

      .form-button > .btn:hover {
        background: #00b5e7;
      }

      .form-button i {
        font-size: 18px;
        rotate: -45deg;
      }

      /* ----- FOOTER BOX ----- */
      footer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        row-gap: 30px;
        background: #f8f8f8;
        padding-block: 40px 60px;
      }

      .top-footer p {
        font-size: 25px;
        font-weight: 600;
      }

      .middle-footer .footer-menu {
        display: flex;
      }

      .footer_menu_list {
        list-style: none;
      }

      .footer_menu_list a {
        text-decoration: none;
        color: var(--text-color-second);
        font-weight: 500;
        margin-inline: 20px;
      }

      .footer-social-icons {
        display: flex;
        gap: 30px;
      }

      .bottom-footer {
        font-size: 14px;
        margin-top: 10px;
      }

      /* ----- MEDIA QUERY == 1024px / RESPONSIVE ----- */
      @media only screen and (max-width: 1024px) {
        .featured-text {
          padding: 0;
        }

        .image,
        .image img {
          width: 320px;
          height: 320px;
        }
      }

      /* ----- MEDIA QUERY == 900px / RESPONSIVE ----- */
      @media only screen and (max-width: 900px) {
        .nav-button {
          display: none;
        }

        .nav-menu.responsive {
          left: 0;
        }

        .nav-menu {
          position: fixed;
          top: 80px;
          left: -100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          width: 100%;
          min-height: 450px;
          height: 90vh;
          transition: 0.3s;
        }

        .nav_menu_list {
          flex-direction: column;
        }

        .nav-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .featured-box {
          flex-direction: column;
          justify-content: center;
          height: 100vh;
        }

        .featured-text {
          width: 100%;
          order: 2;
          justify-content: center;
          align-content: flex-start;
          min-height: 60vh;
        }

        .social_icons {
          margin-top: 2em;
        }

        .featured-image {
          order: 1;
          justify-content: center;
          min-height: 150px;
          width: 100%;
          margin-top: 65px;
        }

        .image,
        .image img {
          width: 150px;
          height: 150px;
        }

        .row {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 50px;
        }

        .col {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .about-info,
        .contact-info {
          width: 100%;
        }

        .project-container {
          justify-content: center;
        }

        .project-box {
          width: 80%;
        }
      }

      /* ----- MEDIA QUERY == 540px / RESPONSIVE ----- */

      @media only screen and (max-width: 540px) {
        .featured-name {
          font-size: 40px;
        }

        .project-box {
          width: 100%;
        }

        .form-inputs {
          flex-direction: column;
        }

        .input-field {
          width: 100%;
        }
      }

      /* ----- EDUCATION SECTION ----- */
      #education {
        background-color: #f5f7fa;
        /* Light background for contrast */
        padding: 60px 20px;
        box-sizing: border-box;
      }

      #education .top-header h1 {
        text-align: center;
        font-size: 1.6rem;
        color: #333;
        margin-bottom: 30px;
      }

      .row {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        flex-wrap: wrap;
        /* Make the layout responsive */
        margin-top: 20px;
      }

      .col {
        flex: 1 1 calc(33.33% - 20px);
        /* Three columns on large screens */
        box-sizing: border-box;
        margin-bottom: 30px;
      }

      .education-info {
        background-color: #fff;
        padding: 25px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease-in-out;
      }

      .education-info:hover {
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      }

      .education-info h3 {
        font-size: 1rem;
        margin-bottom: 15px;
        color: #1a1a1a;
      }

      .education-info p {
        font-size: 0.9rem;
        line-height: 1.6;
        margin: 5px 0;
        color: #555;
      }

      .education-info strong {
        font-weight: bold;
      }

      /* ----- RESPONSIVE DESIGN ----- */
      @media (max-width: 768px) {
        .row {
          flex-direction: column;
          /* Stack columns on smaller screens */
        }

        .col {
          flex: 1 1 100%;
          /* Full width on small screens */
        }
      }

      @media (max-width: 480px) {
        #education {
          padding: 40px 10px;
          /* Adjust padding for very small screens */
        }

        #education .top-header h1 {
          font-size: 1.8rem;
        }

        .education-info h3 {
          font-size: 1rem;
        }
      }
    `,
  ],
})
export class PortfolioDetailsComponent implements OnInit, OnDestroy {
  private scrollHandler: EventListener | null = null; // Initialize scrollHandler to null

  private typed: any;

  constructor() {}

  ngOnInit(): void {
    this.setupNavigationBar();
    this.setupTypingEffect();
    this.setupScrollReveal();
    this.setupScrollActiveLink();
    // Initialize the typing effect by calling the method
    this.initializeTyped();
  }

  // Method to initialize the Typed.js typing effect
  initializeTyped(): void {
    setTimeout(() => {
      this.typed = new (window as any).Typed('#typed-output', {
        strings: ['Designer', 'Developer', 'Youtuber'],
        typeSpeed: 50, // Speed of typing (in milliseconds)
        backSpeed: 30, // Speed of backspacing (in milliseconds)
        backDelay: 1500, // Delay before backspacing starts
        startDelay: 100, // Delay before typing starts
        loop: true, // Loop the animation
      });
    }, 100); // Small delay to ensure the DOM is ready
  }

  ngOnDestroy(): void {
    // Only remove event listener if scrollHandler is initialized
    if (this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  private setupNavigationBar(): void {
    // ----- NAVIGATION BAR FUNCTION -----
    (window as any).myMenuFunction = function () {
      const menuBtn = document.getElementById('myNavMenu');
      if (menuBtn && menuBtn.className === 'nav-menu') {
        menuBtn.className += ' responsive';
      } else if (menuBtn) {
        menuBtn.className = 'nav-menu';
      }
    };

    // ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING -----
    this.scrollHandler = this.headerShadow.bind(this); // Bind headerShadow to the component context
    window.addEventListener('scroll', this.scrollHandler); // Attach the scroll event listener
  }

  private headerShadow(): void {
    const navHeader = document.getElementById('header');
    if (navHeader) {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        navHeader.style.boxShadow = '0 1px 6px rgba(0, 0, 0, 0.1)';
        navHeader.style.height = '70px';
        navHeader.style.lineHeight = '70px';
      } else {
        navHeader.style.boxShadow = 'none';
        navHeader.style.height = '90px';
        navHeader.style.lineHeight = '90px';
      }
    }
  }

  private setupTypingEffect(): void {
    new Typed('.typedText', {
      strings: ['Designer', 'Youtuber', 'Developer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });
  }

  private setupScrollReveal(): void {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    sr.reveal('.featured-text-card', {});
    sr.reveal('.featured-name', { delay: 100 });
    sr.reveal('.featured-text-info', { delay: 200 });
    sr.reveal('.featured-text-btn', { delay: 200 });
    sr.reveal('.social_icons', { delay: 200 });
    sr.reveal('.featured-image', { delay: 300 });

    sr.reveal('.project-box', { interval: 200 });
    sr.reveal('.top-header', {});
  }

  private setupScrollActiveLink(): void {
    const sections = document.querySelectorAll('section[id]');
    const scrollActive = () => {
      const scrollY = window.scrollY;

      sections.forEach((current) => {
        const element = current as HTMLElement;
        const sectionHeight = element.offsetHeight;
        const sectionTop = element.offsetTop - 50;
        const sectionId = element.getAttribute('id');

        const link = document.querySelector(
          '.nav-menu a[href*=' + sectionId + ']'
        );
        if (link !== null) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active-link');
          } else {
            link.classList.remove('active-link');
          }
        }
      });
    };

    window.addEventListener('scroll', scrollActive);
  }
}
