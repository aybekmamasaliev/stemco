let selectBox2 = document.getElementById("selectBox2");
let checkboxes2 = document.getElementById("checkboxes2");
function showCheckboxes2() {
  checkboxes2.classList.toggle("visible");
}

function selectAllLegue(source) {
  let checkboxes = document.querySelectorAll('input[name="legue"]');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = source.checked;
  }
}

function ClickEmptySpase(e){
  let x = e.target;
  let checkboxes2 = document.getElementById("checkboxes2");
  if(!selectBox2.contains(x) && !document.getElementById("checkboxes2").contains(x)){
      checkboxes2.classList.remove("visible");    
  }
}

document.addEventListener("click", ClickEmptySpase);

selectBox2.addEventListener("click", showCheckboxes2);
