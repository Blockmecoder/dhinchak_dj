
for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", dicl);
  function dicl() {
    var element = this.innerHTML;
    switch (element) {
      case "w":
        new Audio("tom-1.mp3").play();
        break;
      case "a":
        new Audio("tom-2.mp3").play();
        break;
      case "s":
        new Audio("tom-3.mp3").play();
        break;
      case "d":
        new Audio("tom-4.mp3").play();
        break;
      case "j":
        new Audio("snare.mp3").play();
        break;
      case "k":
        new Audio("kick-bass.mp3").play();
        break;
      case "l":
        new Audio("crash.mp3").play();
        break;


    }
  }

}


 
