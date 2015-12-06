//
// Ruslan Ardashev
// Duke University '15
// ruslanArdashev.com
// Copyright 2016
//
// Imported
// * jquery (edge)
//

// vars
var idArray = [
  
  "contact",
  "education",
  "ibm",
  "apportable",
  "projects",
  "stocks",
  "processorResearch",
  "iFixTeam",
  "jailbreakDevelopment",
  "recognition",
  "fitness",
  "animation",
  "teachingAssistant"
  
]


// functions
$(document).ready(
  
  function() {

  	configureSideList();
    configureMainBackground();
  	handleButtonPress(idArray[0].concat("Button"));
  
	}
  
);

function configureSideList() {

  var sideList = $('#sideList');
  var sideListTop = sideList.position().top;
  var pageHeight = $(document).height();
  var scrollableHeight = pageHeight - sideListTop;
  $('#scrollableSideList').height(scrollableHeight);

}

function configureMainBackground() {

  var mainBackground = $('#mainBackground');
  var mainBackgroundLeft = mainBackground.position().left;
  var pageWidth = $(document).width();
  var width = pageWidth - mainBackgroundLeft;
  mainBackground.width(width);

}

/* button press -->
 -buttons-
 [1] go through button id array, unbold all
 [2] bold, em selected button

 -targets-
 [1] go through target id array, hide all
 [2] reveal selected target
 */
function handleButtonPress(buttonId) {

  var id = buttonId.replace("Button", "");
  var targetId = id.concat("Target");
  
  for (i = 0; i < idArray.length; i++) { 

    var idEntry = idArray[i];
    var buttonIdToNormalize = idEntry.concat("Button");
    var targetIdToHide = idEntry.concat("Target");
    
    normalizeButton(buttonIdToNormalize);
    hideTargetId(targetIdToHide);

  }
  
  highlightPressedButton(buttonId);
  displayTargetId(targetId);

}

function normalizeButton(buttonIdToNormalize) {
  
  document.getElementById(buttonIdToNormalize).style.color="#ede0c5";
  document.getElementById(buttonIdToNormalize).style.fontWeight="";
  
}

function highlightPressedButton(buttonId) {
  
  document.getElementById(buttonId).style.color="#9e906d";
  document.getElementById(buttonId).style.fontWeight="bold";
  
}

function hideTargetId(targetIdToHide) {
  
	$('#'.concat(targetIdToHide)).hide();
    
}
  
function displayTargetId(targetId) {
    
	$('#'.concat(targetId)).show();
  
}
