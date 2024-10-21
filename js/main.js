// // //The user will enter a date. Use that date to get the NASA picture of the day from that date! 
// // https://api.nasa.gov/


// // 1. Go to NASA api
// // 2. set up HTML for input & display
// // 3. fetch data based on user input


document.getElementById('searchButton').addEventListener('click', function () {

  const date = document.getElementById('dateInput').value;
  fetchNasaPicture(date);
});

// replace with NASA API key
function fetchNasaPicture(date) {
  const url = `https://api.nasa.gov/planetary/apod?api_key=RT42QL93TLHO5rLV3q3LhwivhXHnhoQ5M9anigrw&date=${date}`;




  //  fetch URL
  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayNasaPicture(data);
    })

    //  catch error
    .catch(error => console.log('Error fetching data', error));
}

function displayNasaPicture(data) {
  document.getElementById('nasaTitle').innerText = data.title;
  document.getElementById('nasaImage').src = data.url;
  document.getElementById('nasaExplanation').innerText = data.explanation;

}












































