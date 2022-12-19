let formSignIn = document.querySelector(".signIn");
let signInUserName = document.querySelector("#signInUserName");
let signInPassword = document.querySelector("#signInPassword");

formSignIn.addEventListener("submit", function (e) {
  e.preventDefault();
  if (signInUserName.value === "" || signInPassword.value === "") {
    alert("Input value is empty");
  } else {
    window.location.href = "home.html";
  }
  //  else if (
  //   userObj.username === userRegData.find(userObj.username) &&
  //   userObj.password === userRegData.find(userObj.password)
  // ) {
  //   alert("Bele bir istifadech movcuddur!");
  // } else {
  //   alert("Bele bir istifadech movcud deyil!");
  // }
});
