let formSingUp = document.querySelector(".singUp");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");
let email = document.querySelector("#email");

// formSingUp,
//   addEventListener("submit", (e) => {
//     e.preventDefault();

//     validateInputs();
//   });

// let setError = (element, message) => {
//   let inputControl = element.parentElement;
//   let errorDisplay = inputControl.querySelector(".error");

//   errorDisplay.innerText = message;
//   inputControl.classList.add("error");
//   inputControl.classList.remove("success");
// };

// let setSuccess = element => {
//   let inputControl = element.parentElement;
//   let errorDisplay = inputControl.querySelector(".error");

//   errorDisplay.innerText = "";
//   inputControl.classList.add("success");
//   inputControl.classList.remove("error");
// };

// let isValidEmail = (email) => {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

// let validateInputs = () => {
//   let usernameValue = username.value.trim();
//   let passwordValue = password.value.trim();
//   let password2Value = password2.value.trim();
//   let emailValue = email.value.trim();

//   if (usernameValue === "") {
//     setError(username, "Username is required");
//   } else {
//     setSuccess(username);
//   }

//   if (passwordValue === "") {
//     setError(password, "Password is required");
//   } else if (passwordValue.length < 8) {
//     setError(password, "Password must be at least 8 characters");
//   } else {
//     setSuccess(password);
//   }

//   if (password2Value === "") {
//     setError(password2, "Password is required");
//   } else if (passwordValue !== password2Value) {
//     setError(password2, "Passwords do not match");
//   } else {
//     setSuccess(password2);
//   }

//   if (emailValue === "") {
//     setError(email, "Email is required");
//   } else if (!isValidEmail(emailValue)) {
//     setError(email, "Email is not valid");
//   } else {
//     setSuccess(email);
//   }
// };

let userRegData =
  JSON.parse(localStorage.getItem("userData")) == null
    ? []
    : JSON.parse(localStorage.getItem("userData"));
formSingUp.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    username.value === "" ||
    password.value === "" ||
    email.value === "" ||
    city.value === ""
  ) {
    alert("Input value is empty");
  } else {
    let userObj = {
      username: "",
      password: "",
      email: "",
      city: "",
    };

    userObj.username = username.value;
    userObj.password = password.value;
    userObj.email = email.value;
    userObj.city = city.value;

    userRegData.push(userObj);
    localStorage.setItem("userData", JSON.stringify(userRegData));

    if (
      userObj.username === userRegData.find(userObj.username) &&
      userObj.email === userRegData.find(userObj.email)
    ) {
      alert("Bele bir istifadech movcuddur!");
    } else {
      userRegData.push(userObj);
      localStorage.setItem("userData", JSON.stringify(userRegData));
    }
  }
});
