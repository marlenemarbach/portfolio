import "./style.css";
import stitchmateImg from "../assets/stitchmate_mobile.jpg";
import portfolioImg from "../assets/portfolio_light.jpg";

document.querySelector("#app").innerHTML = `
<main>
  <section class="content">
    <div>
      <h1 class="text-lg">Marlene Marbach</h1>
      <p class="text-lg">Frontend Developer</p>
    </div>
    <p>
      Hi, I'm a Software Developer and a maker based in Germany. I transitioned into software development, drawing on a background in Design, Pedagogy, and Art. Today I build and create in the digital space. My goal is to build products that are accessible and meaningful, balancing simplicity with an eye for the small details that matter.</p>
  </section>
  <section class="content">
    <h2>Connect with me:</h2>
    <ul class="social">
      <li>
        <a class="button" href="mailto:m.marbach.me@gmail.com?subject=Hello">Email</a>
      </li>
      <li>
        <a class="button" href="https://github.com/marlenemarbach" target="_blank">GitHub</a>
      </li>
      <li>
        <a class="button" href="https://www.linkedin.com/in/marlene-marbach/" target="_blank">LinkedIn</a>
      </li>
    </ul>
  </section>
  <section class="content">
    <h2>Projects</h2>
    <a class="card" href="projects/stitchmate">
      <img src="${stitchmateImg}" alt="Mobile app interfac"/> <div>
        <h4>Stitchmate</h4>
        <p>A digital row counter and<br/>multitaksing tool for knitters</p>
        <p>2023-?</p>
      </div>
    </a>
    <a class="card" href="projects/portfolio">
      <img src="${portfolioImg}" alt="website image"/>
      <div>
        <h4>Portfolio</h4>
        <p>Creating my website</p>
        <p>2025</p>
      </div>
    </a>
  </section>
  <section class="content">
    <h2>Currently</h2>
      <p class="explore">Taking Josh Comeau's <a href="https://whimsy.joshwcomeau.com/" target="_blank" class="link">Whimsical Animations</a></p>
      <p>Diving into Python</p>
  </section>
</main>

<footer>
   <p>${new Date().getFullYear()}</p>
  <img src="mcodesit.svg" class="logo" />
</footer>
`;
