let classList;
// const classList = $.getJSON({'url': "../json/classList.js", 'async': false});


// let mydata;
// classList = require('./json/classList.json');
// .then(response => response.json()) 
// .then(jsonResponse => classList = jsonResponse)

async function getJSONs() {

    // , async function (data) {

    $.getJSON("./classList.js", function (data) {
        console.log(data);
        // classList = data;
    });
    // classList = await fetch(`../json/classList.json`).json();
    console.log(classList);
    // });
    // classList = await JSON.parse(`../json/classList.json`);

}

getJSONs();

// console.log(classList);

const clanList = {
    fifthEdition: [
        { clanName: "Banu Haqim" },
        {
            clanName: "Brujah",
            clanDisciplines: [{ discipline: "Celerity" }, { discipline: "Potence" }, { discipline: "Presence" }],
            archetypeList: [
                { archetype: "Cancer In The System" },
                { archetype: "Voice Of The People" },
                { archetype: "Blood Worshipper" },
                { archetype: "Trolling Punk" },
                { archetype: "Monster In Disguise" }
            ]
        },
        {
            clanName: "Gangrel",
            clanDisciplines: [{ discpline: "Animalism" }, { discipline: "Fortitude" }, { discipline: "Protean" }]
        },
        { clanName: "Hecata" },
        { clanName: "Lasombra" },
        { clanName: "Malkavian" },
        { clanName: "Ministry" },
        { clanName: "Nosferatu" },
        { clanName: "Ravnos" },
        { clanName: "Salubri" },
        { clanName: "Toreador" },
        { clanName: "Tremere" },
        { clanName: "Tzimisce" },
        { clanName: "Ventrue" }
    ]
};

// const disciplinesList = fetch(`../json/disciplineList.json`);

const predatorTypeList = {
    predatorTypes: [
        { name: "Alleycat" },
        { name: "Bagger" },
        { name: "Blood Leech" },
        { name: "Cleaver" },
        { name: "Consensualist" },
        { name: "Extortionist" },
        { name: "Farmer" },
        { name: "Graverobber" },
        { name: "Grim Reaper" },
        { name: "Montero" },
        { name: "Osiris" },
        { name: "Pursuer" },
        { name: "Sandman" },
        { name: "Scene Queen" },
        { name: "Siren" },
        { name: "Trapdoor" }
    ]
};

const attributeDisbursement = {
    BestAttribute: { amount: 1, val: 4 },
    WorstAttribute: { amount: 1, val: 1 },
    GoodAttribute: { amount: 3, val: 3 },
    OkAttributes: { amount: 4, val: 2 }
};
const skillDisbursement = {
    JackOfAllTrades: { FiveDotSkills: 0, FourDotSkills: 0, ThreeDotSkills: 1, TwoDotSkills: 8, OneDotSkills: 10 },
    Balanced: { FiveDotSkills: 0, FourDotSkills: 0, ThreeDotSkills: 3, TwoDotSkills: 5, OneDotSkills: 7 },
    Specialist: { FiveDotSkills: 0, FourDotSkills: 1, ThreeDotSkills: 3, TwoDotSkills: 3, OneDotSkills: 3 }
};

async function checkboxAdjuster(elementClass, idNum) {
    let idList = new Array();
    let start = parseInt(idNum);
    idList = await $(`.${elementClass}`);
    for (let i = 0; i < $(`.${elementClass}`).length; i++) {
        idList[i] = $(`.${elementClass}`)[i].id;
    }
    if (idNum == 1 && !$(`#${idList[2]}`)[0].checked && !$(`#${idList[1]}`)[0].checked) {
        $(`#${idList[1]}`).prop('checked', false);
    } else {
        for (let i = start; i > 0; i--) {
            $(`#${idList[i]}`).prop('checked', true);
        }
    }
    // 0 is the parent element that holds each of the checkboxes
    start = parseInt(idNum) + 1;
    for (let i = start; i < idList.length; i++) {
        $(`#${idList[i]}`).prop('checked', false);
    }
}

for (let i = 0; i < classList.data.length; i++) {
    $(`.${classList.data[i].class}`).on('click', function (event) {
        //Stops all other listeners from being called. This was implimented because of actions occurring twice instead of only running once.
        event.stopImmediatePropagation();
        let idNum = event.originalEvent.explicitOriginalTarget.id.substring(classList.data[i].class.length);
        checkboxAdjuster(classList.data[i].class, idNum);
    })
}