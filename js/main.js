

$( document ).ready(function() {
    $('#table-of-presentations').append( '<tr><td>' + 'result' + '</td></tr>' );

    $('.btn').hover(function() {
        $(this).addClass('hover');
    },
        function() {
            $(this).removeClass('hover');
        }
    );
});