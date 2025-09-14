import { reactive } from "vue";

export const store = reactive({
    step: "step1",
    updateStep(s) {
        store.step = s;
    },
    currentLoc: "own",
    currentLocName: "Enter your own",
    lonDegs: "",
    lonMins: "",
    lonSecs: "",
    lonHems: "", // East, West.
    latDegs: "",
    latMins: "",
    latSecs: "",
    latHems: "", // North, South.
    precision: "",
    updateLoc(loc) {
        if (loc === "own") {
            store.currentLoc = "own";
            store.currentLocName = "Enter your own";
            store.lonDegs = "";
            store.lonMins = "";
            store.lonSecs = "";
            store.lonHems = ""; // East; West.
            store.latDegs = "";
            store.latMins = "";
            store.latSecs = "";
            store.latHems = ""; // North, South.
            store.precision = "";
        }

        if (loc === "eiffel") {
            store.currentLoc = "eiffel";
            store.currentLocName = "Eiffel Tower";
            store.lonDegs = "2";
            store.lonMins = "17";
            store.lonSecs = "40.8984";
            store.lonHems = "east"; // East; West.
            store.latDegs = "48";
            store.latMins = "51";
            store.latSecs = "29.1348";
            store.latHems = "north"; // North, South.
            store.precision = "4";
        }

        if (loc === "moma") {
            store.currentLoc = "moma";
            store.currentLocName = "Museum Modern Art";
            store.lonDegs = "73";
            store.lonMins = "58";
            store.lonSecs = "41.7756";
            store.lonHems = "west"; // East; West.
            store.latDegs = "40";
            store.latMins = "45";
            store.latSecs = "41.4324";
            store.latHems = "north"; // North, South.
            store.precision = "4";
        }

        if (loc === "hallgrim") {
            store.currentLoc = "hallgrim";
            store.currentLocName = "Hallgrimskirkja";
            store.lonDegs = "21";
            store.lonMins = "55";
            store.lonSecs = "35.8968";
            store.lonHems = "west"; // East; West.
            store.latDegs = "64";
            store.latMins = "8";
            store.latSecs = "30.1776";
            store.latHems = "north"; // North, South.
            store.precision = "4";
        }
    },
    resetVars() {
        store.currentLoc = "own";
        store.currentLocName = "Enter your";
        store.lonDegs = "";
        store.lonMins = "";
        store.lonSecs = "";
        store.lonHems = "";
        store.latDegs = "";
        store.latMins = "";
        store.latSecs = "";
        store.latHems = "";
        store.precision = "";
        store.resultLon = "";
        store.resultLat = "";
    },
    resultLon: "",
    resultLat: ""
});