# Code Quiz

## Purpose
This project is to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code. It will have a clean, polished, and responsive user interface. 

## Getting Started
When the user clicks the *Star Quiz* button, the countdown timer starts and the user will be presented with a question with multiple choices. The user will choose an answer and will be alerted wether they have selected the right answer. If the user answers incorrectly, the time will be deducted off by 10 seconds from the timer. After a question is answered, the user will be presented with another question imediately. 

The game is over when all questions are answered or the timer reaches 0. The user will receive a final score which actually is the time remaining in seconds. Therefore, the quicker and more accurate the users answer, the higher their scores.

The user can input their initials. The webpage stores all initials and scores until the user clears them. And the user can also retake the quiz by clicking the *Go Back* button.

## Process
* Step 1. Set up the structure, including the starter html, js and css files.<br>
In this step, we need two sets of html and js files.<br>
* Step 2. Show the questions and choices.  <br>
In this step, the questions are listed as an array of varibles, i.e. var = questions [], and indexed, i.e. var = questionsIndex []. When the user starts the quiz, the timer.addEventListener executes, showing the time remaining and it alerts "Time's up!" when the timer reaches 0. The user is presented with each question according to the question index. <br>
* Step 3. Compare the user's choice with the answer. Show the results.<br>
The user's initial score is 0 (var score = 0). When the user choses a choice, an event listener excutes to comapare the user's choice with the answer. If the question is answered correctly, then score++. If it's answered incorrectly, then the time left is deducted by 10 seconds. In either case, the user receives an alert telling they are either wrong or correct. And then the user will be presented with a new question, which means questionsIndex++. When the questionsIndex >= the length of questions, the user will be alerted that the game is over and their scores will be provided. On a new page, the user will be asked to provide their initials. <br>
* Step 4. Put results together.<br>
Once the initials are entered and the Submit button is clicked, use localStorage() statement to capture initials and scores. And use appendChild() statement to add new users and scores to the highscore list. The user then will be redirected to a new html webpage where the highscore list resides. Add the Clear and Go Back button event listeners to execute the actions of data clearance and going back to the start page.

## Demo
Note: the actual results of the deployed application may be slightly different from the Demo as shown below due to the differences in CSS applied: <br>
<img src="assets\demo.gif" alt="screenshot" />


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)


# Deployed Link

The link to the deployed application is: https://magickw.github.io/CodeQuiz/


## Authors

**Baofeng Guo**

- Github： https://github.com/magickw
- LinedIn： https://www.linkedin.com/in/bfguo/


## License
This project is licensed under the MIT License


