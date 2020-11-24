class Block{
    constructor(x, y){
        this.body = Bodies.rectangle(x,y,25,45,{isStatic: false}); 
        this.width = 25;
        this.height = 45;
        this.visiblity = 255;
        World.add(world, this.body);
    }
    display(){
        
        var pos = this.body.position;
        if(this.body.speed < 3){
            rectMode(CENTER);
            rect(pos.x, pos.y, this.width, this.height);
        }
        

        
        else{
            push();
            this.visiblity -= 10 ;
            World.remove(world, this.body);
            tint(255, this.visiblity);
            pop();
        }
        
        
    }
    score(){
        if(this.visiblity < 0 && this.visiblity > -1000 ){
          score++
        }
       }
}