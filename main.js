//////////////////////////////////////////////
//
// Ruslan Ardashev (ruslan.ardashev@duke.edu)
// 06/21/14
//
//////////////////////////////////////////////

var currPage = "";


$(document).ready(function(){
    
    $('#loadECE250ReviewPage').click(function() {
     
        // Hide home page and header
        $('#homePage').slideUp(500);
        $('#header').slideUp(500);
        
        // Show back button
        $('#backButton').slideDown(500);
        
        // Show rest of page
        currPage = "#ece250Page";
        $('#ece250Page').slideDown(500);
        
    });
    
    $('#backButton').click(function() {
     
        // Hide current page
        $(currPage).slideUp(500);
        
        // Show header, show home 
        $('#header').slideDown(500);
        $('#homePage').slideDown(500);
        
    });
    
});