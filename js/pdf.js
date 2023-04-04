  window.onload = function() {
    document.getElementById("export").addEventListener("click", () => {
      const body = document.querySelector("body")
      const loadingScreen = document.querySelector("#loadingscreen")
      const tables = document.querySelectorAll(".tables");
      const main = document.querySelector("main"); 
      const tableWrapper = document.getElementById("tablesHere"); 
      const buttons = document.getElementById("buttonsHere"); 
      const saveButton = document.querySelector(".button-save"); 
      const legenda = document.querySelector(".legenda")
      const extraOption = document.querySelectorAll(".extra th input")
      tables.forEach(table => {
        if (!table.classList.contains("active")) {
            main.style.flexDirection = "column"
            body.style.overflow = "hidden"
            loadingScreen.style.display = "flex"
            tableWrapper.style.margin = 0
            tableWrapper.style.flexDirection = "column"
            table.classList.add("active")
            buttons.style.display = "none"
            saveButton.style.display = "none"
            legenda.style.color = "black"
            extraOption.forEach(option => {
                option.style.background = "none"
            });  
        }
        });  
      var opt = {
        margin: 0.1,
        filename: "workout.pdf",
        image: { type: "jpeg", quality: 0.70 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: `letter`, orientation: `portrait` }
      };
      html2pdf().from(main).set(opt).save();

      setTimeout(()=> {
        tables.forEach(table => {
            if (table.classList.contains("active")) {
                location.reload();
            }
        });}
     ,5000);
    });
  };