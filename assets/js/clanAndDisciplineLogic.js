const disciplineDropDowns = ["disciplineOne", "disciplineTwo", "disciplineThree", "disciplineFour", "disciplineFive", "disciplineSix"];

function setAvailableDisciplines(clan) {
  $('.disciplineOptions').remove();
  let found = false;
  let counter = 0;
  if (clan) {
    while (!found) {
      if (clan == clanList.fifthEdition[counter].clanName) {
        $('#disciplineDropDownOne').append(`<option class="disciplineOptions" selected value=""> -- select an option -- </option>`);
        $('#disciplineDropDownTwo').append(`<option class="disciplineOptions" selected value=""> -- select an option -- </option>`);
        $('#disciplineDropDownThree').append(`<option class="disciplineOptions" selected value=""> -- select an option -- </option>`);
        $('#disciplineDropDownFour').append(`<option class="disciplineOptions" selected value=""> -- select an option -- </option>`);
        $('#disciplineDropDownFive').append(`<option class="disciplineOptions" selected value=""> -- select an option -- </option>`);
        $('#disciplineDropDownSix').append(`<option class="disciplineOptions" selected value=""> -- select an option -- </option>`);
        if (clanList.fifthEdition[counter].clanDisciplines[0].discipline != 'All') {
          for (let i = 0; i < clanList.fifthEdition[counter].clanDisciplines.length; i++) {
            $('#disciplineDropDownOne').append(
              `<option class="disciplineOptions" value="${clanList.fifthEdition[counter].clanDisciplines[i].discipline}">
                ${clanList.fifthEdition[counter].clanDisciplines[i].discipline}
              </option>`
            )
          }
          for (let i = 0; i < clanList.fifthEdition[counter].clanDisciplines.length; i++) {
            $('#disciplineDropDownTwo').append(
              `<option class="disciplineOptions" value="${clanList.fifthEdition[counter].clanDisciplines[i].discipline}">
                ${clanList.fifthEdition[counter].clanDisciplines[i].discipline}
              </option>`
            )
          }
          for (let i = 0; i < clanList.fifthEdition[counter].clanDisciplines.length; i++) {
            $('#disciplineDropDownThree').append(
              `<option class="disciplineOptions" value="${clanList.fifthEdition[counter].clanDisciplines[i].discipline}">
                ${clanList.fifthEdition[counter].clanDisciplines[i].discipline}
              </option>`
            )
          }
          for (let i = 0; i < clanList.fifthEdition[counter].clanDisciplines.length; i++) {
            $('#disciplineDropDownFour').append(
              `<option class="disciplineOptions" value="${clanList.fifthEdition[counter].clanDisciplines[i].discipline}">
                ${clanList.fifthEdition[counter].clanDisciplines[i].discipline}
              </option>`
            )
          }
          for (let i = 0; i < clanList.fifthEdition[counter].clanDisciplines.length; i++) {
            $('#disciplineDropDownFive').append(
              `<option class="disciplineOptions" value="${clanList.fifthEdition[counter].clanDisciplines[i].discipline}">
                ${clanList.fifthEdition[counter].clanDisciplines[i].discipline}
              </option>`
            )
          }
          for (let i = 0; i < clanList.fifthEdition[counter].clanDisciplines.length; i++) {
            $('#disciplineDropDownSix').append(
              `<option class="disciplineOptions" value="${clanList.fifthEdition[counter].clanDisciplines[i].discipline}">
                ${clanList.fifthEdition[counter].clanDisciplines[i].discipline}
              </option>`
            )
          }

          $('#disciplineDropDownOne').append(
            `<option disabled class="disciplineOptions" value="">---------------</option>`
          );
          $('#disciplineDropDownTwo').append(
            `<option disabled class="disciplineOptions" value="">---------------</option>`
          );
          $('#disciplineDropDownThree').append(
            `<option disabled class="disciplineOptions" value="">---------------</option>`
          );
          $('#disciplineDropDownFour').append(
            `<option disabled class="disciplineOptions" value="">---------------</option>`
          );
          $('#disciplineDropDownFive').append(
            `<option disabled class="disciplineOptions" value="">---------------</option>`
          );
          $('#disciplineDropDownSix').append(
            `<option disabled class="disciplineOptions" value="">---------------</option>`
          );
        }

        for (let x = 0; x < disciplineList.disciplines.length; x++) {
          let clanDiscipline = false;
          for (let y = 0; y < clanList.fifthEdition[counter].clanDisciplines.length; y++) {
            if (disciplineList.disciplines[x].discipline == clanList.fifthEdition[counter].clanDisciplines[y].discipline) {
              clanDiscipline = true;
            }
          }
          if (!clanDiscipline) {
            $('#disciplineDropDownOne').append(
              `<option class="disciplineOptions" value="${disciplineList.disciplines[x].discipline}">${disciplineList.disciplines[x].discipline}</option>`
            )
            $('#disciplineDropDownTwo').append(
              `<option class="disciplineOptions" value="${disciplineList.disciplines[x].discipline}">${disciplineList.disciplines[x].discipline}</option>`
            )
            $('#disciplineDropDownThree').append(
              `<option class="disciplineOptions" value="${disciplineList.disciplines[x].discipline}">${disciplineList.disciplines[x].discipline}</option>`
            )
            $('#disciplineDropDownFour').append(
              `<option class="disciplineOptions" value="${disciplineList.disciplines[x].discipline}">${disciplineList.disciplines[x].discipline}</option>`
            )
            $('#disciplineDropDownFive').append(
              `<option class="disciplineOptions" value="${disciplineList.disciplines[x].discipline}">${disciplineList.disciplines[x].discipline}</option>`
            )
            $('#disciplineDropDownSix').append(
              `<option class="disciplineOptions" value="${disciplineList.disciplines[x].discipline}">${disciplineList.disciplines[x].discipline}</option>`
            )
          }
        }
        found = true;
      } else {
        counter++;
      }
      if (counter > clanList.fifthEdition.length) {
        found = true;
      }
    }
  }
}

