function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function sendMail(){
let params ={
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  project:document.getElementById("project").value,
};


emailjs.send("service_kunal","template_2nkev0e",params)
    .then(function (res) {
          alert("Send Successfully!" + res.status);
        })

}
