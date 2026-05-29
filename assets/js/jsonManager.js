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
      html: '<span stlye="color: #DD0000; font-weight: bold;">&#42;</span>&nbsp;<span style="color: white;">Please add a character name!</span>', align: 'top', duration: 4000
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