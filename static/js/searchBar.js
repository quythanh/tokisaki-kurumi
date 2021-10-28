// cSpell:words Tokisaki Kurumi

txt = $("#searchbar-text");

$("#searchbar").click(event => {
    switch (event.target.id) {
        case "search-by-voice":
            txt.textContent = "lmao, chả ai xài cái nút này cả";
            break;

        case "search-button":
            ($("#google-content").className == "col-7 hidden") ?
            $("#google-content").className = "col-7":
                txt.textContent = "kết quả đã hiện sẵn rồi mà =]";
            break;

        default:
            txt.textContent = "không được tìm cái khác đâu";
            break;
    }

    lastTimeout = setTimeout(() => {
        txt.textContent = "Tokisaki Kurumi";
    }, 2000);
});