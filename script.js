// Get a reference to the "Recommend Movies" button and the "movies" div.
const recommendButton = document.getElementById('recommend-button');
const moviesDiv = document.getElementById('movies');

// Add an event listener to the button.
recommendButton.addEventListener('click', () => {
    // Get the selected mood from the dropdown.
    const selectedMood = document.getElementById('mood').value;

    // Send a POST request to the Python backend.
    fetch('/recommend', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mood: selectedMood }),
    })
    .then((response) => response.json())
    .then((data) => {
        // Display the recommended movies in the "movies" div.
        moviesDiv.innerHTML = `Here are some movies for a ${selectedMood} mood: ${data.movies.join(', ')}.`;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
