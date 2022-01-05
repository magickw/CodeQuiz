//List the questions including their titles, 
//choices and answers in an array.
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "3. parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "3. quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["1. Javascript", "2. terminal / bash", "3. for loops", "4. console log"],
        answer: "4.console log"
    },

];
// Declares variables
var score = 0;
var questionIndex = 0;
var timeLeft = document.querySelector("#timeLeft");
var timer = document.querySelector("#start");
var questionsDiv = document.querySelector("#questionsDiv");

// 15 seconds per question:
var secondsLeft = 75;
// Holds interval time
var holdInterval = 0;
// Penalty time
var penalty = 10;
// Creates list elements
var createUl = document.createElement("ul");

// Timer Event listener
timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            timeLeft.textContent = "Time: " + secondsLeft + "s";
            //When timer reaches 0
            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                timeLeft.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Display the questions
function render(questionIndex) {
    // Clear text content
    questionsDiv.innerHTML = "";
    createUl.innerHTML = "";
    // For loops to loop through the questions in array
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // Executes a provided function once for each array element.
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(createUl);
        createUl.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Compare choices with answers
function compare(event) {
    // event.target refers to the clicked <li> element
    var element = event.target;
    if (element.matches("li")) {
        var alert = document.createElement("div");
        alert.setAttribute("id", "alert");
        //If the question answered correctly
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            alert.textContent = "Correct!";
        } else {
            // 10 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            alert.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }

    }
    // Then present the next question
    questionIndex++;

//Alerting game over when all questions are answered
    if (questionIndex >= questions.length) {
        allDone();
        alert.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " questions correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(alert);

}

// A new page will append when All Done
function allDone() {
    //Clears the questions and current time
    questionsDiv.innerHTML = "";
    timeLeft.innerHTML = "";

    // Creates a heading
    var h1 = document.createElement("h1");
    h1.setAttribute("id", "h1");
    h1.textContent = "All Done!"
    questionsDiv.appendChild(h1);

    // Creates a paragraph
    var p = document.createElement("p");
    p.setAttribute("id", "p");
    questionsDiv.appendChild(p);

    // Calculates time remaining and replaces it with score
    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var p2 = document.createElement("p");
        clearInterval(holdInterval);
        p2.textContent = "Your final score is: " + timeRemaining;
        questionsDiv.appendChild(p2);
    }

    // Creates a label
    var label = document.createElement("label");
    label.setAttribute("id", "label");
    label.textContent = "Enter your initials: ";
    questionsDiv.appendChild(label);

    // Creates a user's input area
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "initials");
    input.textContent = "";
    questionsDiv.appendChild(input);

    // Creates a Submit button
    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("id", "submit");
    submitBtn.textContent = "Submit";
    questionsDiv.appendChild(submitBtn);

    // Event listener to capture initials
    submitBtn.addEventListener("click", function () {
        var initials = input.value;
     //In case of no intials input
        if (initials === null) {
            alert("No value entered!");
        } else {
            var finalScore = {
                initials: initials,
                // The score is converted into time remaining.
                score: timeRemaining
            }
            console.log(finalScore);
            //Local storage for initials and scores
            var storedScores = localStorage.getItem("storedScores");
            if (storedScores === null) {
                storedScores = [];
            } else {
                storedScores = JSON.parse(storedScores);
            }
            // Add new score to the end of the array of scores
            storedScores.push(finalScore);
            var newScore = JSON.stringify(storedScores);
            localStorage.setItem("storedScores", newScore);
            window.location.replace("./HighScores.html");
        }
    });

}

