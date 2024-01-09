function scrollToSection(sectionNumber) {
  var sectionId = "section" + sectionNumber;
  var section = document.getElementById(sectionId);
  window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
}
document.addEventListener("DOMContentLoaded", function () {
  var itemSlider = {
    item1: {
      img: "organic-center-leaf.png",
      name: "Present commodo in velit",
      price: "$50.00",
    },
    item2: {
      img: "organic-center-leaf.png",
      name: "Present commodo in velit",
      price: "$50.00",
    },
    item3: {
      img: "organic-center-leaf.png",
      name: "Present commodo in velit",
      price: "$50.00",
    },
    item4: {
      img: "organic-center-leaf.png",
      name: "Present commodo in velit",
      price: "$50.00",
    },
    item5: {
      img: "organic-center-leaf.png",
      name: "Present commodo in velit",
      price: "$50.00",
    },
    item6: {
      img: "organic-center-leaf.png",
      name: "Present commodo in velit",
      price: "$50.00",
    },
    item7: {
      img: "organic-center-leaf.png",
      name: "Present commodo in velit",
      price: "$50.00",
    },
    // ... other items ...
  };
  var sliderContainer = document.getElementById("sliderContainer");
  var paginationContainer = document.querySelector(".slider-pagination");

  // Populate the slider with cards
  for (var item in itemSlider) {
    var card = `
      <div class="card">
        <div class="discount">-10%</div>
        <img class='slider-img' src="${itemSlider[item].img}" alt="${itemSlider[item].name}">
        <h2>${itemSlider[item].name}</h2>
        <p>${itemSlider[item].price}</p>
        <button class="add-to-cart-btn">ADD TO CART</button>
      </div>
    `;
    sliderContainer.innerHTML += card;
  }

  // Create dots for pagination
  var numberOfDots = Math.ceil(Object.keys(itemSlider).length / 4);
  for (var i = 0; i < numberOfDots; i++) {
    var dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    paginationContainer.appendChild(dot);
  }

  var dots = document.querySelectorAll(".dot");
  var slider = document.querySelector(".slider-container");
  var cardWidth = slider.querySelector('.card').offsetWidth;
  var gap = 1; // Adjust the gap value if necessary

  // Function to update the active dot
  function updateActiveDot() {
    var scrollLeft = slider.scrollLeft;
    var currentDot = Math.round(scrollLeft / ((cardWidth + gap) * 4));
    dots.forEach(function (dot, index) {
      dot.classList.remove("active");
      if (index === currentDot) {
        dot.classList.add("active");
      }
    });
  }

  // Event listeners for dots
  dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
      slider.scrollTo({
        left: (cardWidth + gap) * 4 * index,
        behavior: "smooth",
      });
    });
  });

  // Event listeners for arrow buttons
  var leftButton = document.querySelector('.left-btn');
  var rightButton = document.querySelector('.right-btn');

  leftButton.addEventListener('click', function() {
    slider.scrollLeft -= (cardWidth + gap) * 4;
  });

  rightButton.addEventListener('click', function() {
    slider.scrollLeft += (cardWidth + gap) * 4;
  });      dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
        slider.scrollTo({
            left: (cardWidth + gap) * 4 * index,
            behavior: "smooth",
        });
    });
});

// Event listeners for arrow buttons
var leftButton = document.querySelector('.left-btn');
var rightButton = document.querySelector('.right-btn');

leftButton.addEventListener('click', function() {
    slider.scrollLeft -= (cardWidth + gap) * 4;
});

rightButton.addEventListener('click', function() {
    slider.scrollLeft += (cardWidth + gap) * 4;
});

// Attach scroll event to update dots
slider.addEventListener('scroll', updateActiveDot);
});