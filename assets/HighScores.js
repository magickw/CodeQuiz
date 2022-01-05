var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#back");

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

// Create a list of highscores
if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}

// Add event listener for Clear button
clear.addEventListener("click", function () {
    //Clear all highscores
    localStorage.clear();
    //Reloads the current URL, like the Refresh button
    location.reload();
});

// Add event listener for Go Back button
back.addEventListener("click", function () {
    //Redirect the current URL to index.html on the same window
    window.location.replace("./index.html");
});