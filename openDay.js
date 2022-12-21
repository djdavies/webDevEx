// Read the OpenDay file
$(document).ready(function () {
    $.getJSON("OpenDay.json", function (data) {
        $("#heading").append("<h1 class='display-1'>" + data.description + "</h1>");

        const myData = {};

        // topics arr
        $.each(data.topics, function (tKey, tValue) {
            myData.tCoverImage = tValue.cover_image;
            myData.tName = tValue.name;

            // programs arr
            $.each(tValue.programs, function (pKey, pValue) {
                myData.pCoverImage = pValue.cover_image;
                myData.pTitle = pValue.title;
                myData.pDesc = pValue.description;
                myData.pDescShort = pValue.description_short;
                myData.pFloor = pValue.floor;
                myData.pRoom = pValue.room;
            });

            // Display
            $("#openDayData").append(
                // "<li>" +
                "<div class='row'>" +
                    "<h2>" + myData.tName + "</h2>" +
                    "<img src='" + myData.tCoverImage + "'" + "/>" +

                    "<h3 class=\"title\">" + myData.pTitle + "</h3>" +
                    "<img src='" + myData.pCoverImage + "' class='img-fluid'" + "/>" +

                    "<p class='lead'>" + myData.pDesc + "</p>" +
                    "<p><em>" + myData.pDescShort + "</em></p>" +
                    "<p><strong><mark>" + myData.pFloor + " " + myData.pRoom + "</mark></strong></p>" +
                "</div>" 
                // + "</li>"
            )
        });
    });

     // Rudimentary filter
     $("#userInput").on("keyup", function() {
        let value = $(this).val().toLowerCase();
            $("#openDayData *").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
    });

    
});


