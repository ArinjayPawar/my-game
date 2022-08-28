class Game{
    constructor(){}


    getState(){
       database.ref("gameState").on("value",function(data){
        gameState = data.val();
       });
    }
    
    update(state){
        database.ref("/").update({
        gameState : state
        });
    }

    start(){
        form = new Form();
        form.display();
        
        player =  new Player();
    }
}