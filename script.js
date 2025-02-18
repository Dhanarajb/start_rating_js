const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("rating-value");
let selectedRating = 0;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    selectedRating = parseInt(star.getAttribute("data-value"));
    ratingValue.textContent = selectedRating;

    // Update the star ratings based on selection
    updateStarSelection();
  });

  star.addEventListener("mouseover", () => {
    highlightStars(parseInt(star.getAttribute("data-value")));
  });

  star.addEventListener("mouseout", () => {
    highlightStars(selectedRating);
  });
});

function updateStarSelection() {
  stars.forEach((star) => {
    if (parseInt(star.getAttribute("data-value")) <= selectedRating) {
      star.classList.add("selected");
    } else {
      star.classList.remove("selected");
    }
  });
}

function highlightStars(rating) {
  stars.forEach((star) => {
    if (parseInt(star.getAttribute("data-value")) <= rating) {
      star.classList.add("selected");
    } else {
      star.classList.remove("selected");
    }
  });
}
