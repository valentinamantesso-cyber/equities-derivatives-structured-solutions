document.addEventListener("DOMContentLoaded", function () {
  var links = Array.prototype.slice.call(
    document.querySelectorAll(".md-nav--primary > .md-nav__list > .md-nav__item > .md-nav__link")
  );

  if (!links.length) return;

  document.addEventListener("keydown", function (event) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;

    var activeTag = document.activeElement.tagName;
    if (activeTag === "INPUT" || activeTag === "TEXTAREA") return;

    var index = links.indexOf(document.activeElement);
    event.preventDefault();

    if (index === -1) {
      var current = document.querySelector(".md-nav--primary .md-nav__link--active") || links[0];
      current.focus();
      return;
    }

    if (event.key === "ArrowDown") {
      links[(index + 1) % links.length].focus();
    } else {
      links[(index - 1 + links.length) % links.length].focus();
    }
  });
});
