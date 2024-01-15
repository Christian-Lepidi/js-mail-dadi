const listMail = ["gmail@gmail.com", "outlook@outlook.com", "luca@live.it"];
console.log(listMail);
const mail = document.getElementById("FormControlInput1");
const btn = document.getElementById("accessbutton");
let text = document.getElementById("h1");

btn.addEventListener("click", function () {
  const mailValue = mail.value;

  let mailValid = false;
  for (let i = 0; i < listMail.length; i++) {
    if (mailValue == listMail[i]) {
      mailValid = true;
    }
  }

  if (mailValid == true) {
    text.innerHTML = "Accesso effettuato";
  } else {
    text.innerHTML = "mail non valida";
  }
});
