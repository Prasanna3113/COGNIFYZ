window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("mid").style.fontSize = "3.5vw";
    document.getElementById("mid").style.marginTop="-11vh";

  } else {
    document.getElementById("mid").style.fontSize = "10vw";
    document.getElementById("mid").style.marginTop = "28vh";
  }
}