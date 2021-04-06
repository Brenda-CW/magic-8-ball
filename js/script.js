$(document).ready(function(){

    var magic8ball= {};
    
    //identify possible answers - PROPERTY
    magic8ball.answer = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "It is certain.", "It is decidedly so.", "Most likely.",  "My sources say no.", "Outlook not so good.", "Without a doubt.", "Signs say yes.", "Yes - definitely.", "Most likely.", "It is decidedly so."];
 
//METHOD TO PROMPT QUESTION  
    var questionButton = function (){
        $('#answer').hide();     //hides prior answer text
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

        //wait half a second before showing prompt
        setTimeout (
            function() {
                var question = prompt("ASK A YES/NO QUESTION!");
                magic8ball.ask(question)
            },500);
    };
        
    //sets up the click action of the button
    $("#questionButton").click(questionButton); 
    $('#answer').hide(); //hides answer text when page loads

    //define HOW FUNCTION WORKS - includes all steps involved
     magic8ball.ask = function(question) { 
        $("#8ball").effect("shake"); //shakes 8ball after prompt is clicked
    //create a random number between 0 and 1
    var randomNumber = Math.random();
    
    //create a random number between 0 and the max # of possible answers
    var randomNumberArray = randomNumber * magic8ball.answer.length;
    //output the random number being used
    //console.log ("var randomNumberArray = " + randomNumberArray); 

    //round the random number down
    var randomIndex = Math.floor(randomNumberArray);
    //output the rounded random number
    //console.log ("var randomIndex = " + randomIndex);  
    
    //output the answer to the question
    var randomAnswer = magic8ball.answer [randomIndex];
    //console.log("var randomAnswer = " + randomAnswer); 

    $('#8ball').attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

    //INSERTS THE RANDOM ANSWER IN THE HTML TAG ID - ANSWER
	$("#answer").text(randomAnswer);
    
    //fades in the previously hidden answer over 4 seconds)
    $('#answer').fadeIn(4000);

   
    console.log (question);
    console.log (randomAnswer);

    };   
    });