import React from "react";

import "../styles/Header.css";

function Header() {
  return (
    <header>
      <nav class="top-nav">
        <div class="name">
          <div id="name">Bill Hennessey</div>
        </div>
        <div class="links">
          <div class="link-text">
            <a href="#portfolio" class="drop">
              Portfolio
            </a>
          </div>
          <div class="link-text">
            <a href="https://github.com/bill-hennessey" target="no_blank">
              Github
            </a>
          </div>
          <div class="link-text">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
