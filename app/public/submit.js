$(document).ready(function() {

    $("#submit").on("click", function() {

        var errmsg = '';

        if ($('#name').val() === '') {
            errmsg = errmsg + "Please enter name\n";
        }
        if ($('#photo').val() === '') {
            errmsg = errmsg + "Please enter photo url\n";
        }
        if ($('#photo').val().substring(0, 4) !== 'http') {
            errmsg = errmsg + "Photo url must start with http:\n";
        }
        if ($('#q1').val() === '') {
            errmsg = errmsg + "Please select an option in Question #1\n";
        }
        if ($('#q2').val() === '') {
            errmsg = errmsg + "Please select an option in Question #2\n";
            isDataValid = false;
        }
        if ($('#q3').val() === '') {
            errmsg = errmsg + "Please select an option in Question #3\n";
        }
        if ($('#q4').val() === '') {
            errmsg = errmsg + "Please select an option in Question #4\n";
        }
        if ($('#q5').val() === '') {
            errmsg = errmsg + "Please select an option in Question #5\n";
        }
        if ($('#q6').val() === '') {
            errmsg = errmsg + "Please select an option in Question #6\n";
        }
        if ($('#q7').val() === '') {
            errmsg = errmsg + "Please select an option in Question #7\n";
        }
        if ($('#q8').val() === '') {
            errmsg = errmsg + "Please select an option in Question #8\n";
        }
        if ($('#q9').val() === '') {
            errmsg = errmsg + "Please select an option in Question #9\n";
        }
        if ($('#q10').val() === '') {
            errmsg = errmsg + "Please select an option in Question #10\n";
        }
        if (errmsg !== "") {
            alert(errmsg);
            return false;
        }
        // --------------------------------------------------------------------------------
        //Survey Data collected at submit by user
        var surveyData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
        }

        // Grab the URL of the website
        var currentURL = window.location.origin;
        alert(currentURL + "/api/friends");

        // $.post(currentURL + "/api/friends", surveyData, function(data){
        //     //// Grab the result from the AJAX post so that the best match's name and photo are displayed.
        //     // $("#matchName").text(data.name);
        //     // $('#matchImg').attr("src", data.photo);
        //     // // Show the modal with the best match 
        //     // $("#resultsModal").modal('toggle');
        // });

        return true;
    });
}); //ready()