new Vue({
    el: '#profile-app',
    computed: {
        lineStyles() {
            return this.lineTemp == null ? this.line : this.lineTemp;
        }
    },
    mounted() {
        const tab = $("#profile-label-1")[0];
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
                left: 25,
                width: 129
            },
            lineTemp: null
        }
    },
    methods: {
        onTabClick(evt) {
            const tab = evt.target

            switch (tab.parentElement.id) {
                case "profile-label-1":
                    $("#profile-label-2").attr("class", "nav-item label");
                    $("#profile-img-2").attr("class", "col-md-12 img hidden");
                    $("#profile-img-1").attr("class", "col-md-12 img");
                    this.currentTab = 0;
                    break;
                case "profile-label-2":
                    $("#profile-label-1").attr("class", "nav-item label");
                    $("#profile-img-1").attr("class", "col-md-12 img hidden");
                    $("#profile-img-2").attr("class", "col-md-12 img");
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
                case "profile-label-1":
                    $("#profile-img-2").attr("class", "col-md-12 img hidden");
                    $("#profile-img-1").attr("class", "col-md-12 img");
                    break;
                case "profile-label-2":
                    $("#profile-img-1").attr("class", "col-md-12 img hidden");
                    $("#profile-img-2").attr("class", "col-md-12 img");
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
                    $("#profile-img-2").attr("class", "col-md-12 img hidden");
                    $("#profile-img-1").attr("class", "col-md-12 img");
                    break;
                case 1:
                    $("#profile-img-1").attr("class", "col-md-12 img hidden");
                    $("#profile-img-2").attr("class", "col-md-12 img");
                    break;
            }
        }
    }
})