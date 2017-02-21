var radioClick = function () {
    var activeElement = document.getElementsByClassName("active");
    //activeElement[0].sty
};





document.getElementsByClassName('tabHeader').addEventListener('click', function () {
  // Using an if statement to check the class
  if (this.classList.contains('bad')) {
    // The box that we clicked has a class of bad so let's remove it and add the good class
   this.classList.remove('bad');
   this.classList.add('good');
  } else {
    // The user obviously can't follow instructions so let's alert them of what is supposed to happen next
    alert("You can proceed!");
  }
});