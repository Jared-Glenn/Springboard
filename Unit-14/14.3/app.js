// Common DOM parts.
const $searchTerm = $('#search-term');
const $gifArea = $('#gifs-div');

// Function to add a new gif.
const addGif = (id) => {
    const newImage = document.createElement('img');
    newImage.src = `https://media.giphy.com/media/${id}/giphy.gif`;
    newImage.classList.add('gif');
    $gifArea.append(newImage);

}

// Get response from giphy.
async function getData(e) {
    e.preventDefault();
    const searchTerm = $searchTerm[0].value.toLowerCase();
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=mNX2xUAMdt0a4fZqGQ1oCYP010WP2wYM`;
    const response = await axios.get(apiUrl);

    addGif(response.data.data[0].id);
    $searchTerm[0].value = "";
    $searchTerm.focus();
}

const removeGifs = () => {
    $gifArea.empty();
}


$('#search').on('click', getData);
$('#search-form').on('submit', getData);

// Adapted from Vijay on https://stackoverflow.com/questions/18160342/jquery-how-to-trigger-click-event-on-pressing-enter-key
// Non-functional. Creates an error with the Promise, which I have not learned much about yet.
// $('#searchTerm').on("keypress", function(e) {
//     console.log("pressed a key");
//     const key = e.which;
//     if (key === 13) {
//         console.log("pressed enter");
//         getData();
//     }
// });
$('#remove').on('click', removeGifs)