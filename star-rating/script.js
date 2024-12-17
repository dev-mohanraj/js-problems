document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");
  const ratingShower = document.getElementById("rating");
  let currentRating = 0;

  stars.forEach(function (star) {
    let value = star.dataset.value;
    star.addEventListener("mouseover", () => {
      removeClassList();
      addClassList(value);
    });

    star.addEventListener("click", () => {
      currentRating = value;
      addRatingValue(currentRating);
      addClassList(currentRating);
    });

    star.addEventListener("mouseleave", () => {
      removeClassList();
      addClassList(currentRating);
      addRatingValue(currentRating);
    });
  });

  function addClassList(rating) {
    stars.forEach(function (star) {
      if (star.dataset.value <= rating) {
        star.classList.add("active");
      }
    });
  }

  function removeClassList() {
    stars.forEach(function (star) {
      star.classList.remove("active");
    });
  }

  function addRatingValue(value) {
    ratingShower.innerHTML = value;
  }
});
