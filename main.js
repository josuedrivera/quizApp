// array of questions, possible answers, and correct answers

var questions = [
	{
		question : " What division do the San Francisco 49ers belong to?",
		answers  : [" Coastal Division", " NFC West", " PAC-10", " AFC West"],
		correct  : " NFC West"
	},
	{
		question : "What city is Levi's Stadium located in?",
		answers  : ["San Francisco, CA", "South San Francisco, CA", "Santa Clara, CA", "San Jose, Ca"],
		correct  : "Santa Clara, CA"
	},
	{
		question : " How many times have the San Francisco 49ers been division champions between 1970 and 2019?",
		answers  : [" 17", " 22", " 29", " 32"],
		correct  : " 29"
	},
	{
		question : " How many Superbowls have the San Francisco 49ers won?",
		answers  : [" 2", " 5", " 6", " 8"],
		correct  : " 5"
	},
	{
		question : " What is the name of San Francisco 49ers mascot?",
		answers  : [" Lou Seal", " Banjo Man", " Goldie", " Sourdough Sam"],
		correct  : " Sourdough Sam"
	},
	{
		question : " What year where the San Francisco Establish",
		answers  : [" 1946", " 1947", " 1948", " 1949"],
		correct  : " 1946"
	},
	{
		question : " The San Francisco 49ers started out in which league?",
		answers  : [" American Football League (AFL)", " National Footbal League (NFL)", " United States Football League (USFL)", " All-America Football Conference (AAFC)"],
		correct  : " All-America Football Conference (AAFC)"
	},
	{
		question : " The San Francisco 49ers are T-2nd for most Conference Championship Game appearences. How many Conference Championship games have the 49ers appeared in?",
		answers  : [" 14", "15 ", "16 ", " 17"],
		correct  : " 15"
	},
	{
		question : " Who leads the franchise in regular season rushing yards?",
		answers  : [" Garrison Hearst", " Joe Perry", " Roger Craig", " Frank Gore"],
		correct  : " Frank Gore"
	},
	{
		question : " Which of these 49er player did NOT receive AP NFL MVP title?",
		answers  : [" John Brodie", " Joe Montana", " Jerry Rice", " Steve Young"],
		correct  : " Jerry Rice"
    }
    // ,
	// {
	// 	question : "Which team do Niner fans dislike the most?",
	// 	answers  : [" Dallas Cowboys", " Los Angeles Rams", " Seattle Seahawks", " Oakland/Los Angeles/Las Vegas Raiders"],
	// 	correct  : " Dallas Cowboys", " Los Angeles Rams", " Seattle Seahawks", " Oakland/Los Angeles/Las Vegas Raiders"
	// }
];



var questionForm = document.getElementById("questionForm");

// begin the game when the user hits the start button
function startGame() {
	// clear any previous html
	questionForm.innerHTML = "";

	// update style of form to center elements
	questionForm.style.margin  = "12% auto";

	// load the 1st question
	createQuestion();
};


function createQuestion() {
	// clear any previous html
	questionForm.innerHTML = "";

	// loop through questions when page loads
	for (var i = 0; i < 1; i++) {
		// Create Elements when page loads
		var formGroup   = document.createElement("div");
		var questionEl  = document.createElement("h2");

		// Add attributes to Elements
		formGroup.className = "formGroup";
		questionEl.id       = "questions" + [i];

		// Create text for question
		var questionText = document.createTextNode(questions[i].question);

		// Add question text to Element
		questionEl.appendChild(questionText);

		// Add Element to dom
		formGroup.appendChild(questionEl);

		// add formgroup to questionForm
		questionForm.appendChild(formGroup);

		// add answers to the dom
		for (var j = 0; j < questions[i].answers.length; j++) {
			// create possible answers
			var answerDiv  = document.createElement("div");
			var answerEl   = document.createElement("input");

			// create text node for question
			var answerText = document.createTextNode(questions[i].answers[j]);

			// add question to div
			answerDiv.appendChild(answerEl);
			answerDiv.appendChild(answerText);

			// add attributes
			answerDiv.className = "questionWrap";
			answerEl.type       = "radio";
			answerEl.name       = "radio" + [i];
			answerEl.value      = questions[i].answers[j];

			// add questions to formGroup
			formGroup.appendChild(answerDiv);
		};
	};

	// create submit button
	var submitBtn  = document.createElement("button");

	// add attributes
	submitBtn.className   = "btn btn-lg btn-outline-danger";
	submitBtn.textContent = "Submit Answer";
	submitBtn.type        = "button";
	submitBtn.onclick     = submitAnswer;

	// add button to form group
	questionForm.appendChild(submitBtn);
};


function submitAnswer() {
	// get all input tags with possible answers
	var els = document.getElementsByTagName("input");

	// loop through those inputs
	for (var i = 0; i < els.length; i++) {
		// check which radio is checked and if the user answer is correct
		if (els[i].checked && els[i].value.trim() == questions[0].correct.trim()) {
			// confirm for develpoer that the user got the question correct
			console.log("Correct Answer", els[i]);

			// remove the current question from the questions array
			questions.shift();

			// find parent and add class of right
			els[i].parentElement.className = "questionWrap right";

			// check to see if there are any more questions, if 0 then Game Over
			if(questions.length == 0) {
				// clear any previous html
				questionForm.innerHTML = "";

				// update styles of questionForm
				questionForm.style.textAlign = "center";
				questionForm.style.margin  = "0 auto";

				// Display GAME OVER to user
				questionForm.innerHTML = "<h1>Good Job, You Completed the Quiz!</h1>" + "<br>" +  "<img src='img/success.gif'>";

				// stop the function when the user wins
				return;
			};

			// if the user is correct and more questions exist, move to the next question
			setTimeout(function(){
				createQuestion();
			}, 2000);

			// stop the function, user got it correect
			return;
		};
	};

	// confirm for develpoer that the user got the question incorrect
	console.log("Incorrect Answer");

	// find the parent of the input element and add a class of wrong to it
	for (var i = 0; i < els.length; i++) {
		// find current radio checked
		if (els[i].checked) {
			// find parent and add class of wrong
			els[i].parentElement.className = "questionWrap wrong";
		};
	};
};
