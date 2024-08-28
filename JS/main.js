$(document).ready(function() {
    // Draw an Array
    const build = new Card('#connect4G');

    build.onPlayerMove = function() {
        $('#player').text(build.player);
    }

    $('#restart').click(function() {
        build.restart();
    })

})