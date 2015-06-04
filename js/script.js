//on page load, bring up start page
//every time next button is clicked, go to new page
//populate fields with information from object
//increment a counter for number correct

//counter for what they got right
//counter for place in array; make array of objects
//start quiz button
//submit button
//next question button
//indicate correct as NUMBER. easier than string match-checking
//put all objects in an array. easier to loop through
var counter = 0;

$(document).ready(function(){
	newQuiz();
	$(".button").on("click", ".startButton", startButton);

	$(".button").on("hover", ".submitStuff", function(){
		$(".submitStuff").css("color", "white");
		$(".submit").css("color" , "white");
		$(".arrow").css("color" , "white");
		$(".fa fa-arrow-circle-right fa-2x").css("color" , "white");
	});

	$(".button").on("click", ".submitStuff", submitQuestion);
}); //end document ready

function clearEverything(){
	$(".title").children().remove();
	$(".contentArea").children().remove();
	$(".button").children().remove();
};

function newQuiz(){
	clearEverything();
	$(".title").append("<h1 class=\"quizTitle\">Test your perfume knowledge!</h1>");
	$(".button").append("<div class=\"buttonDiv\"><button class=\"startButton\">Start</button></div>")
};

function startButton(){
	clearEverything();
	var currentQuestion = new Question();
	currentQuestion = questionArray[counter];
	$(".title").append("<h1 class=\"question\">" + currentQuestion.question + "</h1>");
	$(".contentArea").append("<form class=\"choicesBox\">" + 
			"<div class=\"choiceDiv\"><label><input type=\"radio\" class=\"choice\" name=\"answer\" value=\"1\">" 
			+ currentQuestion.option1 + "</label></div>" + "<br>" + 

			"<div class=\"choiceDiv\"><label><input type=\"radio\" class=\"choice\" name=\"answer\" value=\"2\">"
			+ currentQuestion.option2 + "</label></div>" + "<br>" +

			"<div class=\"choiceDiv\"><label><input type=\"radio\" class=\"choice\" name=\"answer\" value=\"3\">"
			+ currentQuestion.option3 + "</label></div>" + "<br>" +

			"<div class=\"choiceDiv\"><label><input type=\"radio\" class=\"choice\" name=\"answer\" value=\"4\">"
			+ currentQuestion.option4 + "</label></div>" + 
	"</form>" );

	$(".button").append(
		"<div class=\"submitStuff\">" + 
			"<div class=\"arrow\"><i class=\"fa fa-arrow-circle-right fa-2x\"></i></div>" + 
			"<div class=\"submit\"><span class=\"submit\">SUBMIT?</span></div>" +
		"</div>"
	);
	$(".button").css("float", "right");
	$(".submitStuff").css("float", "right");
};

function submitQuestion(){
	clearEverything();
	var currentQuestion = new Question();
	currentQuestion = questionArray[counter];
	$(".title").append("<h1 class=\"question\">" + currentQuestion.question + "</h1>");
	$(".contentArea").append("");
	$(".button").append(
		"<div class=\"nextQuestion\">" + 
			"<div class=\"arrow\"><i class=\"fa fa-arrow-circle-right fa-2x\"></i></div>" + 
			"<div class=\"submit\"><span class=\"submit\">NEXT QUESTION?</span></div>" +
		"</div>"
	);
	counter++;
};

function nextQuestion(){

};

//Create object constructor and declare all needed objects

function Question(){
	this.question = null;
	this.answer = null;
	this.option1 = null;
	this.option2 = null;
	this.option3 = null;
	this.option4 = null;
}

var question1 = new Question();
question1.answer = 2;
question1.question = "Which perfume house is considered the forerunner of the modern perfume industry?";
question1.option1 = "Guerlain";
question1.option2 = "Houbigant";
question1.option3 = "Chanel";
question1.option4 = "Dior";

var question2 = new Question();
question2.answer = 4;
question2.question = "What fragrance was made popular with Marilyn Monroe's usage?";
question2.option1 = "Jean Patou Joy";
question2.option2 = "Yves Saint Laurent Opium";
question2.option3 = "Guerlain Shalimar";
question2.option4 = "Chanel No. 5";

var question3 = new Question();
question3.answer = 4;
question3.question = "What is the difference between Eau de Toilette and Eau de Parfum?";
question3.option1 = "The Eau de Toilette is less expensive than the Eau de Parfum.";
question3.option2 = "The Eau de Toilette is less concentrated than the Eau de Parfum.";
question3.option3 = "The Eau de Toilette sometimes smells slightly different from the Eau de Parfum.";
question3.option4 = "All of the above.";

var question4 = new Question();
question4.answer = 1;
question4.question = "Which one of these fragrance ingredients is NOT from an animal source?";
question4.option1 = "Oud";
question4.option2 = "Castoreum";
question4.option3 = "Ambergris";
question4.option4 = "Musk";

var question5 = new Question();
question5.answer = 3;
question5.question = "What are the characteristic notes that make up a Chypre scent?";
question5.option1 = "Sandalwood, cedar, patchouli";
question5.option2 = "Lavender, coumarin, oakmoss";
question5.option3 = "Citrus, oakmoss, patchouli, musk";
question5.option4 = "Amber, vanilla, spices";

var questionArray = new Array();
questionArray[0] = question1;
questionArray[1] = question2;
questionArray[2] = question3;
questionArray[3] = question4;
questionArray[4] = question5;