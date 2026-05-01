var NumberOfDrums=document.querySelectorAll(".drum").length;
for (var i=0; i<NumberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);// here I changed the "button" with the class (.set) in order to make all buttons generate the sound but angela is using a loop. Both are currently working same.
}
function handleClick(){
    var buttonInnerHTML= this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
}
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})
function makeSound(key){
    switch (key) {
        case "w":
            var tom1= new Audio("sounds_18/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds_18/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds_18/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds_18/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds_18/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds_18/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick=new Audio("sounds_18/kick-bass.mp3");
            kick.play();
            break;
        default: console.log(buttonInnerHTML);
            break;
    }
}
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}