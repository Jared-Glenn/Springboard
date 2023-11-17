const $factButton = $(".fact-button")
const $triviaArea = $(".trivia-area")
const $header = $("h1")
const $chosenNumber = $(".chosen-number")

const baseUrl = "http://numbersapi.com/";

const numberFact = () => {
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
    let futurePromise = axios.get(thisUrl);

    futurePromise
    .then(data1 => {
        addFact(data1.data.text);
        return axios.get(thisUrl);
    })
    .then(data2 => {
        addFact(data2.data.text);
        return axios.get(thisUrl);
    })
    .then(data3 => {
        addFact(data3.data.text);
        return axios.get(thisUrl);
    })
    .then(data4 => {
        addFact(data4.data.text);
    })
    .catch(err => console.log(err));

}

const addFact = (data) => {
    $triviaArea.append(`<div class='trivia-item'>${data}</div>`);
}

$factButton.on("click", function(evt) { numberFact() });

