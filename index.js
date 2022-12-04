var numberOfDrums = document.querySelectorAll(".drum").length;
;
for(var i=0;i<numberOfDrums;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function (){
  var buttonClick=this.innerHTML;
  DrumClick(buttonClick);
  animation(buttonClick);
})

}

document.addEventListener("keypress",function (event){
  DrumClick(event.key);
  animation(event.key);

})
function DrumClick(key){

  switch (key) {
    case "w":
    const audio1 = new Audio("sounds/crash.mp3");
     audio1.play();
      break;
      case "a":
      const audio2 = new Audio("sounds/kick-bass.mp3");
       audio2.play();
      break;
      case "s":
      const audio3 = new Audio("sounds/snare.mp3");
       audio3.play();
      break;
      case "d":
      const audio4 = new Audio("sounds/tom-1.mp3");
       audio4.play();
      break;
      case "j":
      const audio5 = new Audio("sounds/tom-2.mp3");
       audio5.play();
      break;
      case "k":
      const audio6 = new Audio("sounds/tom-3.mp3");
       audio6.play();
      break;
      case "l":
      const audio7 = new Audio("sounds/tom-4.mp3");
       audio7.play();
      break;
      case "f":
        const audio8 = new Audio("sounds/epic.mp3");
        audio8.play();
        break;
    default:

  }
}
function animation(currentkey){
  var currentButton=document.querySelector("."+currentkey);
  currentButton.classList.add("pressed");
  setTimeout(function () {
  currentButton.classList.remove("pressed");
}, 350);
}
