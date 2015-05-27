//on page load, bring up start page
//every time next button is clicked, go to new page
//populate fields with information from object
//increment a counter for number correct

$(document).ready(){
	newQuiz();

};

function newQuiz(){
	
};

//Create object constructor and declare all needed objects

function Question(){
	this.number = null;
	this.question = null; 
	this.answer = null;
	this.option1 = null;
	this.option2 = null;
	this.option3 = null;
	this.option4 = null;
}

var question1 = new Question();
question1.number = 1;
question1.question = "Which perfume house is considered the forerunner of the modern perfume industry?";
question1.answer = "Houbigant";
question1.option1 = "Guerlain";
question1.option2 = "Houbigant";
question1.option3 = "Chanel";
question1.option4 = "Dior";

var question2 = new Question();
question2.number = 2;
question2.question = "What fragrance was made popular with Marilyn Monroe's usage?";
question2.answer = "Chanel No. 5";
question2.option1 = "Jean Patou Joy";
question2.option2 = "Yves Saint Laurent Opium";
question2.option3 = "Guerlain Shalimar";
question2.option4 = "Chanel No. 5";

var question3 = new Question();
question3.number = 3;
question3.question = "What is the difference between Eau de Toilette and Eau de Parfum?";
question3.answer = "All of the above.";
question3.option1 = "The Eau de Toilette is less expensive than the Eau de Parfum.";
question3.option2 = "The Eau de Toilette is less concentrated than the Eau de Parfum.";
question3.option3 = "The Eau de Toilette sometimes smells slightly different from the Eau de Parfum.";
question3.option4 = "All of the above.";

var question4 = new Question();
question4.number = 4;
question4.question = "Which one of these fragrance ingredients is NOT from an animal source?";
question4.answer = "Oud";
question4.option1 = "Oud";
question4.option2 = "Castoreum";
question4.option3 = "Ambergris";
question4.option4 = "Musk";

var question5 = new Question();
question5.number = 5;
question5.question = "What are the characteristic notes that make up a Chypre scent?";
question5.answer = "Citrus, oakmoss, patchouli, musk";
question5.option1 = "Sandalwood, cedar, patchouli";
question5.option2 = "Lavender, coumarin, oakmoss";
question5.option3 = "Citrus, oakmoss, patchouli, musk";
question5.option4 = "Amber, vanilla, spices";