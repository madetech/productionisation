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
  document.getElementById("percentage_holder").innerHTML = Math.round(percentage * 100)

  var right_slice = percentage * 360
  if (right_slice > 180) {
    var left_slice = right_slice - 180
    document.getElementById("slice_2").style.transform = "rotate("+left_slice+"deg)"
    document.getElementById("slice_1").style.transform = "rotate(180deg)"
  } else {
    document.getElementById("slice_2").style.transform = "rotate(0deg)"
    document.getElementById("slice_1").style.transform = "rotate("+right_slice+"deg)"
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
