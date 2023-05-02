let buttonColors = ['red', 'blue', 'green', 'yellow'];

// empty arrays to keep track of game and user patterns 
let userClickedPattern = [];
let gamePattern = []; 

// keep track of level and game begin 
let level = 0;
let gameBegin = false;



// detect keyboard press to launch game 
$(document).on('keypress', () => {

    if(!gameBegin) {
        $('#level-title').text('Level ' + level);
        nextSequence();
        gameBegin = true;
    }   
});



// Detect which button was clicked by user 
$(".btn").on("click", function(event) {

    let userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkUserAnswer(userClickedPattern.length -1);
});


// function to check if user answer is correct 
function checkUserAnswer(currentLevel) { 

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {

            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } 
    else {

        playSound('wrong');
        $('#level-title').text('Game Over, Press Any Key to Restart');
        
        $('body').addClass('game-over');
        setTimeout(() => {
            $('body').removeClass('game-over');
        }, 200);


        startOver();
    }
}



// Function to pick random colour
function nextSequence() {

    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);


    // flash randomly selected button 
    $('#' + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

};




// Animation for user clicks 
function animatePress(currentColour) {

    $('#' + currentColour).addClass('pressed');

    setTimeout(function () {

        $('#' + currentColour).removeClass('pressed');
    }, 100);
}



// function to play sounds 
function playSound(colourName) {
    var audio = new Audio('sounds/' + colourName + '.mp3');
    audio.play();
}




function startOver() {
    level = 0; 
    gamePattern = [];
    gameBegin = false;
}
