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