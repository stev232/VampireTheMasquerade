const jsFrame = new JSFrame();
    
function jsonPackager(data) {
  console.log("json Packager");
  console.log($('#characterName')[0].value);
  if (!$('#characterName')[0].value) {
    jsFrame.showToast({
      style: {
        border: '2px solid red',
        borderRadius: '2px',
        backgroundColor: '#000000',
      },
      html: '<img src="./assets/imgs/WoDStar.png" height="45" />&nbsp;<span style="color: white;">Please add a character name!</span>', align: 'top', duration: 4000
    });
  } else {
    jsFrame.showToast({
      style: {
        border: '2px solid red',
        borderRadius: '2px',
        backgroundColor: '#000000',
      },
      html: '<span style="color: white;">WIP!!! This feature is still in development!</span>', align: 'top', duration: 4000
    });
    let saveFile = {
      "Resonance": `${data.resonance}`,
      "BloodPotency": `${data.bloodPotency}`,
      "Hunger": `${data.hunger}`,
      "Health": `${data.health}`,
      "Humanity": `${data.humanity}`,
      "WillPower": `${data.willPower}`,
      "Name": `${data.name}`,
      "Concept": `${data.concept}`,
      "Predator": `${data.predator}`,
      "Chronicle": `${data.chronicle}`,
      "Ambition": `${data.ambition}`,
      "Clan": `${data.clan}`,
      "Sire": `${data.sire}`,
      "Desire": `${data.desire}`,
      "Generation": `${data.generation}`,
      "Attributes": {
        "Physical": {
          "Strength": `${data.strength}`,
          "Dexterity": `${data.dexterity}`,
          "Stamina": `${data.stamina}`
        },
        "Social": {
          "Charisma": `${data.charisma}`,
          "Manipulation": `${data.manipulation}`,
          "Composure": `${data.composure}`
        },
        "Mental": {
          "Intelligence": `${data.intelligence}`,
          "Wits": `${data.wits}`,
          "Resolve": `${data.resolve}`
        }
      },
      "Skills": {
        "Physical": {
          "Athletics": `${data.athletics}`,
          "Brawl": `${data.brawl}`,
          "Craft": `${data.craft}`,
          "Drive": `${data.drive}`,
          "Firearms": `${data.firearms}`,
          "Melee": `${data.melee}`,
          "Larceny": `${data.larceny}`,
          "Stealth": `${data.stealth}`,
          "Survival": `${data.survival}`
        },
        "Social": {
          "AnimalKen": `${data.animalKen}`,
          "Etiquette": `${data.etiquette}`,
          "Insight": `${data.insight}`,
          "Intimidation": `${data.intimidation}`,
          "Leadership": `${data.leadership}`,
          "Performance": `${data.performance}`,
          "Persuasion": `${data.persuasion}`,
          "Streetwise": `${data.streetwise}`,
          "Subterfuge": `${data.subterfuge}`
        },
        "Mental": {
          "Academics": `${data.academics}`,
          "Awareness": `${data.awareness}`,
          "Finance": `${data.finance}`,
          "Investigation": `${data.investigation}`,
          "Medicine": `${data.medicine}`,
          "Occult": `${data.occult}`,
          "Politics": `${data.politics}`,
          "Science": `${data.science}`,
          "Technology": `${data.technology}`
        }
      },
      "Disciplines": {
        "DisciplineOne": {
          "Level": `${data.disciplineOneLevel}`,
          "Abilities": {
            "AbilityOne": `${data.disciplineOneAbilityOne}`,
            "AbilityTwo": `${data.disciplineOneAbilityTwo}`,
            "AbilityThree": `${data.disciplineOneAbilityThree}`,
            "AbilityFour": `${data.disciplineOneAbilityFour}`,
            "AbilityFive": `${data.disciplineOneAbilityFive}`
        }
      },
        "DisciplineTwo": {
          "Level": `${data.disciplineTwoLevel}`,
          "Abilities": {
            "AbilityOne": `${data.disciplineTwoAbilityOne}`,
            "AbilityTwo": `${data.disciplineTwoAbilityTwo}`,
            "AbilityThree": `${data.disciplineTwoAbilityThree}`,
            "AbilityFour": `${data.disciplineTwoAbilityFour}`,
            "AbilityFive": `${data.disciplineTwoAbilityFive}`
        }
      },
        "DisciplineThree": {
          "Level": `${data.disciplineThreeLevel}`,
          "Abilities": {
            "AbilityOne": `${data.disciplineThreeAbilityOne}`,
            "AbilityTwo": `${data.disciplineThreeAbilityTwo}`,
            "AbilityThree": `${data.disciplineThreeAbilityThree}`,
            "AbilityFour": `${data.disciplineThreeAbilityFour}`,
            "AbilityFive": `${data.disciplineThreeAbilityFive}`
        }
      },
        "DisciplineFour": {
          "Level": `${data.disciplineFourLevel}`,
          "Abilities": {
            "AbilityOne": `${data.disciplineFourAbilityOne}`,
            "AbilityTwo": `${data.disciplineFourAbilityTwo}`,
            "AbilityThree": `${data.disciplineFourAbilityThree}`,
            "AbilityFour": `${data.disciplineFourAbilityFour}`,
            "AbilityFive": `${data.disciplineFourAbilityFive}`
        }
      },
        "DisciplineFive": {
          "Level": `${data.disciplineFiveLevel}`,
          "Abilities": {
            "AbilityOne": `${data.disciplineFiveAbilityOne}`,
            "AbilityTwo": `${data.disciplineFiveAbilityTwo}`,
            "AbilityThree": `${data.disciplineFiveAbilityThree}`,
            "AbilityFour": `${data.disciplineFiveAbilityFour}`,
            "AbilityFive": `${data.disciplineFiveAbilityFive}`
        }
      },
        "DisciplineSix": {
          "Level": `${data.disciplineSixLevel}`,
          "Abilities": {
            "AbilityOne": `${data.disciplineSixAbilityOne}`,
            "AbilityTwo": `${data.disciplineSixAbilityTwo}`,
            "AbilityThree": `${data.disciplineSixAbilityThree}`,
            "AbilityFour": `${data.disciplineSixAbilityFour}`,
            "AbilityFive": `${data.disciplineSixAbilityFive}`
          }
        }
      }
    }
  }
  return ("some text");
}

function downloadJSON(data) {
  // const fileName = `${data.characterName}.json`;
  // jsonPackager(data);
  console.log(data);
}

function uploadJSON(data) {
  console.log(data);
}

// function main(event) {
//   switch (event.command) {
//     case "download":
//       downloadJSON(event)
//       break;
//     case "upload":
//       uploadJSON(event);
//       break;

//     default:
//       console.log(event);
//       break;
//   }
// }

// main(event);

$('#downloadButton').on('click', function (event) {
  event.stopImmediatePropagation();
  downloadJSON(jsonPackager($('.characterSheetBody')));
});