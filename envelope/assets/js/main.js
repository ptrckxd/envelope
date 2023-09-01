const envelope = document.getElementById("envelope");

const clickListener = () => {
  envelope.classList.add("animation");
  if (!envelope.classList.contains("opened")) {
    const timeout = setTimeout(() => {
      envelope.classList.remove("animation");

      clearTimeout(timeout);
    }, 250);
  }
};

envelope.addEventListener("dblclick", () => {
  envelope.classList.add("opened");
  envelope.removeEventListener("click", clickListener);
});

envelope.addEventListener("touchend", () => {
  envelope.classList.add("opened");
  envelope.removeEventListener("click", clickListener);
});

envelope.addEventListener("click", clickListener);
