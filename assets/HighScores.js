var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Add event listener for Clear button
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}
// Add event listener for Go Back button
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});