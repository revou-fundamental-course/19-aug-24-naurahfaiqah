const form = document.forms["form"];

form.addEventListener("submit", function(e) {
    e.preventDefault();
    validateform();
});

function validateform() {
    const name = form["input-name"].value;
    const birth = form["input-birth"].value;
    const gender = form["input-gender"].value;
    const messaage = form["input-pesan"].value;
    const date = new Date().toLocaleString();
    const rpop = document.getElementById("errorpopup");
    const spop = document.getElementById("successpopup");

    if(name == "" || birth == "" || gender == "" || messaage == ""){    
        showpopup(rpop);
    } else {
        showpopup(spop);
        setsender(name, birth, gender, messaage, date);
    }
}

function setsender(name, birth, gender, messaage, time) {
    document.getElementById("name").innerHTML = name;
    document.getElementById("name-input").innerHTML = name;
    document.getElementById("birth-input").innerHTML = birth;
    document.getElementById("gender-input").innerHTML = gender;
    document.getElementById("message-input").innerHTML = messaage;
    document.getElementById("time-input").innerHTML = time;
}

function showpopup(show){
    show.classList.add("open-popup")
    show.scrollIntoView({behavior: "smooth", block: "center"});

    let close = show.querySelector(".close-button");

    close.addEventListener("click", function() {
        show.classList.remove("open-popup");
    }, {once : true});
}
