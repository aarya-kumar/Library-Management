function extend() {
  var a = document.querySelector("nav");
  a.style.right = 0;
}
function enque() {
  var a = document.querySelector("nav");
  a.style.right = "-40vw";
}
function denque() {
  var a = document.querySelector("nav");
  a.style.right = "-40vw";
  if (c == 3) {
    const b = document.getElementById("login");
    b.style.clipPath = "circle(300% at 0 0)";
  } else {
    const d = document.getElementById("signup");
    d.style.clipPath = "circle(300% at 100% 100%)";
  }
}
function menque() {
  var a = document.querySelector("nav");
  a.style.right = "-40vw";
  const d = document.getElementById("signup");
  d.style.clipPath = "circle(300% at 100% 100%)";
}
// function merge(){
//     var a = document.querySelector('nav');
//     a.style.right="-40vw";
//     const a=document.getElementById('login');
//     a.style.clipPath="circle(300% at 0 0)";
// }
// function derge(){
//     var a = document.querySelector('nav');
//     a.style.right="-40vw";
//     const a=document.getElementById("signup");
//     a.style.clipPath="circle(300% at 100% 100%)";
// }
function login() {
  const a = document.getElementById("login");
  a.style.clipPath = "circle(300% at 0 0)";
}
function dlogin() {
  const a = document.getElementById("login");
  a.style.clipPath = "circle(0% at 0 0)";
}
function signin() {
  const b = document.getElementById("signup");
  b.style.clipPath = "circle(300% at 100% 100%)";
}
function dsign() {
  const b = document.getElementById("signup");
  b.style.clipPath = "circle(0% at 100% 100%)";
}
