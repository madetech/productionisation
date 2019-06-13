window.onload = function(){
    if ( window.location.pathname.indexOf("/PRODUCTIONISATION.html") !== -1) {
        document.getElementsByClassName("progress_bar")[0].style.display = "block";

        let checkboxes = document.querySelectorAll(".task-list-item-checkbox");
        checkboxes.forEach(function(checkbox, i){
            checkbox.onchange = function(){
                calculator(checkboxes);
                if (this.checked) cookie.create("checkbox-"+i);
                else cookie.erase("checkbox-"+i);
            };
            checkbox.disabled = false;
            checkbox.checked = !!cookie.read("checkbox-"+i);
        });
        calculator(checkboxes);
    }
};

window.onscroll = function() {
    let scrolltags = document.getElementsByTagName("a");

    let pass = false;
    let previous = false;

    //Go through each a-tag
    for(let i=0; i<scrolltags.length; i++) {
        let a_tag = scrolltags[i];

        //If it's an anchor link
        if(a_tag.href.indexOf("#")!==-1) {
            //Get the anchor target
            let target_id = a_tag.href.split("#")[1];
            let a_target = document.getElementById(target_id);

            //Get position of that target
            let position = a_target.getBoundingClientRect();

            if(previous!==false) {
                //If we haven't scrolled passed it, and nothing is found
                if (position["y"] > 20 && !pass) {
                    //Make bold and block further iterations
                    previous.style.fontWeight = "600";
                    pass = true;
                }

                //Otherwise, reset font weight
                else previous.style.fontWeight = "";
            }

            //Save this element for future usage
            previous = a_tag;
        }
    }
};

let calculator = function(checkboxes){
    let checked = 0;
    checkboxes.forEach(function(checkbox){
        if (checkbox.checked) {
            checked++;
        }
    });

    percentageDisplayer((checked/checkboxes.length))
};

let percentageDisplayer = function(percentage){
    document.getElementById("percentage_holder").innerHTML = ""+Math.round(percentage * 100);

    let colour_green = '#439a63';
    let colour_red = '#F44336';
    let colour_yellow = '#DFCB0B';

    let slice_1_deg = percentage * 360;

    let title = document.getElementsByClassName("progress_bar")[0].getElementsByTagName("h5")[0];
    let slice_1 = document.getElementById("slice_1");
    let slice_2 = document.getElementById("slice_2");

    switch (Math.floor(percentage * 3)) {
        case 0:
            slice_1.style.background = colour_red;
            slice_2.style.background = colour_red;
            title.style.color = colour_red;
            break;

        case 1:
            slice_1.style.background = colour_yellow;
            slice_2.style.background = colour_yellow;
            title.style.color = colour_yellow;
            break;

        default:
            slice_1.style.background = colour_green;
            slice_2.style.background = colour_green;
            title.style.color = colour_green;
            break;
    }

    if (slice_1_deg > 180) {
        let slice_2_deg = slice_1_deg - 180;
        slice_2.style.transform = "rotate("+slice_2_deg+"deg)";
        slice_1.style.transform = "rotate(180deg)";
    } else {
        slice_2.style.transform = "rotate(0deg)";
        slice_1.style.transform = "rotate("+slice_1_deg+"deg)";
    }
};

























let cookie = {
    create: function (name, value, days) {
        let expires;
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        else expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    },

    read: function (name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    erase: function (name) {
        cookie.create(name, "", -1);
    }
};
