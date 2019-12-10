const secondHand = document.querySelector('.second-hand'),
      minsHand = document.querySelector('.min-hand'),
      hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date(),
          seconds = now.getSeconds(),
          secondsDegrees = ((seconds / 60) * 360) + 90;
    
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes(),
          minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;

    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours(),
          hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    if(secondsDegrees === 90) {
        secondHand.style.transition = "all 0s";
    } else {
        secondHand.style.transition = "all 0.05s";
    }
    
    if(minsDegrees === 90) {
        minuteHand.style.transition = "all 0s";
    } else {
        minsHand.style.transition = "all 0.05s";
    }
}

setInterval(setDate, 1000);

setDate();