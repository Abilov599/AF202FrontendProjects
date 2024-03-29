let search = document.querySelector("#search");
let addBtn = document.querySelector("#addBtn");
let box = document.querySelector("#box");
let resetBtn = document.querySelector("#resetBtn");
resetBtn.disabled = true;

let createToDo = function () {
  if (search.value == "") {
    alert("Please write something");
  } else {
    resetBtn.disabled = false;

    let divTask = document.createElement("div");
    divTask.className =
      "taskDiv mt-2 p-2 d-flex justify-content-between align-items-center bg-light";

    divTask.innerHTML = `<div class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
  </div>`;

    let customP = document.createElement("p");
    customP.className = "customP mb-0";
    customP.innerText = search.value;
    search.value = "";

    let divBtn = document.createElement("div");
    divBtn.className = "div";

    let extraBtn = document.createElement("button");
    extraBtn.className = "btn btn-secondary";
    extraBtn.innerText = "Extra";
    divBtn.appendChild(extraBtn);

    // divBtn.innerHTML = `<button class="btn btn-warning me-2" id="edit">Edit</button>
    // <button class="btn btn-danger" id="delete">Delete</button>`;

    let btnEdit = document.createElement("button");
    btnEdit.className = "btn btn-warning me-2";
    btnEdit.innerText = "Edit";
    btnEdit.style.display = "none";
    divBtn.appendChild(btnEdit);

    let btnDelete = document.createElement("button");
    btnDelete.className = "btn btn-danger";
    btnDelete.innerText = "Delete";
    btnDelete.style.display = "none";
    divBtn.appendChild(btnDelete);

    divTask.appendChild(customP);
    divTask.appendChild(divBtn);
    box.appendChild(divTask);

    extraBtn.addEventListener("click", function () {
      extraBtn.style.display = "none";
      btnEdit.style.display = "inline";
      btnDelete.style.display = "inline";
    });

    // let btnEdit = document.querySelector("#edit");
    // let btnDelete = document.querySelector("#delete");

    btnDelete.addEventListener("click", function () {
      //   this.parentNode.parentNode.remove();
      this.closest("div").parentNode.remove();
    });

    btnEdit.addEventListener("click", function () {
      search.value = this.parentNode.parentNode.children[1].innerText;
      addBtn.addEventListener("click", function () {
        customP.parentNode.remove();
        this.customP.innerText = search.value;
        createToDo();

        // window.addEventListener("keypress", function (e) {
        //   if (e.keyCode === 13) {
        //     console.log(customP.parentNode.remove());
        //     createToDo();
        //     this.customP.innerText = search.value;
        //   }
        // });
      });
    });
  }
};

addBtn.addEventListener("click", createToDo);

////// SUBMIT BY PRESSING ENTER! //////

window.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    createToDo();
  }
});

let resetFunk = function () {
  if (box.innerText != "") {
    setTimeout(() => {
      box.innerText = "";
      resMessage = document.createElement("div");
      resMessage.className =
        "resDiv mt-2 p-2 d-flex justify-content-between align-items-center bg-light";
      resMessage.innerHTML = `<p class="resMes">All Tasks have been Removed!</p>`;
      resetBtn.disabled = true;
      box.appendChild(resMessage);
    }, 2000);

    setTimeout(() => {
      box.innerText = "";
    }, 5000);
  }
};

resetBtn.addEventListener("click", resetFunk);
