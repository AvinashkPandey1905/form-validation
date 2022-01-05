
let btn = document.getElementById("button");
let log = document.getElementById("login");
let reg = document.getElementById("register");

register = () =>
{
  log.style.left = "-400px";
  reg.style.left = "55px";
  btn.style.left = "125px";
}

login = () => 
{
  log.style.left = "55px";
  reg.style.left = "400px";
  btn.style.left = "0";
}