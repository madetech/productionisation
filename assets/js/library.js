window.onload = function(){
  if ( window.location.pathname.indexOf("/PRODUCTIONISATION.html") != -1) {
    document.getElementsByClassName("progress_bar")[0].style.display = "block";

    var checkboxes = document.querySelectorAll(".task-list-item-checkbox");
    checkboxes.forEach(function(checkbox, i){
      checkbox.onchange = function(){
        calculator(checkboxes)
        if (this.checked) cookie.create("checkbox-"+i)
      }
      checkbox.disabled = false;
      checkbox.checked = cookie.read("checkbox-"+i)? true:false;
    });
    calculator(checkboxes)
  }
}

var calculator = function(checkboxes){
  var checked = 0;
  checkboxes.forEach(function(checkbox){
    if (checkbox.checked) {
      checked++;
    };
  });

  percentageDisplayer((checked/checkboxes.length))
}

var percentageDisplayer = function(percentage){
  document.getElementById("percentage_holder").innerHTML = Math.round(percentage * 100);

  var colour_green = '#439a63'
  var colour_red = '#F44336'
  var colour_yellow = '#FFEB3B'

  var slice_1_deg = percentage * 360;

  var slice_1 = document.getElementById("slice_1");
  var slice_2 = document.getElementById("slice_2");

  switch (Math.floor(percentage * 3)) {
    case 0:
      slice_1.style.background = colour_red;
      slice_2.style.background = colour_red;
      break;

    case 1:
      slice_1.style.background = colour_yellow;
      slice_2.style.background = colour_yellow;
      break;

    default:
      slice_1.style.background = colour_green;
      slice_2.style.background = colour_green;
      break;
  }

  if (slice_1_deg > 180) {
    var slice_2_deg = slice_1_deg - 180;
    slice_2.style.transform = "rotate("+slice_2_deg+"deg)";
    slice_1.style.transform = "rotate(180deg)";
  } else {
    slice_2.style.transform = "rotate(0deg)";
    slice_1.style.transform = "rotate("+slice_1_deg+"deg)";
  }
}

























var cookie = {
  create: function (name, value, days) {
      var expires;
      if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
      }
      else expires = "";
      document.cookie = name + "=" + value + expires + "; path=/";
  },

  read: function (name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
  },

  erase: function (name) {
      cookie.create(name, "", -1);
  }
};
