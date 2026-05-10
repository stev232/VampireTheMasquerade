const classList = {
    data: [
        { class: "bloodPotency", num: 10 }, { class: "hunger", num: 5 }, { class: "health", num: 15 }, { class: "humanity", num: 10 },
        { class: "willPower", num: 15 }, { class: "strength", num: 5 }, { class: "charisma", num: 5 }, { class: "intelligence", num: 5 },
        { class: "dexterity", num: 5 }, { class: "manipulation", num: 5 }, { class: "wits", num: 5 }, { class: "stamina", num: 5 },
        { class: "composure", num: 5 }, { class: "resolve", num: 5 }, { class: "athletics", num: 5 }, { class: "animalKen", num: 5 },
        { class: "academics", num: 5 }, { class: "brawl", num: 5 }, { class: "etiquette", num: 5 }, { class: "awereness", num: 5 },
        { class: "craft", num: 5 }, { class: "insight", num: 5 }, { class: "finance", num: 5 }, { class: "drive", num: 5 },
        { class: "intimidation", num: 5 }, { class: "investigation", num: 5 }, { class: "firearms", num: 5 }, { class: "leadership", num: 5 },
        { class: "medicine", num: 5 }, { class: "melee", num: 5 }, { class: "performance", num: 5 }, { class: "occult", num: 5 },
        { class: "larceny", num: 5 }, { class: "persuasion", num: 5 }, { class: "politics", num: 5 }, { class: "stealth", num: 5 },
        { class: "streetwise", num: 5 }, { class: "science", num: 5 }, { class: "survival", num: 5 }, { class: "subterfuge", num: 5 },
        { class: "technology", num: 5 }
    ]
};

const clanList = {
    fifthEdition: [
        { clanName: "Banu Haqim" }, { clanName: "Brujah" }, { clanName: "Gangrel" }, { clanName: "Hecata" }, { clanName: "Lasombra" }, { clanName: "Malkavian" },
        { clanName: "Ministry" }, { clanName: "Nosferatu" }, { clanName: "Ravnos" }, { clanName: "Salubri" }, { clanName: "Toreador" }, { clanName: "Tremere" },
        { clanName: "Tzimisce" }, { clanName: "Ventrue" }
    ]
};

