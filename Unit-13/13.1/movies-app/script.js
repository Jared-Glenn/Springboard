const $movieTable = $('#movie-table');

$('#submit-movie').on('click', function(e) {
    e.preventDefault();
    if ($('#title')[0].value.length >= 2 && $('#rating')[0].value >= 0 && $('#rating')[0].value <= 10) {
        const $newRow  = $('<tr>'+
        '<td>'+$('#title')[0].value+'</td>'+
        '<td>'+$('#rating')[0].value+'</td>'+
        '<td><button class="remove-button">Remove</button></td>');
        $movieTable.append($newRow);
    }
    else {
        alert("The movie title must be at least two characters long. The rating must be between 0 and 10.")
    }
    
})

$('#movie-table').on('click', '.remove-button', function(e) {
    e.preventDefault();
    console.log(e.target.parentNode.parentNode)
    e.target.parentNode.parentNode.remove();
})


//Couldn't work this out.
$('#title').on('click', function() {
    console.log("sort")
})