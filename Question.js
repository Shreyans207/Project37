class Question{
    constructor(){
        this.title = createElement('h1');
        this.question = createElement('h2');
        this.option1 = createElement('h2');
        this.option2 = createElement('h2');
        this.option3 = createElement('h2');
        this.option4 = createElement('h2');
        this.input1 = createInput('Enter Your Name Here');
        this.input2 = createInput('Enter Correct Option No.');
        this.button = createButton('Submit')
    }

    hide(){
        this.title.hide();
        this.question.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        
    }
    display(){
            this.title.html("My Quiz Game");
            this.title.position(350, 0);
        
            this.question.html("Question - What starts and ends with the letter 'E' but has only one letter? ")
            this.question.position(50,80);

            this.option1.html("1 : Everyone")
            this.option1.position(160,120);
            this.option2.html("2 : Envelope")
            this.option2.position(160,145);
            this.option3.html("3 : Estimate")
            this.option3.position(160,170);
            this.option4.html("4 : Example")
            this.option4.position(160,195);

            this.input1.position(200,250);
            this.input2.position(360,250);
            this.button.position(330,280);


            this.button.mousePressed(()=>{
              this.title.hide();
              this.input1.hide();
              this.button.hide();
              contestant.name = this.input1.value();
              contestantCount+=1;
              contestant.index = contestantCount;
              contestant.update();
              contestant.updateCount(contestantCount);
            });
        
    }
}