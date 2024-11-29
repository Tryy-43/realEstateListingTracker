const btnUpdate = document.querySelector("#btnUpdate");
const btnUpdateform = document.querySelector(".btn-update");
const titleUpdate = document.querySelector("#titleUpdate");
console.log(btnUpdate, titleUpdate);
btnUpdateform.addEventListener("click", () => {
  btnUpdate.innerHTML = "Update";
  titleUpdate.innerHTML = "Update Company";
});
const btnAdd = document.querySelector("#btnAdd");
btnAdd.addEventListener("click", () => {
  btnUpdate.innerHTML = "Save";
  titleUpdate.innerHTML = "Add Company";
});
const btnOut = document.querySelector("#btnOut");
btnOut.addEventListener("click", () => {
  window.location.href = "index.html";
});
