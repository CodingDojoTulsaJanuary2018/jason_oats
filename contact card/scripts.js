$(document).ready(function () {
    var click = 'Click for description!'

    $(document).on('click', 'input[type=submit]', function (event) {
        $('#users').append('<div></div>');
        
        $('#users div:last-child').append('<span class="name">' + $('#first').val() + " " + $('#last').val() + '</span>');
        $('#users div:last-child').append('<span class="click">' + click + '</span>');
        $('#users div:last-child').append('<span class="desc" style="display: none">' + $('#desc').val() + '</span>');

        $('input[type="text"], textarea').val("");

        event.preventDefault();
    });

    $(document).on('click', '#users div', function () {
        $(this).children().toggle();
    })
});