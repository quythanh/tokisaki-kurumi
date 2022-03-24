$("#general-label").click(() => {
    if (!$("#general-label").hasClass("active")) {

        $("#google-label").attr("class", "col-4 mainLabel");
        $("#google-page").attr("class", "row hidden justify-content-center");

        $("#skill-label").attr("class", "col-4 mainLabel");
        $("#skill-page").attr("class", "row hidden");

        $("#general-label").attr("class", "col-4 mainLabel active");
        $("#general-page").attr("class", "row");
    }
});
$("#google-label").click(() => {
    if (!$("#google-label").hasClass("active")) {
        $("#general-label").attr("class", "col-4 mainLabel");
        $("#general-page").attr("class", "row hidden");

        $("#skill-label").attr("class", "col-4 mainLabel");
        $("#skill-page").attr("class", "row hidden");

        $("#google-content").attr("class", "col-8 hidden");

        $("#google-label").attr("class", "col-4 mainLabel active");
        $("#google-page").attr("class", "row justify-content-center");
    }
});
$("#skill-label").click(() => {
    if (!$("#skill-label").hasClass("active")) {
        $("#general-label").attr("class", "col-4 mainLabel");
        $("#general-page").attr("class", "row hidden");

        $("#google-label").attr("class", "col-4 mainLabel");
        $("#google-page").attr("class", "row hidden justify-content-center");

        $("#skill-label").attr("class", "col-4 mainLabel active");
        $("#skill-page").attr("class", "row");
    }
});