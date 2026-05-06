const classList = {
    data: [{ class: "bloodPotency", num: 10 }, { class: "hunger", num: 5 }, { class: "health", num: 15 }, { class: "humanity", num: 10 },
    { class: "willPower", num: 15 }, { class: "strength", num: 5 }, { class: "charisma", num: 5 }, { class: "intelligence", num: 5 }, 
    { class: "dexterity", num: 5 }, { class: "manipulation", num: 5 }, { class: "wits", num: 5 }, { class: "stamina", num: 5 }, { class: "composure", num: 5 }, 
    { class: "resolve", num: 5 }, { class: "athletics", num: 5 }, { class: "animalKen", num: 5 }, { class: "academics", num: 5 }, { class: "brawl", num: 5 }, 
    { class: "etiquette", num: 5 }, { class: "awereness", num: 5 }, { class: "craft", num: 5 }, { class: "insight", num: 5 }, { class: "finance", num: 5 }, 
    { class: "drive", num: 5 }, { class: "intimidation", num: 5 }, { class: "investigation", num: 5 }, { class: "firearms", num: 5 }, 
    { class: "leadership", num: 5 }, { class: "medicine", num: 5 }, { class: "melee", num: 5 }, { class: "performance", num: 5 }, { class: "occult", num: 5 }, 
    { class: "larceny", num: 5 }, { class: "persuasion", num: 5 }, { class: "politics", num: 5 }, { class: "stealth", num: 5 }, { class: "streetwise", num: 5 }, 
    { class: "science", num: 5 }, { class: "survival", num: 5 }, { class: "subterfuge", num: 5 }, { class: "technology", num: 5 }]
};

const clanList = {
    fifthEdition:[
        {clanName: "Banu Haqim"}, {clanName: "Brujah"}, {clanName: "Gangrel"}, {clanName: "Hecata"}, {clanName: "Lasombra"}, {clanName: "Malkavian"},
        {clanName: "Ministry"}, {clanName: "Nosferatu"}, {clanName: "Ravnos"}, {clanName: "Salubri"}, {clanName: "Toreador"}, {clanName: "Tremere"},
        {clanName: "Tzimisce"}, {clanName: "Ventrue"}
    ]
};

const disciplinesList = {};
const predatorTypes = {};

const attributeDisbursement = { 
    BestAttribute: {amount:1, val:4}, 
    WorstAttribute: {amount:1, val:1}, 
    GoodAttribute: {amount:3, val:3},
    OkAttributes: {amount:4, val:2}
};
const skillDisbursement = {
    JackOfAllTrades:{FiveDotSkills: 0, FourDotSkills: 0, ThreeDotSkills: 1, TwoDotSkills: 8, OneDotSkills: 10},
    Balanced:{FiveDotSkills: 0, FourDotSkills: 0, ThreeDotSkills: 3, TwoDotSkills: 5, OneDotSkills: 7},
    Specialist:{FiveDotSkills: 0, FourDotSkills: 1, ThreeDotSkills: 3, TwoDotSkills: 3, OneDotSkills: 3}
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