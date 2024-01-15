import { reactive } from "vue";

export const store = reactive({
    step: "step1",
    updateStep(s) {
        store.step = s;
    },
    lonDegs: "",
    lonMins: "",
    lonSecs: "",
    lonHems: "", // East, West.
    latDegs: "",
    latMins: "",
    latSecs: "",
    latHems: "", // North, South.
    percision: "",
    resetVars() {
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