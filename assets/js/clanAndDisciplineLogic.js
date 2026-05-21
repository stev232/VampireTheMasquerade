function setAvailableDisciplines(clan) {
  $('.disciplineOptions').remove();
  let found = false;
  let counter = 0;
  if (clan) {
    while (!found) {
      if (clan == clanList.fifthEdition[counter].clanName) {
        // console.log(counter);
        $('#disciplineDropDownOne').append(`<option class="disciplineOptions" selected value=""> -- select an option -- </option>`)
        for (let i = 0; i < clanList.fifthEdition[counter].clanDisciplines.length; i++) {
          $('#disciplineDropDownOne').append(
            `<option class="disciplineOptions" value="${clanList.fifthEdition[counter].clanDisciplines[i]}">${clanList.fifthEdition[counter].clanDisciplines[i].discipline}</option>`
          )
        }
        $('#disciplineDropDownTwo').append(`<option class="disciplineOptions" selected value> -- select an option -- </option>`)
        for (let i = 0; i < clanList.fifthEdition[counter].clanDisciplines.length; i++) {
          $('#disciplineDropDownTwo').append(
            `<option class="disciplineOptions" value="${clanList.fifthEdition[counter].clanDisciplines[i]}">${clanList.fifthEdition[counter].clanDisciplines[i].discipline}</option>`
          )
        }
        $('#disciplineDropDownThree').append(`<option class="disciplineOptions" selected value> -- select an option -- </option>`)
        for (let i = 0; i < clanList.fifthEdition[counter].clanDisciplines.length; i++) {
          $('#disciplineDropDownThree').append(
            `<option class="disciplineOptions" value="${clanList.fifthEdition[counter].clanDisciplines[i]}">${clanList.fifthEdition[counter].clanDisciplines[i].discipline}</option>`
          )
        }

        $('#disciplineDropDownOne').append(
          `<option disabled class="disciplineOptions" value="">---------------</option>`
        )
        $('#disciplineDropDownTwo').append(
          `<option disabled class="disciplineOptions" value="">---------------</option>`
        )
        $('#disciplineDropDownThree').append(
          `<option disabled class="disciplineOptions" value="">---------------</option>`
        )

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

function setAvailableAbilities(discipline) {

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
  setAvailableDisciplines($('#clan')[0].value);
})