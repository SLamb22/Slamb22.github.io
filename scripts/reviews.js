const reviews = [
  {
    name: "Emily R.",
    rating: 5,
    comment: "Absolutely loved the cozy rooms and the fresh breakfast every morning. Felt like home!"
  },
  {
    name: "James T.",
    rating: 4,
    comment: "Great stop during our road trip. Comfortable beds and very friendly staff."
  },
  {
    name: "Sophia L.",
    rating: 5,
    comment: "The homemade rolls were incredible! A perfect relaxing getaway."
  },
  {
    name: "Michael B.",
    rating: 3,
    comment: "Nice place overall, very quiet and peaceful. Breakfast was good."
  }
];

function displayReviews() {
  let container = document.getElementById("reviewsContainer");

  reviews.forEach(review => {
    let stars = "★".repeat(review.rating);

    let reviewHTML = `
      <div class="review">
        <h3>${review.name}</h3>
        <p class="stars">${stars}</p>
        <p>${review.comment}</p>
      </div>
    `;

    container.innerHTML += reviewHTML;
  });
}

window.onload = displayReviews;