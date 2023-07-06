$(function() {
    console.log("Let's get ready to party with jQuery!")
})

$("article img").addClass('image-center');

$('article p').eq(-1).remove();

let fontSize = Math.ceil(Math.random() * 100);

$('h1').css('font-size', fontSize);

$('ol').append('<li>whatever you want.</li>');

$('aside').html('<p>Apologies. The list that once occupied this space was deemed much too silly and has been removed. Thank you for your patience.</p>');

$('input').change(function() {
    const $formArr = $('.form-control');
    console.log($formArr[1].value)
    const color = `rgb(${$formArr[0].value}, ${$formArr[1].value}, ${$formArr[2].value})`;
    $('body').css('background-color', color);
});

$('img').on('click', function() {
    $('img').remove();
})


// 1. When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
// 2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
// 3. Remove the last paragraph in the article.
// 4. Set the font size of the title to be a random pixel size from 0 to 100.
// 5. Add an item to the list; it can say whatever you want.
// 6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
// 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
// 8. Add an event listener so that when you click on the image, it is removed from the DOM.