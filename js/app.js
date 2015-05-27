$(document).ready(function() {
	// Questions
	var Questions = [{
		question: "When were doughnuts invented?",
		multipleChoice: ["500 B.C.", "1922", "Mid 1800s"],
		correctChoice: 2
	},
	{
		question: "What famous children's book features a doughnut making machine?",
		multipleChoice: [" Homer Price by Robert Mcloskey", " Where the Wild Things Are ", " Amelia Bedelia "],
		correctChoice: 0
	},
	{
		question: "How many doughnuts are consumed by Americans each year?",
		multipleChoice: ["A Baker's Dozen", "500 million", "Over ten billion"],
		correctChoice: 2
	},
	{
		question: "What are doughnuts called in Poland?",
		multipleChoice: ["Paczkis (pronounced punch-key)", "Polish Donuts", "doughnuts"],
		correctChoice: 0
	},
	{
		question: "How many doughnuts are ",
		multipleChoice: ["answer", "choice", "maybe"],
		correctChoice: 1
	}]

	var currentQuestion = 0;

	$("#controls").on('click', '#submit', function(e) {
		e.preventDefault();
		console.log("click");
		currentQuestion++;
		nextQuestion();
		console.log(currentQuestion);
	});

	function nextQuestion() {
		if(currentQuestion < 5) {
			$(".question").remove();
			$("#answer-wrapper input").remove();
			$("#answer-wrapper span").remove();
			var newAnswer1 = '<span class="question">'+Questions[currentQuestion].question+'</span><div id="answer-wrapper"><input type="radio" name="Answer" class="answer-select" value="0" /><span class="answer-one">'+Questions[currentQuestion].multipleChoice[0]+'</span></br><input type="radio" name="Answer" class="answer-select" value="1"/><span class="answer-two">'+Questions[currentQuestion].multipleChoice[1]+'</span></br><input type="radio" name="Answer" class="answer-select" value="2"/><span class="answer-three">'+Questions[currentQuestion].multipleChoice[2]+'</span>';
			$("#answer-wrapper").html(newAnswer1);
		} else {
			$(".question").remove();
			$("#answer-wrapper input").remove();
			$("#answer-wrapper span").remove();
			var qLast = '<p>Good Job! Would you like to try again?</p><div id="controls"><input type="button", id="new", value="Retry?"/>';
			$(".container").html(qLast);
		};
	}
});
