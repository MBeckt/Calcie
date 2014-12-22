// JavaScript source code

$(document).ready(function () {
    $('#Block1').mouseenter(function () {
        $('#Block1').fadeTo('slow', 0);
    });
    $('#Block1').mouseleave(function () {
        $('#Block1').fadeTo('slow', 1);
    });
    $('#Block2').mouseenter(function () {
        $('#Block2').fadeTo('slow', 0);
    });
    $('#Block2').mouseleave(function () {
        $('#Block2').fadeTo('slow', 1);
    });
    $('#Block3').mouseenter(function () {
        $('#Block3').fadeTo('slow', 0);
    });
    $('#Block3').mouseleave(function () {
        $('#Block3').fadeTo('slow', 1);
    });
    $('#Block4').mouseenter(function () {
        $('#Block4').fadeTo('slow', 0);
    });
    $('#Block4').mouseleave(function () {
        $('#Block4').fadeTo('slow', 1);
    });
    $('#Block5').mouseenter(function () {
        $('#Block5').fadeTo('slow', 0);
    });
    $('#Block5').mouseleave(function () {
        $('#Block5').fadeTo('slow', 1);
    });
    $('#button').click(function () {
        $('#slidey').slideToggle('slow');
    });
    $('#button').clickToggle(function () {
        $('#button').animate({
            'marginRight': "-=0.5em"
        });
    });
});
