let movsArr = JSON.parse(localStorage.getItem("movsData")) ?? [];

let createMov = function () {
  if ($(input).val() === "") {
    alert("Please enter a movie name");
  } else {
    let movObj = {
      name: $(input).val(),
    };
    movsArr.push(movObj);
    localStorage.setItem("movsData", JSON.stringify(movsArr));
    $(input).val("");
    movsArr.forEach((element) => {
      let li = $("<li></li>").text(element.name);
      $(".movies").append(li);
    });
  }
};

$(window).keydown(function (event) {
  if (event.keyCode === 13) {
    createMov();
  }
});