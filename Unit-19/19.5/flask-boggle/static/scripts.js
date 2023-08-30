const $wordGuessForm = $('#word-guess-form');
const $correctList = $('.correct-list');
const $notOnBoardList = $('.not-on-board-list');
const $notWordList = $('.not-word-list');
const $score = $('.score');
const $timer = $('.timer');
const $highScore = $('.high-score');
const $games = $('.games')

const submitGuess = (evt) => {
    evt.preventDefault();
    if (running === true){
      const $wordGuess = $("#word-guess").val();
      axios.get(`http://127.0.0.1:5000/guess?word_guess=${$wordGuess}`)
    .then(function (response) {
      // handle success
      let res = response['data']
      
      if (res === "ok") {
        $correctList.append(`<li>${$wordGuess}</li>`)
        let score = parseInt($score.text());
        score += $wordGuess.length;
        $score.text(score.toString());
      }
      else if (res === "not-on-board") {
        $notOnBoardList.append(`<li>${$wordGuess}</li>`)
      }
      else if (res === "not-word") {
        $notWordList.append(`<li>${$wordGuess}</li>`)
      }
    })
    }
    $('#word-guess').val("")
}

$wordGuessForm.on('submit', submitGuess)

let i = 60;
let running = true;

let timerInterval = setInterval(function () {
  if (i <= 0){
    clearInterval(timerInterval);
    running = false;
    console.log($score.text())
    axios.get(`http://127.0.0.1:5000/score?final_score=${$score.text()}`)
  .then(function (response) {
    $games.text(response['data']['games'])
    $highScore.text(response['data']['high_score'])
  })
  }
  $timer.text(i);
  i--;
}, 1000);