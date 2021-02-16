// giphy key: dSe8JxZC5c32HRcUeWDIT7n5R8PYUmTF
let topics = ["parrot", "toucan", "parakeet", "lovebird", "blue-and-yellow macaw", "scarlet macaw", "rainbow lorikeet", "oropendula"]


// EVENTS *********************************************************
window.onload = function() {
    for (let i = 0; i < topics.length; i++) {
        const element = topics[i];
        appendButton(element)
    } 
}


$(document).on("click",".topic-button", function(event) {
    // let topicsIndex = parseInt(this["id"])
    alert(this.textContent)
    populateGifContainer(this.textContent)
});

$("#submit").on("click",function(event) {
    let topicSubmitted = $("#topicInput").val()
    alert(topicSubmitted)
    appendButton(topicSubmitted)
    populateGifContainer(topicSubmitted)
});

// FUNCTIONS *******************************************
function appendButton(btnText) {
    let newButton = $("<button>")
    newButton.attr("type", "button")
    newButton.attr("class", "btn btn-info m-2 topic-button")
    newButton.attr("id", i)
    newButton.text(element)
    $("#buttonContainer").append(newButton)
};


function populateGifContainer(strTopic) {
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dSe8JxZC5c32HRcUeWDIT7n5R8PYUmTF&q="+ strTopic +"&rating=g";
    
    let myDiv = $("#gifContainer")
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    //   console.log(response)
    //   console.log(response.data.length);
      let ary = response.data
      for (let i = 0; i < ary.length; i++) {
        const element = ary[i];
        // console.log(element.id);

          let newGif = $("<img src='https://media.giphy.com/media/"+ element.id +"/giphy.gif'>")
          myDiv.append(newGif)
        // myDiv.append("<iframe src='" + element.embed_url + "'></iframe>")
        
      }
    });

}