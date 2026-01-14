$(document).ready(function() {
    let homeUrl = $(location).attr("href");
    let pageUrl = $(location).attr("href").split("/").pop();
    let hero = $("#hero");

    if (pageUrl != homeUrl) {
        hero.css({
            "height": "100%"
        });
    }
});
