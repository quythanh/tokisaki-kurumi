mainLabel1 = $("#general-label");
mainLabel2 = $("#google-label");
mainLabel3 = $("#skill-label");

mainPage1 = $("#general-page");
mainPage2 = $("#google-page");
mainPage3 = $("#skill-page");

mainLabel1.click(() => {
    if (!mainLabel1.hasClass("active")) {

        mainLabel2.attr("class", "col-4 mainLabel");
        mainPage2.attr("class", "row hidden justify-content-center");

        mainLabel3.attr("class", "col-4 mainLabel");
        mainPage3.attr("class", "row hidden");

        mainLabel1.attr("class", "col-4 mainLabel active");
        mainPage1.attr("class", "row");
    }
});
mainLabel2.click(() => {
    if (!mainLabel2.hasClass("active")) {
        mainLabel1.attr("class", "col-4 mainLabel");
        mainPage1.attr("class", "row hidden");

        mainLabel3.attr("class", "col-4 mainLabel");
        mainPage3.attr("class", "row hidden");

        $("#google-content").attr("class", "col-7 hidden");

        mainLabel2.attr("class", "col-4 mainLabel active");
        mainPage2.attr("class", "row justify-content-center");
    }
});
mainLabel3.click(() => {
    if (!mainLabel3.hasClass("active")) {
        mainLabel1.attr("class", "col-4 mainLabel");
        mainPage1.attr("class", "row hidden");

        mainLabel2.attr("class", "col-4 mainLabel");
        mainPage2.attr("class", "row hidden justify-content-center");

        mainLabel3.attr("class", "col-4 mainLabel active");
        mainPage3.attr("class", "row");
    }
});