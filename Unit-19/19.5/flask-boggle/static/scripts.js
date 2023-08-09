const $wordGuessForm = $('#word-guess-form');

console.log("hello!")

const submitGuess = (evt) => {
    evt.preventDefault();
    const $wordGuess = $("#word-guess").val();
    axios.get(`http://127.0.0.1:5000/?word_guess=${$wordGuess}`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
    console.log($wordGuess)
}

$wordGuessForm.on('submit', submitGuess)