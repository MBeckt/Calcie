// JavaScript source code

$(document).ready(function () {
    $('#Block1').mouseenter(function () {
        $('#Block1').fadeTo('slow', 0);
    });
    $('#Block1').mouseleave(function () {
        $('#Block1').fadeTo('slow', 1);
    });
});