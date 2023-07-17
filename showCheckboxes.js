let selectBox = document.getElementById("selectBox");
let selectAllChecks = document.getElementById("selectBox");
let checkboxes = document.getElementById("checkboxes");
function showCheckboxes() {
  checkboxes.classList.toggle("visible");
}

function selectAllSeasond(source) {
  let checkboxes = document.querySelectorAll('input[name="season"]');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = source.checked;
  }
}

function ClickEmptySpase2(e){
  let x = e.target;
  if(!checkboxes.contains(x) && !selectBox.contains(x)){
    checkboxes.classList.remove("visible");
  }
}
document.addEventListener("click", ClickEmptySpase2);


selectBox.addEventListener("click", showCheckboxes);