function setAvailableAbilities(discipline, columnNum) {
  if (discipline) {
    $(`.${disciplineDropDowns[columnNum]}`).append(
      `<option disabled selected class="abilityOptions" value="">---------------</option>`
    );
    for (let x = 0; x < disciplineList.disciplines.length; x++) {
      if (disciplineList.disciplines[x].discipline == discipline) {
        for (let y = 0; y < disciplineList.disciplines[x].abilities.length; y++) {
          $(`.${disciplineDropDowns[columnNum]}`).append(
            `<option class="abilityOptions" value="${disciplineList.disciplines[x].abilities[y].name}">
              ${disciplineList.disciplines[x].abilities[y].name} | Level: ${disciplineList.disciplines[x].abilities[y].level}
            </option>`
          )
        }
      }
    }
  }
}

function populateClanList() {
  $('#clan').append(`<option disabled selected value> -- select an option -- </option>`)
  for (let i = 0; i < clanList.fifthEdition.length; i++) {
    $('#clan').append(`<option value="${clanList.fifthEdition[i].clanName}">${clanList.fifthEdition[i].clanName}</option>`);
  }
}

populateClanList();

$('#clan').on("click", function () {
  //Stops all other listeners from being called. This was implimented because of actions occurring twice instead of only running once.
  event.stopImmediatePropagation();
  $('.abilityOptions').remove();
  setAvailableDisciplines($('#clan')[0].value);
})

$('#disciplineDropDownOne').on("click", function () {
  //Stops all other listeners from being called. This was implimented because of actions occurring twice instead of only running once.
  event.stopImmediatePropagation();
  $(`.${disciplineDropDowns[0]}`).children('.abilityOptions').remove();
  setAvailableAbilities($('#disciplineDropDownOne')[0].value, 0);
})

$('#disciplineDropDownTwo').on("click", function () {
  //Stops all other listeners from being called. This was implimented because of actions occurring twice instead of only running once.
  event.stopImmediatePropagation();
  $(`.${disciplineDropDowns[1]}`).children('.abilityOptions').remove();
  setAvailableAbilities($('#disciplineDropDownTwo')[0].value, 1);
})

$('#disciplineDropDownThree').on("click", function () {
  //Stops all other listeners from being called. This was implimented because of actions occurring twice instead of only running once.
  event.stopImmediatePropagation();
  $(`.${disciplineDropDowns[2]}`).children('.abilityOptions').remove();
  setAvailableAbilities($('#disciplineDropDownThree')[0].value, 2);
})

$('#disciplineDropDownFour').on("click", function () {
  //Stops all other listeners from being called. This was implimented because of actions occurring twice instead of only running once.
  event.stopImmediatePropagation();
  $(`.${disciplineDropDowns[3]}`).children('.abilityOptions').remove();
  setAvailableAbilities($('#disciplineDropDownFour')[0].value, 3);
})

$('#disciplineDropDownFive').on("click", function () {
  //Stops all other listeners from being called. This was implimented because of actions occurring twice instead of only running once.
  event.stopImmediatePropagation();
  $(`.${disciplineDropDowns[4]}`).children('.abilityOptions').remove();
  setAvailableAbilities($('#disciplineDropDownFive')[0].value, 4);
})

$('#disciplineDropDownSix').on("click", function () {
  //Stops all other listeners from being called. This was implimented because of actions occurring twice instead of only running once.
  event.stopImmediatePropagation();
  $(`.${disciplineDropDowns[5]}`).children('.abilityOptions').remove();
  setAvailableAbilities($('#disciplineDropDownSix')[0].value, 5);
})