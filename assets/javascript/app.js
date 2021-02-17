// giphy key: dSe8JxZC5c32HRcUeWDIT7n5R8PYUmTF
let topics = ["parrot", "toucan", "parakeet", "lovebird", "blue-and-yellow macaw", "scarlet macaw", "rainbow lorikeet", "african gray"]


// EVENTS *********************************************************
// Append the buttons from topics array when form loads
window.onload = function() {
    for (let i = 0; i < topics.length; i++) {
        const element = topics[i];
        appendButton(element)
    } 
}

// when topic button is pushed populate gifs with initial static thumbnails
$(document).on("click",".topic-button", function(event) {
    // let topicsIndex = parseInt(this["id"])
    // alert(this.textContent)
    populateGifContainer(this.textContent)
});

// when static thumbnail is pushed, animate gif
$(document).on("click",".card-img-top", function(event) {
    this.src = this.id
});

// when topic input is submitted, add a button for it, and populate gif container with static thumbnails
$("#submit").on("click",function(event) {
    let topicSubmitted = $("#topicInput").val()
    // alert(topicSubmitted)
    appendButton(topicSubmitted)
    populateGifContainer(topicSubmitted)
});

// FUNCTIONS *******************************************
function appendButton(btnText) {
    let newButton = $("<button>")
    newButton.attr("type", "button")
    newButton.attr("class", "btn btn-info m-2 topic-button")
    // newButton.attr("id", i)
    newButton.text(btnText)
    $("#buttonContainer").append(newButton)
};


function populateGifContainer(strTopic) {
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dSe8JxZC5c32HRcUeWDIT7n5R8PYUmTF&q="+ strTopic +"&rating=g";
    
    let gifDiv = $("#gifContainer")
    gifDiv.empty()
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
          console.log(response)
        //   console.log(response.data.length);
        let ary = response.data
        for (let i = 0; i < ary.length; i++) {
            const element = ary[i];
            // console.log(element.rating);

            // myDiv.attr("class", "single-gif")
            // let newGif = $("<img src='https://media.giphy.com/media/"+ element.id +"/giphy.gif'>")
            // myDiv.text("Rating: " + element.rating)
            // myDiv.html("<img src='https://media.giphy.com/media/"+ element.id +"/giphy.gif' class='card-img-top'><br><p class='text-center'>Rating :" + element.rating + "</p>")
            
            let cardDiv = $("<div class='card m-1' style='width: 16rem;'>")
            let imageUrl = element.images.downsized_still.url
            let gifUrl = element.images.downsized_medium.url
            cardDiv.html("<img id='" + gifUrl + "' src='" + imageUrl + "' class='card-img-top'>")
            // cardDiv.html("<img src='https://media.giphy.com/media/"+ element.id +"/giphy.gif' class='card-img-top'>")
            let cardBodyDiv = $("<div class='card-body'>")
            let cardText = $("<p class='text-center my-1'><b>" + element.title + "</b></p><p class='text-center my-0'>Rating: " + element.rating + "</p>")
            cardBodyDiv.append(cardText)
            // cardDiv.append(imgHolder)
            cardDiv.append(cardBodyDiv)
            gifDiv.append(cardDiv)
        
        }
    });

}