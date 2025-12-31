let Button = false;


document.getElementById("table_light_on").addEventListener("click", function() {
    Button = true;
    updataStatus();
})


document.getElementById("table_light_off").addEventListener("click", function() {
    Button = false;
    updataStatus();
})


function updataStatus() {
    if (Button == true) {
        document.getElementById("status").innerHTML = "light ON";
    } else {
        document.getElementById("status").innerHTML = "light OFF";
    }
}

