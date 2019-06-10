window.onload = function(){
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

var calculator = function(checkboxes){
  var checked = 0;
  checkboxes.forEach(function(checkbox){
    if (checkbox.checked) {
      checked++;
    };
  });

  percentageDisplayer((checked/checkboxes.length) * 100)
}

var percentageDisplayer = function(percentage){
  document.getElementById("percentage_holder").innerHTML = Math.round(percentage)
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