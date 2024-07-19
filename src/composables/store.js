import { reactive } from "vue";

export const store = reactive({
    step: "step1",
    updateStep(s) {
        store.step = s;
    },
    sampleLocs: "own",
    lonDegs: "",
    lonMins: "",
    lonSecs: "",
    lonHems: "", // East, West.
    latDegs: "",
    latMins: "",
    latSecs: "",
    latHems: "", // North, South.
    percision: "",
    updateSampleLocs(loc) {
        if (loc === "own") {
            store.sampleLocs = "own";
            store.lonDegs = "";
            store.lonMins = "";
            store.lonSecs = "";
            store.lonHems = ""; // East; West.
            store.latDegs = "";
            store.latMins = "";
            store.latSecs = "";
            store.latHems = ""; // North, South.
            store.percision = "";
        }

        if (loc === "eiffel") {
            store.sampleLocs = "eiffel";
            store.lonDegs = "2";
            store.lonMins = "17";
            store.lonSecs = "40.8984";
            store.lonHems = "east"; // East; West.
            store.latDegs = "48";
            store.latMins = "51";
            store.latSecs = "29.1348";
            store.latHems = "north"; // North, South.
            store.percision = "4";
        }

        if (loc === "moma") {
            store.sampleLocs = "moma";
            store.lonDegs = "73";
            store.lonMins = "58";
            store.lonSecs = "41.7756";
            store.lonHems = "west"; // East; West.
            store.latDegs = "40";
            store.latMins = "45";
            store.latSecs = "41.4324";
            store.latHems = "north"; // North, South.
            store.percision = "4";
        }

        if (loc === "hallgrim") {
            store.sampleLocs = "hallgrim";
            store.lonDegs = "21";
            store.lonMins = "55";
            store.lonSecs = "35.8968";
            store.lonHems = "west"; // East; West.
            store.latDegs = "64";
            store.latMins = "8";
            store.latSecs = "30.1776";
            store.latHems = "north"; // North, South.
            store.percision = "4";
        }
    },
    resetVars() {
        store.sampleLocs = "own";
        store.lonDegs = "";
        store.lonMins = "";
        store.lonSecs = "";
        store.lonHems = "";
        store.latDegs = "";
        store.latMins = "";
        store.latSecs = "";
        store.latHems = "";
        store.percision = "";
        store.resultLon = "";
        store.resultLat = "";
    },
    resultLon: "",
    resultLat: ""
});