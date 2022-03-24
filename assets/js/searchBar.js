// cSpell:words Tokisaki Kurumi

$("#searchbar").click((event) => {
    switch (event.target.id) {
        case "search-by-voice":
            $("#searchbar-text").text("lmao, chả ai xài cái nút này cả");
            break;

        case "search-button":
            ($("#google-content").hasClass("hidden")) ?
            $("#google-content").removeClass("hidden"):
                $("#searchbar-text").text("kết quả đã hiện sẵn rồi mà =]");
            break;

        default:
            $("#searchbar-text").text("không được tìm cái khác đâu");
            break;
    }

    lastTimeout = setTimeout(() => {
        $("#searchbar-text").text("Tokisaki Kurumi");
    }, 2000);
});