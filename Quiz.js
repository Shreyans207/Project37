class Quiz{
    constructor(){

    }

 getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
 })
 }
 update(state){
    database.ref('/').update({
        gameState: state
      })

 }
 
 async start(){
    if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once('value');
        if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
        }
        question = new Question();
        question.display();
    }
 }
 play(){
    question.hide();
    background("yellow");

    textSize(50);
    text("Result Of The Quiz" , 350 , 0);

    Contestant.getContestantInfo();
    if(plr !== undefined){
        var x ;
        var y = 250;

        textSize(20);
        text("NOTE : Contestant who answered correct are highlighted in green color" , 200 , 220);
        for(var plr in allContestants){
            y = y + 20;
            x = x;

            var correctAns = "2";
            if(correctAns === allContestants[plr].answer){
               fill("green");
            }else{
             fill("red")
            }
        }
    }
    drawSprites();
 }
}