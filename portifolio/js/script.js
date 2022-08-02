// contadora
var contadora = 0;

function conti(){
    updateDisplay(contadora++)
};

function updateDisplay(val) {
    document.getElementById("like").innerHTML = val;
};
