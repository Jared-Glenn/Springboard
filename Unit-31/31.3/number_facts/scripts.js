const $factButton = $(".fact-button")
const $triviaArea = $(".trivia-area")
const $header = $("h1")
const $chosenNumber = $(".chosen-number")

const baseUrl = "http://numbersapi.com/";

const numberFact = async () => {
    let thisUrl;
    
    if ($.isNumeric($chosenNumber.val())) {
        let num = $chosenNumber.val();
        thisUrl = `${baseUrl}${num}/trivia?json`;
    }
    else {
        thisUrl = `${baseUrl}random/trivia?json`;
    }

    $chosenNumber.val("");
    $triviaArea.empty();
    let fact1 = await $.getJSON(thisUrl);
    let fact2 = await $.getJSON(thisUrl);
    let fact3 = await $.getJSON(thisUrl);
    let fact4 = await $.getJSON(thisUrl);

    addFact(fact1["text"]);
    addFact(fact2["text"]);
    addFact(fact3["text"]);
    addFact(fact4["text"]);
    return;
}

const addFact = (data) => {
    $triviaArea.append(`<div class='trivia-item'>${data}</div>`);
}

$factButton.on("click", function(evt) { numberFact() });

