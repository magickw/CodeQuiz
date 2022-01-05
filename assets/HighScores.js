var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var back = document.querySelector("#back");
var allScores = JSON.parse(localStorage.getItem("allScores"));

// Create a list of highscores
function displayScores() {
    if (allScores !== null) {
    var scoreList = document.createElement("ol");
    for (var i = 0; i < allScores.length; i++) {
        var scoreEntry = document.createElement("li");
        scoreEntry.textContent = allScores[i].initials + " " + allScores[i].score;
        scoreList.appendChild(scoreEntry);
    }
    highScore.appendChild(scoreList);
}
};

displayScores();

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