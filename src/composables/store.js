import { reactive } from "vue";

export const store = reactive({
    step: "step1",
    updateStep(s) {
        store.step = s;
    },
    lonDegs: "",
    lonDegsError: false,
    updateLonDegs(etv) {
        if (etv >= 0 && etv <=180) {
            store.lonDegsError = false;
            store.lonDegs = etv;
        } else {
            store.lonDegsError = true;
        }
    },
    lonMins: "",
    lonMinsError: false,
    updateLonMins(etv) {
        if (etv >= 0 && etv <=60) {
            store.lonMinsError = false;
            store.lonMins = etv;
        } else {
            store.lonMinsError = true;
        }
    },
    lonSecs: "",
    lonSecsError: false,
    updateLonSecs(etv) {
        if (etv >= 0 && etv <=60) {
            store.lonSecsError = false;
            store.lonSecs = etv;
        } else {
            store.lonSecsError = true;
        }
    },
    lonHems: "", // East, West.
    lonHemsError: false,
    updateLonHems(etv) {
        if (etv === "east" || etv === "west") {
            store.lonHemsError = false;
            store.lonHems = etv;
        } else {
            store.lonHemsError = true;
        }
    },
    latDegs: "",
    latDegsError: false,
    updateLatDegs(etv) {
        if (etv >= 0 && etv <=90) {
            store.latDegsError = false;
            store.latDegs = etv;
        } else {
            store.latDegsError = true;
        }
    },
    latMins: "",
    latMinsError: false,
    updateLatMins(etv) {
        if (etv >= 0 && etv <=60) {
            store.latMinsError = false;
            store.latMins = etv;
        } else {
            store.latMinsError = true;
        }
    },
    latSecs: "",
    latSecsError: false,
    updateLatSecs(etv) {
        if (etv >= 0 && etv <=60) {
            store.latSecsError = false;
            store.latSecs = etv;
        } else {
            store.latSecsError = true;
        }
    },
    latHems: "", // North, South.
    latHemsError: false,
    updateLatHems(etv) {
        if (etv === "north" || etv === "south") {
            store.latHemsError = false;
            store.latHems = etv;
        } else {
            store.latHemsError = true;
        }
    },
    percision: "",
    percisionError: false,
    updatePercision(etv) {
        if (etv === "level1" || etv === "level2" || etv === "level3" || etv === "level4" || etv === "level5" || etv === "level6"){
            store.percisionError = false;
            store.percision = etv;
        } else {
            store.percisionError = true;
        }
    },
    checkLonSuccess() {
        if (store.lonDegs === "" || store.lonDegs < 0 || store.lonDegs > 180) {
            store.lonDegsError = true;
        } else if (store.lonMins === "" || store.lonMins < 0 || store.lonMins > 60) {
            store.lonMinsError = true;
        } else if (store.lonSecs === ""|| store.lonSecs < 0 || store.lonSecs > 60) {
            store.lonSecsError = true;
        } else if (store.lonHems === "") {
            store.lonHemsError = true;
        } else {
            return true;
        }
    },
    checkLatSuccess() {
        if (store.latDegs === "" || store.latDegs < 0 || store.latDegs > 90) {
            store.latDegsError = true;
        } else if (store.latMins === "" || store.latMins < 0 || store.latMins > 60) {
            store.latMinsError = true;
        } else if (store.latSecs === ""|| store.latSecs < 0 || store.latSecs > 60) {
            store.latSecsError = true;
        } else if (store.latHems === "") {
            store.latHemsError = true;
        } else {
            return true;
        }
    },
    checkPercisionSuccess() {
        if (store.percision === "") {
            store.percisionError = true; 
        } else {
            return true;
        }
    }
});
