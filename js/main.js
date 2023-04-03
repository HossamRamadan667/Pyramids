let floatingActionButton = document.getElementById("floating-action-button");
window.addEventListener("scroll", () => {
  let scroll = this.scrollY;
  if (scroll > 745) {
    floatingActionButton.setAttribute("class", "show");
  } else {
    floatingActionButton.setAttribute("class", "hide");
  }
  console.log(scroll);
});

floatingActionButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
