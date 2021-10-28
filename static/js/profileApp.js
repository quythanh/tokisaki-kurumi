new Vue({
    el: '#profile-app',
    computed: {
        lineStyles() {
            return this.lineTemp == null ? this.line : this.lineTemp;
        }
    },
    mounted() {
        const tab = $("#profile-label-1");
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
                    $("#profile-label-2").className = "nav-item label";
                    $("#profile-img-2").className = "col-md-12 img hidden";
                    $("#profile-img-1").className = "col-md-12 img";
                    this.currentTab = 0;
                    break;
                case "profile-label-2":
                    $("#profile-label-1").className = "nav-item label";
                    $("#profile-img-1").className = "col-md-12 img hidden";
                    $("#profile-img-2").className = "col-md-12 img";
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

            $("#profile-img-1, #profile-img-2").toggleClass("hidden");

            // switch (tab.id) {
            //     case "profile-label-1":
            //         $("#profile-img-2").className = "col-md-12 img hidden";
            //         $("#profile-img-1").className = "col-md-12 img";
            //         break;
            //     case "profile-label-2":

            //         $("#profile-img-2").className = "col-md-12 img";
            //         break;
            // }

            let styles = {
                left: tab.offsetLeft,
                width: tab.clientWidth
            }
            this.lineTemp = styles;
        },
        onTabMouseLeave() {
            this.lineTemp = null;

            $("#profile-img-1, #profile-img-2").toggleClass("hidden");

            // switch (this.currentTab) {
            //     case 0:
            //         $("#profile-img-2").className = "col-md-12 img hidden";
            //         $("#profile-img-1").className = "col-md-12 img";
            //         break;
            //     case 1:
            //         $("#profile-img-1").className = "col-md-12 img hidden";
            //         $("#profile-img-2").className = "col-md-12 img";
            //         break;
            // }
        }
    }
})