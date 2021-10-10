import React from "react";
import pwGen from "./images/pw_gen.png";
import planet from "./images/code_quiz.png";
import lyrific from "./images/lyrific.png";
import gathr from "./images/gathr.png";

function Projects() {
  return (
    <section class="portfolio" id="portfolio">
      <div class="apps">
        <p>
          These are some web apps that I've made. Click on them if you wanna see
          them.
        </p>
        <a
          href="https://bill-hennessey.github.io/3-PW-Generator/"
          target="no_blank"
        >
          <figure>
            <img src={pwGen} alt="Password Generator" class="icon" />
            <figcaption>Password Generator</figcaption>
          </figure>
        </a>

        <a
          href="https://bill-hennessey.github.io/4-Code-Quiz/"
          target="no_blank"
        >
          <figure>
            <img src={planet} alt="Planetary Quiz" class="icon" />
            <figcaption>Planetary Quiz</figcaption>
          </figure>
        </a>

        <a
          href="https://github.com/bill-hennessey?tab=repositories"
          target="no_blank"
        >
          <figure>
            <img src={lyrific} alt="Lyrific Screenshot" class="icon" />
            <figcaption>Lyrific (Proj 1)</figcaption>
          </figure>
        </a>
      </div>
      <div class="sites">
        <a href="https://shielded-mesa-10854.herokuapp.com/" target="no_blank">
          <figure>
            <img src={gathr} alt="Gathr" class="icon" />
            <figcaption>Gathr (Proj 2)</figcaption>
          </figure>
        </a>
        <a
          href="https://github.com/bill-hennessey?tab=repositories"
          target="no_blank"
        >
          <figure>
            <img
              src="https://www.thewindowsclub.com/wp-content/uploads/2018/06/Broken-image-icon-in-Chrome.gif"
              alt="Broken Image"
              class="icon"
            />
            <figcaption>Clever App #2</figcaption>
          </figure>
        </a>
        <a
          href="https://github.com/bill-hennessey?tab=repositories"
          target="no_blank"
        >
          <figure>
            <img
              src="https://www.thewindowsclub.com/wp-content/uploads/2018/06/Broken-image-icon-in-Chrome.gif"
              alt="Broken Image"
              class="icon"
            />
            <figcaption>Clever App #3</figcaption>
          </figure>
        </a>

        <p>
          These are some other web apps that I've done. Click on them if you
          wanna see them.
        </p>
      </div>
    </section>
  );
}

export default Projects;
