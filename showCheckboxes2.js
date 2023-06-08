
      let selectBox2 = document.getElementById("selectBox2");
      function showCheckboxes2() {
        var checkboxes = document.getElementById("checkboxes2");
        checkboxes.classList.toggle("visible");
      }

      function selectAllLegue(source) {
        let checkboxes = document.querySelectorAll('input[name="legue"]');
        for (let i = 0; i < checkboxes.length; i++) {
          checkboxes[i].checked = source.checked;
        }
      }

      selectBox2.addEventListener("click", showCheckboxes2);
