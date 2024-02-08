export function initializeCircles(){
  document.addEventListener("DOMContentLoaded", function () {
    var circleContainer = document.querySelector(".circle-container");
    if (circleContainer) {
        var numberOfCircles = calculateNumberOfCircles();
        var fixedDistanceBetweenCircles = 80; // Adjust the fixed distance between circles
        for (var i = 1; i <= numberOfCircles; i++) {
            if (i == 1) {
                var circle = document.createElement("div");
                circle.className = "circle";
                circle.style.opacity = "0";
                circle.style.left = "".concat(-50, "px"); // Adjust the distance to the right for each circle
                circle.style.animationDelay = "".concat(i * 0.4, "s"); // Adjust the animation delay for each circle
                circleContainer.appendChild(circle);
            }
            else {
                var circle = document.createElement("div");
                circle.className = "circle";
                var distance = -130 + (i * fixedDistanceBetweenCircles);
                circle.style.opacity = "0";
                circle.style.left = "".concat(distance, "px"); // Adjust the distance to the right for each circle
                circle.style.animationDelay = "".concat(i * 0.4, "s"); // Adjust the animation delay for each circle
                circleContainer.appendChild(circle);
            }
        }
    }
});
}
function calculateNumberOfCircles() {
    var screenWidth = window.innerWidth;
    var circleWidth = 200;
    return Math.ceil(screenWidth / circleWidth) * 4;
}
export function handleStickyCarousel(){
  document.addEventListener("DOMContentLoaded", function() {
      var header = document.querySelector("header");
      var carousel = document.querySelector(".carousel-container");
      var headerHeight = header.offsetHeight;
      var carouselOffsetTop = carousel.offsetTop;
      var isSticky = false;
    
      window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY || window.pageYOffset;
    
        if (!isSticky && scrollPosition >= carouselOffsetTop - headerHeight) {
          isSticky = true;
          carousel.style.position = "fixed";
          carousel.style.width = "100%";
          carousel.style.top = headerHeight + "px";
        } else if (isSticky && scrollPosition < carouselOffsetTop - headerHeight) {
          isSticky = false;
          carousel.style.position = "relative";
          carousel.style.top = "auto";
        }
      });
    });
}