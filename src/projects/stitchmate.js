import "../style.css";
import stitchmateLogin from "../../assets/stitchmate_login.jpg";
import stitchmateMobile from "../../assets/stitchmate_mobile.jpg";
import stitchmateComponents from "../../assets/stitchmate_components.jpg";

document.querySelector("#app").innerHTML = `
<main>
  <div class="content">
    <a href="/" class="button button-back" aria-label="Back to home">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
      </svg>
    </a>

    <div class="project-header">
      <div>
        <h1 class="text-lg">Stitchmate</h1>
        <p>2023-?</p>
      </div>
      <a href="https://github.com/marlenemarbach/stitchmate-v2" class="button button-small" aria-label="Source Code">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      </a>
    </div>
    <img src="${stitchmateMobile}" class="project-img" alt="A smartphone displays the &quot;Stitchmate&quot; knitting app interface. The screen is dark blue, featuring a large, stylized, circular digital row counter in the center with the numbers &quot;1&quot; and &quot;4&quot; showing the current count (14)." />
    <div class="tools">
      <h3>Tools</h3>
      <p>Typescript, Next.js, Zustand, Tailwind CSS, Motion, SQLite</p>
    </div>
    <div class="divider"></div>
    <p>It's friday evening. The pattern I wanted was on sale, the new yarn just arrived and is ready to be cast on. A dozen projects are already in progress. Out comes my trusty row counter and I start shuffling through my notes to jot down the progress of the now sidelined project.</p>
    <p>I could always buy more row counters to make managing my ongoing projects easier, but I'd rather spend the money on that gorgeous fiber blend I've been eyeing. Besides, I'd need to make sure the counters are matched to the project.</p>
    <p>The typical knitting project management solution is pen and paper - requiring disciplined note taking and organization. It's Friday evening, I'm lazy and just want start knitting. So I built something more fun: a digital tool that remembers all of your projects and makes tracking easy.</p>
    <img src="${stitchmateLogin}" class="project-img" alt="A dark-themed login screen for the &quot;Stitchmate&quot; application."/>
    <p>Stitchmate organizes multiple counters within each project. Each counter can be named (e.g. "sleeve" or "body") and the app remembers exactly which row you left off at. No more messing with pen and paper or shuffling notes around.</p>
    <p>The counter itself is designed to mimic my favorite click counter. A satisying click of the spring-loaded button increases the row count by one.</p>
    <p>The standout feature is the toolbar. In knitting, you often increase or decrease stitches at regular intervals to shape garments. Stitchmate automates this. Set your interval  and the app automatically highlights whether the next row needs special attention.</p>
    <img src="${stitchmateComponents}" class="project-img" alt="A collection of Figma components for the &quot;Stitchmate&quot; application, laid out against a dark background."/>
    <p>I created the first version of Stitchmate in 2023 and started a rebuild in 2025 wanting a cleaner, simpler interface.</p><p>The tech stack remains the same, but I switched from a cloud-hosted PostgreSQL database to SQLite. The free tier kept turning off causing long start-up delays. SQlite let's me keep the start-up fast and the hosting cheap, which is great for personal use and my knitting community.</p>
    <p>The project is still under active development. I'm regularly pushing updates to GitHub.</p>
  </div>
</main>
<footer>
  <p>${new Date().getFullYear()}</p>
  <a href="/" aria-label="Back to home">
    <img src="/mcodesit.svg" class="logo" />
  </a>
</footer>
`;
