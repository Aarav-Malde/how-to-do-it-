class Form{
    constructor(){

    }

    display(){
        var title=createElement("h2")
        title.html("CAR RACING GAME FOR LEGENDS");
        title.position(70,0)

        var input=createInput("name")
        var input2=createInput("age")
        var input3=createInput("favourite formula 1 racer")

        var button=createButton("PLAY")
        var button2=createButton("EXIT IF UR SCARED OF ME")
    
        input.position(130,160)

        button.position(250,200)

        button.mousePressed(function (){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount=playerCount+1;
            player.update(name);
            player.updateCount(playerCount)
            var greeting=createElement('h3')
            greeting.html("Hello "+name+"! I am Aarav Malde, the host of this race .... ")
            greeting.position(50,200);

            
            
        })
    
    
    
    
    }




























}