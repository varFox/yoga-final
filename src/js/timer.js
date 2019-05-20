const timer = (deadline) => {
  const zero = (a) => {
    if (a < 10) {
      a = '0' + a;
    }
    return a;
  }

  const getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      hs = Math.floor(t / (1000 * 60 * 60)),
      ms = Math.floor((t / 1000 / 60) % 60),
      ss = Math.floor((t / 1000) % 60);
    return {
      'total': t,
      'hours': hs,
      'minutes': ms,
      'seconds': ss
    };
  }

  const setClock = (id, endtime) => {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeIntervar = setInterval(updateClock, 1000);

      const updateClock = () => {
      let t = getTimeRemaining(endtime);
      hours.textContent = zero(t.hours);
      minutes.textContent = zero(t.minutes);
      seconds.textContent = zero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeIntervar);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  setClock('timer', deadline);
}

module.exports = timer;