function Destination {}

$(document).ready(function(){
  $("#blanks").submit(function(event){
    event.preventDefault();
    var userLocation = $("input#location").val();
    var userLandmarks = $("input#landmarks").val();
    var userSeason = $("input#Landmarks").val();
    var userNotes = $("input#notes").val();
  });

});
