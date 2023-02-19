// this version compactable for browser dev console
function TimerBomb() {
  let time = 0;
  let startFlag = false;
  let pause = false;

  this.start = function () {
    if (startFlag) throw new Error("Already started!!");
    startFlag = true;
    pause = false;
    time = new Date();
    console.log(time);
  };

  this.current = function () {
    if (!pause && !startFlag) throw new Error("Please start!!");
    if (pause) {
      console.log(time);
    } else {
      time = new Date();
      console.log(time);
    }
  };

  this.stop = function () {
    if (!startFlag) throw new Error("Please start!!");
    if (pause) throw new Error("Already paused!!");
    pause = true;
    startFlag = false;
    time = new Date();
    console.log(time);
  };

  this.reset = function () {
    if (!startFlag) throw new Error("Already stoped!!");
    startFlag = false;
    pause = false;
    time = 0;
    console.log(time);
  };
}

let timer = new TimerBomb();

timer.start();
