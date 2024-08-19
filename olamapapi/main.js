const password = "mdwL0Lqqh4_5R1bcpUtr-Iek~CXuS"
const olaMaps = new OlaMapsSDK.OlaMaps({
    apiKey: "V3wdFFOURBt1X0SsEbyVmG7seTEA3IqdUy52rfi4",
})

const myMap = olaMaps.init({
    style: "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
    container: 'map',
    center: [77.61648476788898, 12.931423492103944],
    zoom: 15,
})

