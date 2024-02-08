export function initializeCircles(): void {
  document.addEventListener("DOMContentLoaded", function () {
    var circleContainer = document.querySelector(".circle-container") as HTMLDivElement | null;
    if (circleContainer) {
      var numberOfCircles = calculateNumberOfCircles();
      var fixedDistanceBetweenCircles = 80; // Adjust the fixed distance between circles
      for (var i = 1; i <= numberOfCircles; i++) {
        if (i == 1) {
          var circle = document.createElement("div");
          circle.className = "circle";
          circle.style.opacity = "0";
          circle.style.left = `${-50}px`; // Adjust the distance to the right for each circle
          circle.style.animationDelay = `${i * 0.4}s`; // Adjust the animation delay for each circle
          circleContainer.appendChild(circle);
        } else {
          var circle = document.createElement("div");
          circle.className = "circle";
          var distance = -130 + i * fixedDistanceBetweenCircles;
          circle.style.opacity = "0";
          circle.style.left = `${distance}px`; // Adjust the distance to the right for each circle
          circle.style.animationDelay = `${i * 0.4}s`; // Adjust the animation delay for each circle
          circleContainer.appendChild(circle);
        }
      }
    }
  });
}

export function handleStickyCarousel(): void {
  document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector("header") as HTMLElement | null;
    var carousel = document.querySelector(".carousel-container") as HTMLElement | null;
    var headerHeight = header?.offsetHeight || 0;
    var carouselOffsetTop = carousel?.offsetTop || 0;
    var isSticky = false;

    window.addEventListener("scroll", function () {
      var scrollPosition = window.scrollY || window.pageYOffset;

      if (!isSticky && scrollPosition >= carouselOffsetTop - headerHeight) {
        isSticky = true;
        carousel?.style.setProperty("position", "fixed");
        carousel?.style.setProperty("width", "100%");
        carousel?.style.setProperty("top", `${headerHeight}px`);
      } else if (isSticky && scrollPosition < carouselOffsetTop - headerHeight) {
        isSticky = false;
        carousel?.style.setProperty("position", "relative");
        carousel?.style.setProperty("top", "auto");
      }
    });
  });
}

function calculateNumberOfCircles(): number {
  var screenWidth = window.innerWidth;
  var circleWidth = 200;
  return Math.ceil(screenWidth / circleWidth) * 4;
}