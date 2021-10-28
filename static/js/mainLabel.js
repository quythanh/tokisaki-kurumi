mainLabel1 = $("#general-label");
mainLabel2 = $("#google-label");
mainLabel3 = $("#skill-label");

mainPage1 = $("#general-page");
mainPage2 = $("#google-page");
mainPage3 = $("#skill-page");

mainLabel1.click(() => {
    if (mainLabel1.className != "col-4 mainLabel active") {

        mainLabel2.className = "col-4 mainLabel";
        mainPage2.className = "row hidden justify-content-center";

        mainLabel3.className = "col-4 mainLabel";
        mainPage3.className = "row hidden";

        mainLabel1.className = "col-4 mainLabel active";
        mainPage1.className = "row";
    }
});
mainLabel2.click(() => {
    if (mainLabel2.className != "col-4 mainLabel active") {
        mainLabel1.className = "col-4 mainLabel";
        mainPage1.className = "row hidden";

        mainLabel3.className = "col-4 mainLabel";
        mainPage3.className = "row hidden";

        $("#google-content").className = "col-7 hidden";

        mainLabel2.className = "col-4 mainLabel active";
        mainPage2.className = "row justify-content-center";
    }
});
mainLabel3.click(() => {
    if (mainLabel3.className != "col-4 mainLabel active") {
        mainLabel1.className = "col-4 mainLabel";
        mainPage1.className = "row hidden";

        mainLabel2.className = "col-4 mainLabel";
        mainPage2.className = "row hidden justify-content-center";

        mainLabel3.className = "col-4 mainLabel active";
        mainPage3.className = "row";
    }
});