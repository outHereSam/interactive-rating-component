const ratingNumbers = document.querySelectorAll('.number');

const getRating = (currentRating) => {
    let rating = currentRating;

    // Detect submit button clicked
    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', () => {
        // When the submit button is clicked, check to see if a rating has been selected
        if (rating) {
            // Set the value of the rate span to the selected rating
            document.getElementById('rate').innerText = rating;

            // Hide the current modal and show the thank you modal
            document.getElementById('rating-state').style.display = "none";
            document.getElementById('thank-you-state').style.display = "block";
        }
    });
};


for (let i = 0; i < ratingNumbers.length; i++) {
    ratingNumbers[i].addEventListener('click', () => {
        for (let j = 0; j < ratingNumbers.length; j++) {
            if (ratingNumbers[j].classList.contains('active')) {
                ratingNumbers[j].classList.remove('active')
            }
        }
        ratingNumbers[i].classList.add('active');
        let currentRating = ratingNumbers[i].innerText;
        getRating(currentRating);
    });
}
