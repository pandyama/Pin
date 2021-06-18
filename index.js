var counter = 0;

function numPress(num) {
  if (counter < 4) {
    console.log("Pressed key"+num);
    console.log("counter"+counter);
    console.log("IF");
    switch (counter) {
      case 0:
        document.getElementById("pin1").innerHTML = num;
        break;
      case 1:
        document.getElementById("pin2").innerHTML = num;
        break;
      case 2:
        document.getElementById("pin3").innerHTML = num;
        break;
      case 3:
        document.getElementById("pin4").innerHTML = num;
        break;

    }
    counter++;
  } else {
    console.log("4 Pins entered");
  }
}

function deletePin(){
    counter = 0;
    document.getElementById("pin1").innerHTML = "";
    document.getElementById("pin2").innerHTML = "";
    document.getElementById("pin3").innerHTML = "";
    document.getElementById("pin4").innerHTML = "";
}
