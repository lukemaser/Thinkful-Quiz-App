$(document).ready(function() {
	// Questions
	var Questions = [{
		question: "When were doughnuts invented?",
		multipleChoice: ["500 B.C.", "1922", "Mid 1800s"],
		questionNum: 0,
		correctChoice: 2,
		trivia: "Legend has it that the hole in the middle originated from a sailor punching the middle out of the pastries his mother made because they weren't cooked completely."
	},
	{
		question: "What famous children's book features a doughnut making machine?",
		multipleChoice: [" Homer Price", " Where the Wild Things Are", " Amelia Bedelia"],
		questionNum: 1,
		correctChoice: 0,
		trivia: "Homer Price was turned into a musical."
	},
	{
		question: "How many doughnuts are consumed by Americans each year?",
		multipleChoice: ["A Baker's Dozen", "500 something", "Over ten billion"],
		questionNum: 2,
		correctChoice: 2,
		trivia: "Surprisingly, this is not a problem."
	},
	{
		question: "What are doughnuts called in Poland?",
		multipleChoice: ["Paczkis (pronounced poonch-key)", "Polish Donuts", "Go nuts"],
		questionNum: 3,
		correctChoice: 0,
		trivia: "Paczki's are consumed by the dozens the week before lent. (As well as all kinds of junk food.)"
	},
	{
		question: "What state has an  official state doughnut?",
		multipleChoice: ["Nebraska", "Louisiana", "Ohio"],
		questionNum: 4,
		correctChoice: 1,
		trivia: "The Beignet (ben-yay), is the official state doughnut of Louisiana."
	}]

	var currentQuestion = 0;
	var currentScore = 0;

	$("#controls").on('click', '#submit', function(e) {
		e.preventDefault();
		keepScore();
		showTrivia();

		currentQuestion++;
		
	});

	$("#controls").on('click', '#next', function(e) {
		e.preventDefault();
		nextQuestion();
		$("#next").css("display", "none");
		$("#submit").css("display", "inline");
	});

	$('#controls').on('click', '#new', function(e) {
		currentScore = 0;
		currentQuestion = 0;
		e.preventDefault();
		nextQuestion();
		var newAnswer1 = '<h2 class="question"><span>'+Questions[currentQuestion].question+'</span></h2><input type="radio" name="Answer" class="answer-select" value="0" /><span class="answer-one">'+Questions[currentQuestion].multipleChoice[0]+'</span></br><input type="radio" name="Answer" class="answer-select" value="1"/><span class="answer-two">'+Questions[currentQuestion].multipleChoice[1]+'</span></br><input type="radio" name="Answer" class="answer-select" value="2"/><span class="answer-three">'+Questions[currentQuestion].multipleChoice[2]+'</span>';
		$(".question-wrapper").html(newAnswer1);
		$("#new").css("display", "none");
		$("#submit").css("display", "inline");
	});

	// Track user's score //
	function keepScore() {
		var answer = $("input[type='radio']:checked").val();
		if (answer == Questions[currentQuestion].correctChoice) {
			currentScore++;
			console.log("correct");
		}
	}
	function showTrivia() {
		$(".question").remove();
		$("#question-wrapper input").remove();
		$("#question-wrapper span").remove();
		var triviaDisplay = '<h2 class=question>'+Questions[currentQuestion].trivia+'</h2>';
		console.log("currrent?");
		$("#question-wrapper").html(triviaDisplay);
		$("#next").css("display", "inline");
		$("#submit").css("display", "none");
	}

	function nextQuestion() {
		if(currentQuestion < 5) {
			$(".question").remove();
			$("#question-wrapper input").remove();
			$("#question-wrapper span").remove();
			var newAnswer1 = '<h2 class="question"><span>'+Questions[currentQuestion].question+'</span></h2><input type="radio" name="Answer" class="answer-select" value="0" /><span class="answer-one">'+Questions[currentQuestion].multipleChoice[0]+'</span></br><input type="radio" name="Answer" class="answer-select" value="1"/><span class="answer-two">'+Questions[currentQuestion].multipleChoice[1]+'</span></br><input type="radio" name="Answer" class="answer-select" value="2"/><span class="answer-three">'+Questions[currentQuestion].multipleChoice[2]+'</span>';
			$("#question-wrapper").html(newAnswer1);
		} else {
			$(".question").remove();
			$("#question-wrapper input").remove();
			$("#question-wrapper span").remove();
			$("#new").css("display", "inline");
			$("#submit").css("display", "none");
			if (currentScore >= 4){
				var qLast = '<p>Cool.</br>You got ' +currentScore+' out of 5 correct.</br> Congratulate yourself with a doughnut.</br>Want to try again?</p>';
				$("#question-wrapper").html(qLast);
			} else if (currentScore <= 4) {
				var qLast = '<p>Cool.</br>You got ' +currentScore+' Correct.</br> Console yourself with a doughnut.</br>Want to try again?</p>';
				$("#question-wrapper").html(qLast);
			}
			
			// <div id="controls"><input type="button", id="new", value="New Game?"/></div>'
		};
	}
});
