const classList = {
    data: [{ class: "bloodPotency", num: 10 }, { class: "hunger", num: 5 }, { class: "health", num: 15 }, { class: "humanity", num: 10 },
    { class: "willPower", num: 15 }, { class: "strength", num: 5 }, { class: "charisma", num: 5 }, { class: "intelligence", num: 5 }, { class: "dexterity", num: 5 },
    { class: "manipulation", num: 5 }, { class: "wits", num: 5 }, { class: "stamina", num: 5 }, { class: "composure", num: 5 }, { class: "resolve", num: 5 },
    { class: "athletics", num: 5 }, { class: "animalKen", num: 5 }, { class: "academics", num: 5 }, { class: "brawl", num: 5 }, { class: "etiquette", num: 5 },
    { class: "awereness", num: 5 }, { class: "craft", num: 5 }, { class: "insight", num: 5 }, { class: "finance", num: 5 }, { class: "drive", num: 5 },
    { class: "intimidation", num: 5 }, { class: "investigation", num: 5 }, { class: "firearms", num: 5 }, { class: "leadership", num: 5 }, { class: "medicine", num: 5 },
    { class: "melee", num: 5 }, { class: "performance", num: 5 }, { class: "occult", num: 5 }, { class: "larceny", num: 5 }, { class: "persuasion", num: 5 },
    { class: "politics", num: 5 }, { class: "stealth", num: 5 }, { class: "streetwise", num: 5 }, { class: "science", num: 5 }, { class: "survival", num: 5 },
    { class: "subterfuge", num: 5 }, { class: "technology", num: 5 }]
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
        event.stopImmediatePropagation();
        let idNum = event.originalEvent.explicitOriginalTarget.id.substring(classList.data[i].class.length);
        checkboxAdjuster(classList.data[i].class, idNum);
    })
}