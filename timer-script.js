const year = new Date().getFullYear();
const fourthOfJuly = new Date(year, 6, 4).getTime();

// countdown
let timerr = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  const diff = new Date(2021, 0, 1) - today;

  // math
  //let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer-2").innerHTML =
    "<span class=\"hours\"> \
  <span class=\"numbers\">" + hours + "</span> часов<br></span> \
<span class=\"minutes\"> \
  <span class=\"numbers\">" + minutes + "</span> минут<br></span> \
<span class=\"seconds\"> \
  <span class=\"numbers\">" + seconds + "</span> секунд</span> \
</div>";

}, 1);
