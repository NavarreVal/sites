/*jslint browser: true*/
/*global $, jQuery*/

document.getElementById("imgButton").onclick = function () {
    document.getElementById("coin").style.display = "block";
    return true;
};

$(function () {
    $("#imgButton").click(function () {
        $("#coin").show();
    });

$(document).ready(function () {
    $(".coin").click(function () {
        $(this).animate({
            "up": "200px"
        });
                        