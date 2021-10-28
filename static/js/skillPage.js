new Vue({
    el: '#app1',
    computed: {
        lineStyles() {
            return this.lineTemp == null ? this.line : this.lineTemp;
        }
    },
    mounted() {
        const tab = $("#main-form-label")[0];
        if (tab) {
            let styles = {
                left: tab.offsetLeft,
                width: tab.clientWidth
            }
            this.line = styles;
        }
    },
    data() {
        return {
            currentTab: 0,
            line: {
                left: 0,
                width: 89
            },
            lineTemp: null
        }
    },
    methods: {
        onTabClick(evt) {
            const tab = evt.target

            switch (tab.parentElement.id) {
                case "main-form-label":
                    $("#reverse-form-label").attr("class", "nav-item label");
                    $("#reverse-form-content").attr("class", "col-12 hidden");
                    $("#main-form-content").attr("class", "col-12");
                    this.currentTab = 0;
                    break;
                case "reverse-form-label":
                    $("#main-form-label").attr("class", "nav-item label");
                    $("#main-form-content").attr("class", "col-12 hidden");
                    $("#reverse-form-content").attr("class", "col-12");
                    this.currentTab = 1;
                    break;
            }
            tab.parentElement.className = "nav-item label active"

            let styles = {
                left: tab.offsetLeft,
                width: tab.clientWidth
            }
            this.line = styles;
        },
        onTabMouseEnter(evt) {
            const tab = evt.target

            switch (tab.id) {
                case "main-form-label":
                    $("#reverse-form-content").attr("class", "col-12 hidden");
                    $("#main-form-content").attr("class", "col-12");
                    break;
                case "reverse-form-label":
                    $("#main-form-content").attr("class", "col-12 hidden");
                    $("#reverse-form-content").attr("class", "col-12");
                    break;
            }

            let styles = {
                left: tab.offsetLeft,
                width: tab.clientWidth
            }
            this.lineTemp = styles;
        },
        onTabMouseLeave() {
            this.lineTemp = null;

            switch (this.currentTab) {
                case 0:
                    $("#reverse-form-content").attr("class", "col-12 hidden");
                    $("#main-form-content").attr("class", "col-12");
                    break;
                case 1:
                    $("#main-form-content").attr("class", "col-12 hidden");
                    $("#reverse-form-content").attr("class", "col-12");
                    break;

            }
        }
    }
})