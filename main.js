
   $('#start').on('click',function(){
        game.start();
           }
       
   );

   var questions=[{
       question:"What was the first full length CGI movie?",
       answers:["A Bug's Life","Monsters Inc","Toy Story","The Lion King"],
       correctAnswer:"Toy Story"
   }, {
    question:"Which of these is NOT a name of one of the Spice Girls?",
    answers:["Sporty Spice","Fred Spice","Scary Spice","Posh Spice"],
    correctAnswer:"Fred Spice"
   },{
    question:"Which team won the most titles in the 90's",
    answers:["New York Knicks","Los Angeles Lakers","Portland Trailbezers","Chicago Bulls"],
    correctAnswer:"Chicago Bulls"
   },

   ]

   var game={
       correct:0,
       incorrect:0,
       counter:20,
        countdown:function(){
            game.counter--;
            $('#counter').html(game.counter);
            if(game.counter<=0){
            console.log("Time is Up!");
            game.done();
    }
       },
         start:function(){
             timer=setInterval(game.countdown,1000);
            $('#subwrapper').prepend('<h2>Time Remianing:<span id="counter">20</span>Seconds</h2>');
            $('#start').remove();
            for(var i=0;i<questions.length;i++){
                $('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
                for( var j=0;j<questions[i].answers.length;j++){
                    $('#subwrapper').append("<input type='radio' name='question -"+i+" ' value=' "+questions[i].answers[j]+"'>"+questions[i].answers[j])
                }
         }
   },
           done:function(){
            $.each,function(){
           if($(this).val()==questions[0].correctAnswer){
               game.correct++;
           } else {
               game.incorrect++;
           }

           }
           $.each,function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
         }

        }
         $.each,function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;

            };
        }

        this.result();
    },
    result:function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2>All Done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
    

}