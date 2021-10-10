import React from "react";

import "../styles/Header.css";

function Aboutme() {
  return (
    <>
      <section class="headshot">
        <img
          id="head"
          src="https://lh3.google.com/pw/AM-JKLXkeVpLB0Fchq6ZQdXcmWdvQc905oEPICJzseAP2BgsP47jEpe-MKyBOVjCfmBZPX4v1OxbVlnrsUFNzsgs-Qyt7XTnhVo=w1220-h1828-no?authuser=0"
          alt="Bill"
        />
        <div class="aboutme">
          <h2>About me</h2>
          <p>
            I am an aspiring Software Engineer looking for exciting new projects
            to take on! I reside in the Denver area and enjoy the outdoors as
            much as staring at code. I like hiking, skiing and golfing. Please
            take a look at some of my past projects, I hope to work with you one
            day!
          </p>
        </div>
      </section>
    </>
  );
}

export default Aboutme;
