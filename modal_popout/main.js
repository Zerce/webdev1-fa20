//JQuery

var modal = document.getElementById('myModal');


        var btn = document.getElementById("myBtn");


        var span = modal.getElementsByClassName("close")[0]; // Modified by dsones uk



        btn.onclick = function() {

            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

