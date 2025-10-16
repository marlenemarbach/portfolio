import "./style.css";
import { header, footer } from "./layout";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
${header}

<main>
  <section class="content-section content-group spacing-level-3">
    <h1 class="text-lg accent-primary">Hi, I'm Marlene</h1>
    <p class="intro">I am a Frontend Developer and a former Media Designer.</p>
    <p class="intro"> I like to build clean and accessible interfaces. I am a maker, a craft enthusiast and I love to code. Some more personal stuff about me that I didn't wrote yet but it's necessary to fill the space.
    </p>
  </section>
  <section class="content-group spacing-level-3 ">
    <h2 class="text-md">Connect</h2>
    <ul class="content-row spacing-level-2">
      <li><a>Email</a></li>
      <li><a>LinkedIn</a></li>
      <li><a>GitHub</a></li>
    </ul>
  </section>

  <section class="content-section two-cols">
    <div class="content-group spacing-level-3">
      <h2 class="text-md">Experience</h2>
      <p>My path is unconventional. It led me from media design through social sciences to full time software development.</p>
      <p>In the past, I’ve worked as a media designer in the tech industry where I got interested in engineering at an early career point. During my study in social sciences, media and art, I dived deeper into psychology and human interactions.</p>
      <p>Later, I worked as a coach and engaged other people to discover their skills and opportunities. I realized I wasn’t following my own advise. So I left my job and made a change.</p>
      <p>Today is all about building things for designers and product managers. I strive in a collaborative environment where I can close the gap between design and development.</p>
      <p>Outside of work, I enjoy knitting and sewing, exploring hidden places of untouched nature or just spending time with my husband and friends.</p>
    </div>

    <ul class="content-group spacing-level-3">
      <li class="content-group spacing-level-4">
        <div class="content-row spacing-level-4">
          <span class="decorator-line"></span>
          <p class="text-sm">since 2023</h4>
        </div>
        <h3 class="text-sm">Software Development</h3>
        <p class="text-sm">I solely focus programming since 2023. At my current work place, I am implementing a data driven dashboard application with React. It is used in scope of digitalisation of cities to showcase the data to their citizens.</p>
      </li>

      <li class="content-group spacing-level-4">
        <div class="content-row spacing-level-4">
          <span class="decorator-line"></span>
          <p class="text-sm">2017 - 2022</h4>
        </div>
        <h3 class="text-sm">Pedagogy & Art</h3>
        <p class="text-sm">Following my interest in social science I joined university. I first worked in the terms of disability studies and later guided visitors at an art gallery at in interactive art work. Post pandemic I worked in childhood education and and as a coach.</p>
      </li>

      <li class="content-group spacing-level-4">
        <div class="content-row spacing-level-4">
          <span class="decorator-line"></span>
          <p class="text-sm">2011 - 2017</h4>
        </div>
        <h3 class="text-sm">Media Design</h3>
        <p class="text-sm">I gained my foundation as a classic print based designer and engaged in the digitial industry after. I've worked in tech companies as as a Ux focused designer and as a designer in a small agency for fashion brand customers.</p>
      </li>

      <li>
        <button>
          <span class="text-sm">
            view my full resume</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="arrow-right accent-primary">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </li>
    </ul>
  </section>
  <section class="content-section content-group spacing-level-3">
    <h2 class="text-md">Projects</h2>
    <ul class="three-cols">
      <div class="spacing-level-4 content-group">
        <a href="/stitchmate" class="card"></a>
        <div class="content-group spacing-level-5">
          <h4 class="text-md">Stitchmate</h4>
          <p>A multitasking knitting tool</p>
        </div>
      </div>
  </section>
  <section class="content-section content-group spacing-level-3">
    <h2 class="text-md">Currently</h2>
    <p>Exploring Josh Comeau's animations on the web</p>
    <p>Making first steps with python</p>
  </section>
</main>

${footer}
`;
