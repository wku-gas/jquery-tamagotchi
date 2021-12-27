/* eslint-disable no-undef */
class Tamagotchi {
  static moods = ['general1', 'general2', 'happy', 'sad', 'angry', 'back-turned', 'eyes-closed', 'no', 'badly-behaved'];

  constructor() {
    this.hunger = 1;
    this.sleepliness = 1;
    this.boredom = 1;
  }

  eat() {
    this.hunger -= 2;
    this.sleepliness++;
  }

  run() {
    this.hunger += 3;
    this.sleepliness--;
    this.boredom--;
  }

  sleep() {
    this.hunger++;
    this.sleepliness -= 5;
  }

  idle() {
    this.hunger++;
    this.sleepliness++;
    this.boredom++;
  }

  display() {
    console.log(`hunger: ${this.hunger}`, `sleepiness: ${this.sleepliness}`, `boredom: ${this.boredom}`);
  }

  static getRandomMood() {
    return this.moods[Math.floor(Math.random() * this.moods.length)];
  }
}

const gozarutchi = new Tamagotchi();

const setMood = (mood) => {
  $('#tamagotchi').removeClass();
  $('#tamagotchi').addClass(mood);
};

const eating = () => {
  const eatingClass = $('#tamagotchi').attr('class');
  $('#tamagotchi').removeClass();
  $('#tamagotchi').addClass(eatingClass === 'eating1' ? 'eating2' : 'eating1');
};

const eatingAnimation = () => {
  const eatingInterval = setInterval(eating, 200);
  gozarutchi.eat();
  setTimeout(() => {
    clearInterval(eatingInterval);
    setMood(Math.random() < 0.8 ? 'happy' : 'horrible-food');
  }, 2000);
};

const running = () => {
  const runningClass = $('#tamagotchi').attr('class');
  $('#tamagotchi').removeClass();
  if (Math.random() < 0.05) {
    $('#tamagotchi').addClass('running3');
  } else {
    $('#tamagotchi').addClass(runningClass === 'running1' ? 'running2' : 'running1');
  }
};

const runningAnimation = () => {
  const runningInterval = setInterval(running, 200);
  gozarutchi.run();
  setTimeout(() => {
    clearInterval(runningInterval);
    setMood(Tamagotchi.getRandomMood());
  }, 5000);
};

const sleeping = () => {
  const sleepingClass = $('#tamagotchi').attr('class');
  $('#tamagotchi').removeClass();
  $('#tamagotchi').addClass(sleepingClass === 'sleeping1' ? 'sleeping2' : 'sleeping1');
};

const sleepingAnimation = () => {
  const sleepingInterval = setInterval(sleeping, 200);
  gozarutchi.sleep();
  setTimeout(() => {
    clearInterval(sleepingInterval);
    setMood(Tamagotchi.getRandomMood());
  }, 3000);
};


$(() => {
  setMood('general1');
  setInterval(() => {
    setMood(Tamagotchi.getRandomMood());
    gozarutchi.idle();
    gozarutchi.display();
  }, 5000);

  $('#eat').click(eatingAnimation);
  $('#run').click(runningAnimation);
  $('#sleep').click(sleepingAnimation);
});
