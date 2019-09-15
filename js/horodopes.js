// js to call on horoscope api and append data to links on horoscope page


function guesthoro() {
    var sign = $(".horoclass").data("value");  

        $.ajax({

            type: "GET",
            url: "http://sandipbgt.com/theastrologer/api/horoscope/" + sign + "/today/"
                // data: console.log(JSON.stringify(data))
        }).then(function(data) {
            var parseData = JSON.parse(data)
            console.log(parseData);
            $("#horodopeLinks").hide()
            var horoscopeDisplay = $("#today")
            var newDiv = $("<div>")
            var newText = $("<p>")
            var newDate = $("<p>")

            newText.text(parseData.horoscope)
            newText.addClass("today-horoscope")
            newDate.text(parseData.date)
            newDiv.append(newText)
          
            horoscopeDisplay.append(newDiv)


        })
 
}












// function Capicorn() {
//     alert('Capicorns ROCK')
//   }

// function Cancer() {
//     alert('Cancers are BETTER')
// }

// function Aquarius() {
//     alert('WE are better then you all')
// }


// Create function that creates a var that holds the value of the sign (i.e Cancer, Leo, etc.)
// Create api call that grabs that variable
// Use that var and render the proper data 
// Use express routes to send the user back to the page of your choice


// Assure that your horodopes.html page has the right onclick functions