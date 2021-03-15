
function play(str) {
    if(str === "q" || str === "Q"){
      document.getElementById('display').innerText = "Heater-1";
    }else if(str === "w"|| str === "W"){
        document.getElementById('display').innerText = "Heater-2";
      }else if(str === "e"|| str === "E"){
        document.getElementById('display').innerText = "Heater-3'";
      }else if(str === "a"|| str === "A"){
        document.getElementById('display').innerText = "Heater-4";
      }else if(str === "s"|| str === "S"){
        document.getElementById('display').innerText = "Clap";
      }else if(str === "d"|| str === "D"){
        document.getElementById('display').innerText = "Open-HH";
      }else if(str === "z"|| str === "Z"){
        document.getElementById('display').innerText = "Kick-n'-Hat";
      }else if(str === "x"|| str === "X"){
        document.getElementById('display').innerText = "Kick";
      }else if(str === "c"|| str === "C"){
        document.getElementById('display').innerText = "Closed-HH";
      }

    var audio = document.getElementById(str);
    audio.play();
  }
  
  window.document.onkeyup = function (event) {
    if(event.key === "q" || event.key === "Q"){
      play("Q");
    }else if(event.key === "w"|| event.key === "W"){
      play("W");
    }else if(event.key === "e"|| event.key === "E"){
      play("E");
    }else if(event.key === "a"|| event.key === "A"){
      play("A");
    }else if(event.key === "s"|| event.key === "S"){
      play("S");
    }else if(event.key === "d"|| event.key === "D"){
      play("D");
    }else if(event.key === "z"|| event.key === "Z"){
      play("Z");
    }else if(event.key === "x"|| event.key === "X"){
      play("X");
    }else if(event.key === "c"|| event.key === "C"){
      play("C");
    }
  }


