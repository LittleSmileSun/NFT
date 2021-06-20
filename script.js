'use strict';

$(document).ready(function() {
    $('.select_lang').niceSelect();
});

function viewDiv(){
    let active = document.getElementsByClassName("active")[0];
    let hidden = document.getElementsByClassName("hidden")[0];
    if (active.style.display === "none") {
        active.style.display = "block";
    } else {
        active.style.display = "none";
    }
};