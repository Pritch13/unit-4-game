var wins = 0;
var losses = 0;
var currentTotal = 0;


$(document).ready(function() {

    function gameLoop() {
    
    if(losses === 2) {
        $('.replace').hide();
        $('.col-lg-3').hide();
        $('#random').text('Game over!')
        $('#random').addClass('final');
        $('.col-lg-4').addClass('col-lg-12');
        var audio = $('#theme')[0];
        audio.pause();
        var audio = $('#gameover')[0];
        audio.play();

    } else if (wins === 2){
        $('.replace').hide();
        $('.col-lg-3').hide();
        $('#random').text('Winner!')
        $('#random').addClass('final');
        $('.col-lg-4').addClass('col-lg-12');
        var audio = $('#theme')[0];
        audio.pause();
        var audio = $('#youwin')[0];
        audio.play();
    } else {

      var currentTotal = 0;

      $('#current-total').text(currentTotal);       // Display current total in html

      var randomNumber = Math.floor((Math.random() * 100) + 20)     // Generate random number 
      

      $('#random').html(randomNumber);      // Display random number in html
      
      var randomUserNumber1 = Math.floor((Math.random() * 12) + 1)     // Generate box 1 number
      var randomUserNumber2 = Math.floor((Math.random() * 12) + 1)     // Generate box 2 number
      var randomUserNumber3 = Math.floor((Math.random() * 12) + 1)     // Generate box 3 number
      var randomUserNumber4 = Math.floor((Math.random() * 12) + 1)     // Generate box 4 number


      $('body').on('click', '#box1', function(){       // When box 1 is clicked
        var audio = $("#coinClip")[0];
        audio.play();
        currentTotal+=randomUserNumber1;
        console.log(randomUserNumber1);
        $('#current-total').text(currentTotal);
        if (currentTotal > randomNumber){
            var audio = $("#loss")[0];
            audio.play();
            losses++;
            $('#losses').text(losses);
            alert('Too much!')
            currentTotal = 0;
            randomUserNumber1 = 0;
            randomUserNumber2 = 0;
            randomUserNumber3 = 0;
            randomUserNumber4 = 0;
            gameLoop();

        } else if (currentTotal === randomNumber) {
            var audio = $("#score")[0];
            audio.play()
            wins++
            $('#wins').text(wins);
            alert("It's a match!");
            currentTotal = 0;
            randomUserNumber1 = 0;
            randomUserNumber2 = 0;
            randomUserNumber3 = 0;
            randomUserNumber4 = 0;
            gameLoop();
        }
      });


      $('body').on('click', '#box2', function(){        // When box 2 is clicked
        var audio = $("#coinClip")[0];
        audio.play();
        currentTotal+=randomUserNumber2;
        console.log(randomUserNumber2);
        $('#current-total').text(currentTotal);
        if (currentTotal > randomNumber){
            var audio = $("#loss")[0];
            audio.play();
            losses++;
            $('#losses').text(losses);
            alert('Too much!');
            currentTotal = 0;
            randomUserNumber1 = 0;
            randomUserNumber2 = 0;
            randomUserNumber3 = 0;
            randomUserNumber4 = 0;
            gameLoop();
        } else if (currentTotal === randomNumber) {
            var audio = $("#score")[0];
            audio.play()
            wins++
            $('#wins').text(wins);
            alert("It's a match!");
            currentTotal = 0;
            randomUserNumber1 = 0;
            randomUserNumber2 = 0;
            randomUserNumber3 = 0;
            randomUserNumber4 = 0;
            gameLoop();
        }
      });

      $('body').on('click', '#box3', function(){        // When box 3 is clicked
        var audio = $("#coinClip")[0];
        audio.play();
        console.log(randomUserNumber3);
        currentTotal+=randomUserNumber3;
        $('#current-total').text(currentTotal);
        if (currentTotal > randomNumber){
            var audio = $("#loss")[0];
            audio.play();
            losses++;
            $('#losses').text(losses);
            alert('Too much!');
            currentTotal = 0;
            randomUserNumber1 = 0;
            randomUserNumber2 = 0;
            randomUserNumber3 = 0;
            randomUserNumber4 = 0;
            gameLoop();
        } else if (currentTotal === randomNumber) {
            var audio = $("#score")[0];
            audio.play();
            wins++
            $('#wins').text(wins);
            alert("It's a match!");
            currentTotal = 0;
            randomUserNumber1 = 0;
            randomUserNumber2 = 0;
            randomUserNumber3 = 0;
            randomUserNumber4 = 0;
            gameLoop();
        }
      });


      $('body').on('click', '#box4', function(){        // When box 4 is clicked
        var audio = $("#coinClip")[0];
        audio.play();
        console.log(randomUserNumber4);
        currentTotal+=randomUserNumber4;
        $('#current-total').text(currentTotal);
        if (currentTotal > randomNumber){
            var audio = $("#loss")[0];
            audio.play();
            losses++;
            $('#losses').text(losses);
            alert('Too much!');
            currentTotal = 0;
            randomUserNumber1 = 0;
            randomUserNumber2 = 0;
            randomUserNumber3 = 0;
            randomUserNumber4 = 0;
            gameLoop();
        } else if (currentTotal === randomNumber) {
            var audio = $("#score")[0];
            audio.play()
            wins++
            $('#wins').text(wins);
            alert("It's a match!");
            currentTotal = 0;
            randomUserNumber1 = 0;
            randomUserNumber2 = 0;
            randomUserNumber3 = 0;
            randomUserNumber4 = 0;
            gameLoop();
        }
      });
     }
    }       // GameLoop function end

    gameLoop();     // Calling gameLoop function // Game starts here
    
  });


