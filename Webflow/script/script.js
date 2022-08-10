"use strict";

const header0El = document.querySelector(".header");
const header1El = document.querySelector(".sticky");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      header0El.classList.add("hidden");
      header1El.classList.remove("hidden");
      document.body.style.marginTop = "200px";
    }
    if (ent.isIntersecting === true) {
      header1El.classList.add("hidden");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(header0El);
