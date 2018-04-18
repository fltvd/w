function hide(obj) {
    var el = document.getElementById(obj);

    if (el.style.display == "block") {
        el.style.display = "none";
    }

    else {
        el.style.display = "block";
    }
}

function swapVisible(obj1, obj2) {
    var el1 = document.getElementById(obj1);
    var el2 = document.getElementById(obj2);

    if (el1.style.display == "block") {
        el1.style.display = "none";
        el2.style.display = "block";
    }

    else {
        el1.style.display = "block";
        el2.style.display = "none";
    }
}