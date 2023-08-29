const $wordGuessForm = $('#word-guess-form');
const $correctList = $('.correct-list');
const $notOnBoardList = $('.not-on-board-list');
const $notWordList = $('.not-word-list');

const submitGuess = (evt) => {
    evt.preventDefault();
    const $wordGuess = $("#word-guess").val();
    axios.get(`http://127.0.0.1:5000/guess?word_guess=${$wordGuess}`)
  .then(function (response) {
    // handle success
    let res = response['data']
    
    if (res === "ok") {
      $correctList.append(`<li>${$wordGuess}</li>`)
    }
  })
    console.log($wordGuess)
}

$wordGuessForm.on('submit', submitGuess)