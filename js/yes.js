document.forms["form"].addEventListener("submit", function (event) {
    event.preventDefault();
    ValidateForm();
});

// untuk memvalidasi form //
function ValidateForm() {
    const name = document.forms["form"]["input-name"].value;
    const birth = document.forms["form"]["input-birth"].value;
    const gender = document.forms["form"]["gender"].value;
    let message = document.forms["form"]["input-pesan"].value;
    const errpopup = document.getElementById("errorpopup");
    const sucpopup = document.getElementById("successpopup");
    const getDay = new Date().toLocaleString();

    if (name == "" || birth == "" || gender == "" || message == "") {
        // untuk menset popup jika data yang diisi tidak sesuai //
        showpopup(errpopup);
    } else {
        // untuk menset popup jika data berhasil di submit //
        showpopup(sucpopup);
        SetSender(name, birth, gender, message, getDay);

        // mengatur pada input, jika user selesai dalam mengisi form, maka input akan di reset //
        setTimeout(function () {
            document.forms["form"].reset();
        }, 500);
    }
}


// untuk men set result dan nama di awal //
function SetSender(name, birth, gender, message, time) {
    document.getElementById("name").innerHTML = name;
    document.getElementById("name-input").innerHTML = name;
    document.getElementById("birth-input").innerHTML = birth;
    document.getElementById("gender-input").innerHTML = gender;
    document.getElementById("message-input").innerHTML = message;
    document.getElementById("time-input").innerHTML = time;
}

// untuk men set popup berhasil atau tidak //
function showpopup(ShowPopUp) {
    ShowPopUp.classList.add("open-popup");

    // mengatur pergerakan dari form ke popup menjadi smooth //
    ShowPopUp.scrollIntoView({ behavior: "smooth", block: "center" });

    let closebtn = ShowPopUp.querySelector(".close-button");

    closebtn.addEventListener("click", function () {
        ShowPopUp.classList.remove("open-popup");
    }, { once: true });
}