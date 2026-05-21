function setAvailableDisciplines(clan) {
  let found = false;
  let counter = 0;
  if (!clan) {
  } else {
    while (!found) {
      if (clan == clanList.fifthEdition[counter].clanName) {
        // console.log(counter);
        $('#disciplineDropDownOne').append(`<option disabled selected value> -- select an option -- </option>`)
        for (let i = 0; i < clanList.fifthEdition[counter].clanDisciplines.length; i++) {
          $('#disciplineDropDownOne').append(`<option value="${clanList.fifthEdition[counter].clanDisciplines[i]}">${clanList.fifthEdition[counter].clanDisciplines[i].discipline}</option>`)
        }
        $('#disciplineDropDownTwo').append(`<option disabled selected value> -- select an option -- </option>`)
        for (let i = 0; i < clanList.fifthEdition[counter].clanDisciplines.length; i++) {
          $('#disciplineDropDownTwo').append(`<option value="${clanList.fifthEdition[counter].clanDisciplines[i]}">${clanList.fifthEdition[counter].clanDisciplines[i].discipline}</option>`)
        }
        $('#disciplineDropDownThree').append(`<option disabled selected value> -- select an option -- </option>`)
        for (let i = 0; i < clanList.fifthEdition[counter].clanDisciplines.length; i++) {
          $('#disciplineDropDownThree').append(`<option value="${clanList.fifthEdition[counter].clanDisciplines[i]}">${clanList.fifthEdition[counter].clanDisciplines[i].discipline}</option>`)
        }
        found = true;
      } else {
        counter++;
      }
    }
  }
}

function setAvailableAbilities(discipline) {

}

function populateClanList() {
  $('#clan').append(`<option disabled selected value> -- select an option -- </option>`)
  for (let i = 0; i < clanList.fifthEdition.length; i++) {
    $('#clan').append(`<option value="${clanList.fifthEdition[i].clanName}">${clanList.fifthEdition[i].clanName}</option>`)
  }
}

populateClanList();

$('#clan').on("click", function () {
  //Stops all other listeners from being called. This was implimented because of actions occurring twice instead of only running once.
  event.stopImmediatePropagation();
  setAvailableDisciplines($('#clan')[0].value)
  // console.log($('#clan')[0].value);
})