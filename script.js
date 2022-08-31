function odpovez() {
    vstup = document.getElementById("vstup").value;
    if (vstup == "Ahoj") { ahoj(); }
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