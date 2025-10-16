import "./style.css";
import { header, footer } from "./layout";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
${header}
<main>
  <section class="content-section content-group spacing-level-3">
    <a class="text-md" href="/">go back</a>

    <div class="content-group spacing-level-5">
      <h3 class="text-md">Stitchmate v2</h3>
      <p class="text-sm">2025</p>
    </div>
    <div class="card">
      <div class="counter-container">
        <img src="button.svg" width="128" height="62" class="counter-button"/>
        <img src="spring.svg" width="32" height="78" class="spring"/>
        <img src="gear.svg" width="150" height="146" class="gear gear-left"/>
        <img src="gear.svg" width="150" height="146" class="gear gear-right"/>
        <img src="counter.svg" width="296" height="273" class="counter"/>
        <img src="border.svg" width="296" height="265" class="counter-border" />
      </div>
    </div>
    <div class="content-row spacing-level-3">
      <div class="content-group spacing-level-5">
        <a>source code on github</a>
        <a>live version: stitchmate.xyz</a>
      </div>

      <div class="content-row spacing-level-4 content-right">
        <div class="badge">Typescript</div>
        <div class="badge">Next.js</div>
        <div class="badge">SQLite</div>
        <div class="badge">Zustand</div>
        <div class="badge">Tailwind CSS</div>
      </div>
    </div>
    <div class="spacing-level-2 content-group content-section--project-page">



      <div class="content-group project-desc spacing-level-3">
        <p>I created stitchmate to solve my problem of having one row counter but a dozen of started knitting projects. Besides that a regular row counter is somewhat limited, as it can store one count at a time.</p>
        <p>I wanted create a tool that is capable of tracking row counts, stitch counts and shaping at the same time for an infinite number of projects</p>
        <p>The first draft of stitchmate I started in 2023. Based on the learnings from the previous version, I made a fresh start in 2025. V2 is easier to use and faster in performance.</p>

        <p>Features: - row counting -automatic stitch counting - automatic increase, decrease and shortRow tracking - infinite projects with infitine counters</p>
      </div>

    </div>
  </section>
</main>
${footer}
`;
