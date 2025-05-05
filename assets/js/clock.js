
function clock() {
  var d = new Date();
  var t = d.toLocaleTimeString("nl-NL", {timeZone: "Europe/Amsterdam"});
  document.getElementById("currentTime").innerHTML = t;

  // Change color accent based on the time of day
  if (t < "01:00:00") {
  document.documentElement.style.setProperty('--color__now', 'var(--color__0000)');
  }
  else if (t < "02:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__0100)');
  }
  else if (t < "03:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__0200)');
  }
  else if (t < "04:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__0300)');
  }
  else if (t < "05:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__0400)');
  }
  else if (t < "06:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__0500)');
  }
  else if (t < "07:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__0600)');
  }
  else if (t < "08:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__0700)');
  }
  else if (t < "09:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__0800)');
  }
  else if (t < "10:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__0900)');
  }
  else if (t < "11:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__1000)');
  }
  else if (t < "12:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__1100)');
  }
  else if (t < "13:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__1200)');
  }
  else if (t < "14:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__1300)');
  }
  else if (t < "15:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__1400)');
  }
  else if (t < "16:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__1500)');
  }
  else if (t < "17:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__1600)');
  }
  else if (t < "18:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__1700)');
  }
  else if (t < "19:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__1800)');
  }
  else if (t < "20:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__1900)');
  }
  else if (t < "21:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__2000)');
  }
  else if (t < "22:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__2100)');
  }
  else if (t < "23:00:00") {
    document.documentElement.style.setProperty('--color__now', 'var(--color__2200)');
  }
  else {
    document.documentElement.style.setProperty('--color__now', 'var(--color__2300)');
  }

  // Light/darkmode
  if (t < "07:00:00") {
    document.body.classList.add("theme-dark");
    document.body.classList.remove("theme-light");
    }
  else if (t < "21:00:00") {
    document.body.classList.remove("theme-dark");
    document.body.classList.add("theme-light");
  }
  else {
    document.body.classList.add("theme-dark");
    document.body.classList.remove("theme-light");
  }


  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  const weekday = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(d);

  document.getElementById("currentDate").innerHTML = `${year}-${month}-${day} (${weekday})`;

}

document.addEventListener("DOMContentLoaded", () => {
    clock();
    setInterval(clock, 1000);
});

// Light/darkmode toggle
function toggleMode() {
    var element = document.body;
    element.classList.toggle("theme-dark");
 }