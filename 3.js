/*document.querySelectorAll("button")[0].addEventListener("click",function(){
    var audio=new Audio("");
    audio.play();
})*/

/*document.querySelectorAll("button")[0].addEventListener("click",function(a){
    console.log(a);
})*/

/*document.querySelectorAll("button")[0].addEventListener("click",function(){
    console.log(this); //this keyword gives object which triggeed event
})*/

for(let i=0; i<document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var a=this.innerHTML;
        switch(a){
            case "w":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;

            case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

            case "s":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;

            case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

            case "j":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

            case "k":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

            case "l":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

            default:
            

        }

        
    })
}

 

    document.addEventListener("keypress",function(t){
        var a=t.key;
        switch(a){
            case "w":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;

            case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

            case "s":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;

            case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

            case "j":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

            case "k":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

            case "l":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

            default:
        }   
    })

