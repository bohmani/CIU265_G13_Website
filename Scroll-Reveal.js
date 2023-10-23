ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
  reset: false
});

ScrollReveal().reveal(".title", {
  duration: 3000,
  origin: "top",
  distance: "400px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  rotate: {
    x: 20,
    z: -10
  }
});

ScrollReveal().reveal(".fade-in", {
  duration: 3000,
  move: 0
});



ScrollReveal().reveal(".fade-in-1", {
    duration: 2000,
    move: 0
  });

  ScrollReveal().reveal(".fade-in-2", {
    delay:1000,
    duration: 2000,
    move: 0
  });

  ScrollReveal().reveal(".fade-in-3", {
    delay:2000,
    duration: 2000,
    move: 0
  });

  ScrollReveal().reveal(".fade-in-4", {
    delay:3000,
    duration: 2000,
    move: 0
  });



ScrollReveal().reveal(".scaleUp", {
  duration: 4000,
  scale: 0.85
});

ScrollReveal().reveal(".flip", {
  delay: 500,
  duration: 2000,
  rotate: {
    x: 20,
    z: 20
  }
});

ScrollReveal().reveal(".slide-right", {
  duration: 3000,
  origin: "left",
  distance: "300px",
  easing: "ease-in-out"
});

ScrollReveal().reveal(".slide-left", {
    duration: 3000,
    origin: "right",
    distance: "300px",
    easing: "ease-in-out"
  });

ScrollReveal().reveal(".slide-up", {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5
});
