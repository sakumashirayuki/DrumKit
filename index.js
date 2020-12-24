var drumSounds = {
    w: "sounds/crash.mp3",
    a: "sounds/kick-bass.mp3",
    s: "sounds/snare.mp3",
    d: "sounds/tom-1.mp3",
    j: "sounds/tom-2.mp3",
    k: "sounds/tom-3.mp3",
    l: "sounds/tom-4.mp3"
};
// Detecting button press
for(let i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var snd = new Audio(drumSounds[this.innerHTML]);
        snd.play();
        buttonAnimation(this.innerHTML);
    });
}
// Detecting keyboard press
// This is the same with:
// document.addEventListener("keydown", function(){
addEventListener("keydown", function(event){
    // It can work without changing the event.key to lowercase
    var snd = new Audio(drumSounds[event.key]);
    snd.play();
    buttonAnimation(event.key);
})
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