const disciplinesList = {
    disciplines: [
        { discipline: "Animalism", abilities: [
            {name: "Bond Famulus", level: 1, ruleSet: "Core"}, 
            {name: "Sense The Beast", leve: 1, ruleSet: "Core"}, 
            {name: "Animal Messenger", level: 2, ruleSet: "ChildrenOfCaine"}, 
            {name: "Feral Whispers", level: 2, ruleSet: "Core"}, 
            {name: "Animal Succulence", level: 3, ruleSet: "Core"}, 
            {name: "Messenger's Command", level: 3, ruleSet: "ChildrenOfCaine"},
            {name: "Plague Of Beasts", level: 3, ruleSet: "ChildrenOfCaine"},
            {name: "Quell The Beast", level: 3, ruleSet: "Core"},
            {name: "Unliving Hive", level: 3, ruleSet: "Core"},
            {name: "Subsume The Spirit", level: 4, ruleSet: "Core"},
            {name: "Sway The Flock", level: 4, ruleSet: "ChildrenOfCaine"},
            {name: "Animal Dominion", level: 5, ruleSet: "Core"},
            {name: "Coax The Bestial Temper", level: 5, ruleSet: "ChildrenOfCaine"},
            {name: "Drawing Out The Beast", level: 5, ruleSet: "Core"}
        ]}, 
        { discipline: "Auspex", abilities: [
            {name: "Heightened Senses", level: 1, ruleSet: "Core"},
            {name: "Sense The Unseen", level: 1, ruleSet: "Core"},
            {name: "Panacea", level: 2, ruleSet: "ChildrenOfCaine"},
            {name: "Premonition", level: 2, ruleSet: "Core"},
            {name: "Reveal Temperament", level: 2, ruleSet: "ChildrenOfCaine"},
            {name: "Fatal Flaw", level: 3, ruleSet: "ChildrenOfCaine"},
            {name: "Scry The Soul", level: 3, ruleSet: "Core"},
            {name: "Share The Senses", level: 3, ruleSet: "Core"},
            {name: "Spirit's Touch", level: 4, ruleSet: "Core"},
            {name: "Clairvoyance", level: 5, ruleSet: "Core"},
            {name: "Possession", level: 5, ruleSet: "Core"},
            {name: "Telepathy", level: 5, ruleSet: "Core"},
            {name: "Unburdening The Bestial SOul", level: 5, ruleSet: "ChildrenOfCaine"}
        ] }, 
        { discipline: "Blood Sorcery" }, 
        { discipline: "Celerity", abilities: [
            {name: "Cat's Grace", level: 1, ruleSet: "Core"},
            {name: "Rapid Reflexes", level: 1, ruleSet: "Core"},
            {name: "Fleetness", level: 2, ruleSet: "Core"},
            {name: "Rush Job", level: 2, ruleSet: "ChildrenOfCaine"},
            {name: "Blink", level: 3, ruleSet: "Core"},
            {name: "Traversal", level: 3, ruleSet: "Core"},
            {name: "Weaving", level: 3, ruleSet: "ChildrenOfCaine"},
            {name: "Blurred Momentum", level: 4, ruleSet: "ChildrenOfCaine"},
            {name: "Draught Of Elegance", level: 4, ruleSet: "Core"},
            {name: "Unerring Aim", level: 4, ruleSet: "Core"},
            {name: "Unseen Strike", level: 4, ruleSet: "ChildrenOfCaine"},
            {name: "Lightning Strike", level: 5, ruleSet: "Core"},
            {name: "Split Second", level: 5, ruleSet: "Core"},
        ] }, 
        { discipline: "Dominate", abilities: [
            {name: "Cloud Memory", level: 1, ruleSet: "Core"},
            {name: "Compel", level: 1, ruleSet: "Core"},
            {name: "Slavish Devotion", level: 1, ruleSet: "ChildrenOfCaine"},
            {name: "Domitor's Favor", level: 2, ruleSet: "ChildrenOfCaine"},
            {name: "Mesmerize", level: 2, ruleSet: "Core"},
            {name: "Dementation", level: 2, ruleSet: "Core"},
            {name: "The Forgetful Mind", level: 3, ruleSet: "Core"},
            {name: "Submerged Directive", level: 3, ruleSet: "Core"},
            {name: "Ancestral Dominion", level: 4, ruleSet: "ChildrenOfCaine"},
            {name: "Implant Suggestion", level: 4, ruleSet: "ChildrenOfCaine"},
            {name: "Rationalize", level: 4, ruleSet: "Core"},
            {name: "Mass Manipulation", level: 5, ruleSet: "Core"},
            {name: "Terminal Decree", level: 5, ruleSet: "Core"},

        ] },
        { discipline: "Fortitude", abilities: [
            {name: "Resilience", level: 1, ruleSet: "Core"},
            {name: "Earth's Preseverance", level: 2, ruleSet: "ChildrenOfCaine"},
            {name: "Enduring Beast", level: 2, ruleSet: "Core"},
            {name: "Invigorating Vitae", level: 2, ruleSet: "ChildrenOfCaine"},
            {name: "Toughness", level: 2, ruleSet: "Core"},
            {name: "Defy Bane", level: 3, ruleSet: "Core"},
            {name: "Fortify The Inner Facade", level: 3, ruleSet: "Core"},
            {name: "Valeren", level: 3, ruleSet: "ChildrenOfCaine"},
            {name: "Draught Of Endurance", level: 4, ruleSet: "Core"},
            {name: "Gorgon's Scales", level: 4, ruleSet: "ChildrenOfCaine"},
            {name: "Flesh Of Marble", level: 5, ruleSet: "Core"},
            {name: "Prowess From Pain", level: 5, ruleSet: "Core"},

        ] }, 
        { discipline: "Obfuscate" }, 
        { discipline: "Oblivion" }, 
        { discipline: "Potence" }, 
        { discipline: "Presence" },
        { discipline: "Protean" }, 
        { discipline: "Thin-Blood Alchemy" }
    ]
};
const predatorTypeList = {
    predatorTypes: [
        {name: "Alleycat"},
        {name: "Bagger"},
        {name: "Blood Leech"},
        {name: "Cleaver"},
        {name: "Consensualist"},
        {name: "Extortionist"},
        {name: "Farmer"},
        {name: "Graverobber"},
        {name: "Grim Reaper"},
        {name: "Montero"},
        {name: "Osiris"},
        {name: "Pursuer"},
        {name: "Sandman"},
        {name: "Scene Queen"},
        {name: "Siren"},
        {name: "Trapdoor"}
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