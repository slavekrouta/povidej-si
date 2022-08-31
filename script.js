function odpovez() {
    vstup = document.getElementById("vstup").value;
    if (vstup == "Ahoj" || vstup == "ahoj" || vstup == "Ahoj." || vstup == "ahoj.") { ahoj(); }
    else if (vstup == "dement" || vstup == "Dement" || vstup == "dement." || vstup == "Dement.") { dement(); }
    else { alert("cooming soon"); }
}

function ahoj() {
    variabel = Math.floor(Math.random() * 5) + 1;
    if (variabel == 1) {
        document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br>Ty: " + vstup;
        document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br><b>ROBOT: Ahoj :)</b>";
    }
    else {
        if (variabel == 2) {
            document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br>Ty: " + vstup;
            document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br><b>ROBOT: Cus.</b>";
        }
        else {
            if (variabel == 3) {
                document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br>Ty: " + vstup;
                document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br><b>ROBOT: No nazdar :D</b>";
            } else {
                if (variabel == 4) {
                    document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br>Ty: " + vstup;
                    document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br><b>ROBOT: Kde ty se tu beres? xd</b>";
                } else {
                    if (variabel == 5) {
                        document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br>Ty: " + vstup;
                        document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br><b>ROBOT: Cau. Jak je?</b>";
                    }
                }
            }
        }
    }
}

function dement() {
    variabel = Math.floor(Math.random() * 5) + 1;
    if (variabel == 1) {
        document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br>Ty: " + vstup;
        document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br><b>ROBOT: ???</b>";
    }
    else {
        if (variabel == 2) {
            document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br>Ty: " + vstup;
            document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br><b>ROBOT: thanks</b>";
        }
        else {
            if (variabel == 3) {
                document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br>Ty: " + vstup;
                document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br><b>ROBOT: Ses ty</b>";
            } else {
                if (variabel == 4) {
                    document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br>Ty: " + vstup;
                    document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br><b>ROBOT: </b><img src=\"https://i.ytimg.com/vi/hEj8am0LTE0/maxresdefault.jpg\" style=\"width:320px;height:180px;\">";
                } else {
                    if (variabel == 5) {
                        document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br>Ty: " + vstup;
                        document.getElementById("odpovedi").innerHTML = document.getElementById("odpovedi").innerHTML + "<br><b>ROBOT: To jako ze ja jsem dement?! >:(</b>";
                    }
                }
            }
        }
    }
}
