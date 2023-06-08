let selectBox = document.getElementById("selectBox");
let selectAllChecks = document.getElementById("ones");
function showCheckboxes() {
  let checkboxes = document.getElementById("checkboxes");
  checkboxes.classList.toggle("visible");
}

function selectAllSeasond(source) {
  let checkboxes = document.querySelectorAll('input[name="season"]');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = source.checked;
  }
}


selectBox.addEventListener("click", showCheckboxes);
// selectAllChecks.addEventListener("click", selectAll)