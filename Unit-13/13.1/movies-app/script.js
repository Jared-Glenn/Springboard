const $movieTable = $('#movie-table');

$('#submit-movie').on('click', function(e) {
    e.preventDefault();
    const $newRow  = $('<tr>'+
    '<td>'+$('#title')[0].value+'</td>'+
    '<td>'+$('#rating')[0].value+'</td>'+
    '<td><button class="remove-button">Remove</button></td>');
    $movieTable.append($newRow);
})

$('#movie-table').on('click', '.remove-button', function(e) {
    e.preventDefault();
    console.log(e.target.parentNode.parentNode)
    e.target.parentNode.parentNode.remove();
})