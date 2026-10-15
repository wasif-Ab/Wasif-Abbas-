// apni details yahan likho
var myEmail = "wa051348@gmail.com";
var myWhatsapp = "923425737325";


// year footer ma
document.getElementById("year").innerHTML = new Date().getFullYear();


// agar photo na mile to chhupa do
var photo = document.getElementById("my-photo");
photo.onerror = function () {
  photo.style.display = "none";
};


// mobile menu open / close
var menuBtn = document.getElementById("menu-btn");
var menu = document.getElementById("menu");

menuBtn.onclick = function () {
  menu.classList.toggle("show");
};

// link dabane pe menu band
var links = menu.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    menu.classList.remove("show");
  };
}


// whatsapp link ma message
var message = "Hello Wasif Abbas, I saw your portfolio website.";
var waUrl = "https://wa.me/" + myWhatsapp + "?text=" + encodeURIComponent(message);
document.getElementById("wa-link").href = waUrl;
document.getElementById("wa-float").href = waUrl;


// contact form
var form = document.getElementById("form");

form.onsubmit = function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("message").value;
  var error = document.getElementById("error");

  // check karo sab bhara hai ya nahi
  if (name == "" || email == "" || msg == "") {
    error.innerHTML = "Please fill all the fields.";
    return;
  }

  if (email.indexOf("@") == -1) {
    error.innerHTML = "Please write a correct email.";
    return;
  }

  error.innerHTML = "";

  // email app khul jayegi
  var subject = "Website message from " + name;
  var body = msg + "\n\nFrom: " + name + " (" + email + ")";
  window.location.href = "mailto:" + myEmail +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);
};


// navbar scroll pe thora dark
var navbar = document.getElementById("navbar");

window.onscroll = function () {
  if (window.scrollY > 20) {
    navbar.style.background = "rgba(11, 16, 32, 0.95)";
  } else {
    navbar.style.background = "#0b1020";
  }

  // scroll pe animation check karo
  checkAnimations();
};


// CV download: naya page khulta hai, wahan "Save as PDF" select karo
var cvBtn = document.getElementById("cv-btn");

cvBtn.onclick = function () {
  var cv = window.open("", "_blank");

  if (cv == null) {
    alert("Please allow pop-ups to download the CV.");
    return;
  }

  cv.document.write(
    "<html><head><title> Wasif Abbas - CV</title>" +
    "<style>body{font-family:Arial;max-width:700px;margin:40px auto;line-height:1.5}" +
    "h2{border-bottom:2px solid #4f7dff;margin-top:25px}</style></head><body>" +

    "<h1>Muhammad Ahsan Ali</h1>" +
    "<p>Web Developer &amp; Computer Operator, Bhakkar, Pakistan</p>" +
    "<p>Email: " + myEmail + " | Phone: 03425737325</p>" +

    "<h2>Profile</h2>" +
    "<p>Motivated beginner web developer and computer operator. I make responsive websites with HTML, CSS and JavaScript and I do MS Office and data entry work. Looking for an entry-level job.</p>" +

    "<h2>Education</h2>" +
    "<ul><li>Fsc Pre-Ing (Science), 2025</li>" +
    "<li>Diploma in Web Development &amp; Computer Operator, Vocational Training Institute</li></ul>" +

    "<h2>Skills</h2>" +
    "<ul><li>HTML, CSS, JavaScript</li><li>Responsive Design</li>" +
    "<li>MS Word, Excel, PowerPoint</li><li>Data Entry</li><li>Computer Operations</li></ul>" +

    "<h2>Projects</h2>" +
    "<ul><li>Typing Test Website: https://mf7325458-ux.github.io/Typing-Test-English-for-Ahsan-Ali/</li>" +
    "<li>Personal Profile Website: https://mf7325458-ux.github.io/my-profile/</li></ul>" +

    "<script>window.onload = function () { window.print(); }</script>" +
    "</body></html>"
  );

  cv.document.close();
};


// ===================== ANIMATIONS =====================

// ye sab cheezein scroll karne pe dheere se upar aayengi
var revealList = document.querySelectorAll("h2, .card, form");

for (var j = 0; j < revealList.length; j++) {
  revealList[j].classList.add("reveal");
}

// skill bars: pehle width 0 karte hain, scroll pe wapas asli width dete hain
var fills = document.querySelectorAll(".fill");

for (var k = 0; k < fills.length; k++) {
  fills[k].setAttribute("data-width", fills[k].style.width);
  fills[k].style.width = "0";
}

// check karo ke cheez screen pe aa gayi ya nahi
function isVisible(el) {
  var top = el.getBoundingClientRect().top;
  return top < window.innerHeight - 60;
}

// element dikhao, phir reveal class hata do taake hover theek chale
function showElement(el) {
  el.classList.add("visible");

  setTimeout(function () {
    el.classList.remove("reveal");
    el.classList.remove("visible");
  }, 800);
}

function checkAnimations() {
  // cards aur headings
  for (var a = 0; a < revealList.length; a++) {
    var el = revealList[a];
    if (el.classList.contains("reveal") && !el.classList.contains("visible") && isVisible(el)) {
      showElement(el);
    }
  }

  // skill bars
  for (var b = 0; b < fills.length; b++) {
    if (isVisible(fills[b])) {
      fills[b].style.width = fills[b].getAttribute("data-width");
    }
  }
}

// page khulte hi ek baar check (jo cheezein pehle se screen pe hain)
checkAnimations();
