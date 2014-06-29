//////////////////////////////////////////////
//
// Ruslan Ardashev (ruslan.ardashev@duke.edu)
// 06/21/14
//
//////////////////////////////////////////////

var currPage = "";


$(document).ready(function(){
    
    $('#ece250Page').hide(0);
    $('#backButton').hide(0);
    
    $('#loadECE250ReviewPage').click(function() {
     
        // Hide home page and header
        $('#homePage').slideUp(500, function () {
            $('#header').slideUp(1000, function() {
                $('#backButton').slideDown(500, function() {
                    currPage = "#ece250Page";
                    $('#ece250Page').slideDown(500);
                });
            });
        });
        
        // Show back button
        
        
        // Show rest of page

        
    });
    
    $('#backButton').click(function() {
     
        // Hide current page
        $(currPage).slideUp(500);
        $('#backButton').slideUp(500);
        
        // Show header, show home 
        $('#header').slideDown(500);
        $('#homePage').slideDown(500);
        
    });
    
});