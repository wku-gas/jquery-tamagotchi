const moods = ['general1', 'general2', 'happy', 'sad', 'angry', 'back-turned', 'eyes-closed', 'no', 'badly-behaved']

const getRandomMood = () => moods[Math.floor(Math.random() * moods.length)]

const setMood = (mood) => {
  $('#tamagotchi').removeClass()
  $('#tamagotchi').addClass(mood)
}

const eating = () => {
  const eatingClass = $('#tamagotchi').attr('class')
  $('#tamagotchi').removeClass()
  $('#tamagotchi').addClass(eatingClass === 'eating1' ? 'eating2' : 'eating1')
}

const eatingAnimation = () => {
  const eatingInterval = setInterval(eating, 200);
  setTimeout(() => {
    clearInterval(eatingInterval)
    setMood(Math.random() < 0.8 ? 'happy' : 'horrible-food')
  }, 2000)
}

const running = () => {
  const runningClass = $('#tamagotchi').attr('class')
  $('#tamagotchi').removeClass()
  if (Math.random() < 0.05) {
    $('#tamagotchi').addClass('running3')
  } else {
    $('#tamagotchi').addClass(runningClass === 'running1' ? 'running2' : 'running1')
  }
}

const runningAnimation = () => {
  const runningInterval = setInterval(running, 200);
  setTimeout(() => {
    clearInterval(runningInterval)
    setMood(getRandomMood())
  }, 5000)
}

const sleeping = () => {
  const sleepingClass = $('#tamagotchi').attr('class')
  $('#tamagotchi').removeClass()
  $('#tamagotchi').addClass(sleepingClass === 'sleeping1' ? 'sleeping2' : 'sleeping1')
}

const sleepingAnimation = () => {
  const sleepingInterval = setInterval(sleeping, 200);
  setTimeout(() => {
    clearInterval(sleepingInterval)
    setMood(getRandomMood())
  }, 3000)
}


$(() => {
  setMood('general1')
  setInterval(() => {
    setMood(getRandomMood())
  }, 5000)
  $('#eat').click(eatingAnimation)
  $('#run').click(runningAnimation)
  $('#sleep').click(sleepingAnimation)
});
