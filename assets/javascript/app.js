
let topics = ["parrot", "toucan", "parakeet", "lovebird", "blue-and-yellow macaw", "scarlet macaw", "rainbow lorikeet", "oropendula"]

window.onload = function() {
    for (let i = 0; i < topics.length; i++) {
        const element = topics[i];
        let newButton = $("<button>")
        newButton.attr("type", "button")
        newButton.attr("class", "btn btn-info m-2 topic-button")
        newButton.attr("id", i)
        newButton.text(element)
        $(".container").append(newButton)
        
    } 
}


$(document).on("click",".topic-button", function(event) {
    let topicsIndex = parseInt(this["id"])
    alert(topicsIndex)

    for (let i = 0; i < 10; i++) {
        // this is where you need to get your gifs.
        
    }
});