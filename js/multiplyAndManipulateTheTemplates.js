// window.onload(function() {


const tablePlace = document.querySelector('#tablesHere');
const templateTable = document.querySelector(".tableTemplate");
let tables;
let numberOfi = []
const numberOfSets = 4
const seconds = [20, 16, 12]
const intensity = [50, 70, 75, 80]
const numberOfReps = [12, 10, 8, 6]
let minimumOfReps = 6
let mathForRep1
let mathForRep2
let mathForSecs1
let mathForSecs2
let numberOfWeeks

const setWeekNumberButton = document.getElementById("setWeekNumber");


function getNumberOfWeeks(answer){
  console.log("execute");
  localStorageRemoveItem(`numberOfWeeks`)
  // localStorage.removeItem(`numberOfWeeks`); 
  if(answer === undefined){
    localStorageSetItem(`numberOfWeeks`, 5)
    // localStorage.setItem(`numberOfWeeks`, 5); 
  } else {
    // localStorage.setItem(`numberOfWeeks`, answer.value); 
    localStorageSetItem(`numberOfWeeks`, answer.value)
  }
  // console.log(localStorage.getItem(`numberOfWeeks`));
  console.log(localStorageGetItem(`numberOfWeeks`));
}
numberOfWeeks = localStorageGetItem(`numberOfWeeks`)
console.log(numberOfWeeks);

function appendAllTheTables(){
  //append templates in the html
  for (let j = 0; j < numberOfWeeks; j++) {
    numberOfi[j] = j
  }

  function mathForSecsAndReps(){
    mathForRep1 = numberOfReps[0] / numberOfWeeks - 0.9
    mathForRep2 = numberOfReps[1] / numberOfWeeks - 0.9
    mathForSecs1 = seconds[0] / numberOfWeeks - 1
    mathForSecs2 = seconds[0] / numberOfWeeks - 0.5
  }
  mathForSecsAndReps(mathForRep1, mathForRep2, mathForSecs1)

  for (let i = 0; i < numberOfWeeks; i++) {
    let tableHTML = templateTable.content.firstElementChild.cloneNode(true);
    let weekNumber = tableHTML.querySelector(".week").textContent = `Week ${i + 1}`
    // (+iets toevoegen om de datums van de dagen te bepalen) TODO
    tablePlace.appendChild(tableHTML);
    // here is the workout cycle changed by week
    //first reps then secs
    let tableWeek = document.querySelector(`div#tablesHere table:nth-child(${i+1})`)
    let repsRow = tableWeek.querySelectorAll(".reps")

    for (let j = 0; j < repsRow.length; j++) {
      let row = repsRow[j];
      for (let h = 0; h < numberOfSets; h++) {

        let td = row.querySelector(`td:nth-child(${(h * 2) + 4 })`)     
        if(td.outerText === `x${numberOfReps[2]}-${numberOfReps[0]}`){
          td.textContent = `x${numberOfReps[2]}-${numberOfReps[1]}`
          } else if (td.outerText === `x${numberOfReps[0]}`){
           td.textContent = `x${numberOfReps[0] - Math.ceil(i * mathForRep1)}`
          } else if (td.outerText === `x${numberOfReps[1]}`){
                   td.textContent = `x${numberOfReps[1] - Math.ceil(i * mathForRep2)}`
                   if (i != 0){
                   if(td.textContent < `x${minimumOfReps}`){
                    td.textContent = `x${numberOfReps[3]}`
                   }
                  }
           } else if (td.outerText === `x${numberOfReps[2]}`){
             if (i != 0){
              td.textContent = `x${numberOfReps[3]}`
             }
           }
       }
   }


   let borderSeconds = [20, 18, 16, 14, 12, 10, 8, 6, 4]

    if(i != 0){
      let secsRow = tableWeek.querySelectorAll(".secs")
      for (let j = 0; j < secsRow.length; j++) {
      let row = secsRow[j];
      for (let h = 0; h < numberOfSets; h++) {
        let td = row.querySelector(`td:nth-child(${(h * 2) + 4 })`)     
        let tdColor = row.querySelector(`td:nth-child(${(h * 2) + 3 })`) 


        if(td.outerText === `${seconds[0]} sec`){
            td.textContent = `${seconds[0] - Math.ceil(i * mathForSecs1)} sec`
            if((seconds[0] - Math.ceil(i * mathForSecs1)) > borderSeconds[2]){
              tdColor.textContent = `70%`
              tdColor.classList = ""
              tdColor.classList.add("yellow")
            }
            if ((seconds[0] - Math.ceil(i * mathForSecs1)) <= borderSeconds[2] && (seconds[0] - Math.ceil(i * mathForSecs1)) >= borderSeconds[3]) {
                tdColor.textContent = `75%`;
                tdColor.classList = ""
                tdColor.classList.add("yellow")
            }
            if ((seconds[0] - Math.ceil(i * mathForSecs1)) < borderSeconds[3] && (seconds[0] - Math.ceil(i * mathForSecs1)) >= borderSeconds[4]) {
              tdColor.textContent = `80%`;
              tdColor.classList = ""
              tdColor.classList.add("red")
            }
            if ((seconds[0] - Math.ceil(i * mathForSecs1)) < borderSeconds[4] && (seconds[0] - Math.ceil(i * mathForSecs1)) >= borderSeconds[5]) {
              tdColor.textContent = `85%`;
              tdColor.classList = ""
              tdColor.classList.add("red")
            }
            if ((seconds[0] - Math.ceil(i * mathForSecs1)) < borderSeconds[5]) {
              td.textContent = `MH`
              tdColor.textContent = `100%`;
              tdColor.classList = ""
              tdColor.classList.add("blue")
            }

        } else if (td.outerText === `${seconds[1]} sec`){
              td.textContent = `${seconds[1] - Math.ceil(i * mathForSecs2)} sec`
              if((seconds[1] - Math.ceil(i * mathForSecs1)) >= borderSeconds[2]){
                tdColor.textContent = `70%`
                tdColor.classList = ""
                tdColor.classList.add("yellow")
              }
              if ((seconds[1] - Math.ceil(i * mathForSecs1)) < borderSeconds[2] && (seconds[1] - Math.ceil(i * mathForSecs1)) >= borderSeconds[3]) {
                  tdColor.textContent = `75%`;
                  tdColor.classList = ""
                  tdColor.classList.add("yellow")
              }
              if ((seconds[1] - Math.ceil(i * mathForSecs1)) < borderSeconds[3] && (seconds[1] - Math.ceil(i * mathForSecs1)) >= borderSeconds[4]) {
                tdColor.textContent = `80%`;
                tdColor.classList = ""
                tdColor.classList.add("red")
              }
              if ((seconds[1] - Math.ceil(i * mathForSecs1)) < borderSeconds[4] && (seconds[1] - Math.ceil(i * mathForSecs1)) > borderSeconds[5]) {
                tdColor.textContent = `85%`;
                tdColor.classList = ""
                tdColor.classList.add("red")
              }
              if ((seconds[1] - Math.ceil(i * mathForSecs1)) <= borderSeconds[5]) {
                tdColor.textContent = `85%`;
                tdColor.classList = ""
                tdColor.classList.add("red")
                if (i === numberOfi[numberOfi.length - 1]){
                  td.textContent = ``
                  tdColor.textContent = ``;
                  tdColor.classList = ""
                }
                if (i === numberOfi[numberOfi.length - 2]){
                  td.textContent = `MH`
                  tdColor.textContent = `100%`;
                  tdColor.classList = ""
                  tdColor.classList.add("blue")
                }
              }
        } else if (td.outerText === `${seconds[2]} sec`){
            td.textContent = `${seconds[2] - Math.ceil(i * mathForSecs2)} sec`
            if((seconds[2] - Math.ceil(i * mathForSecs1)) >= borderSeconds[2]){
              tdColor.textContent = `70%`
              tdColor.classList = ""
              tdColor.classList.add("yellow")
            }
            if ((seconds[2] - Math.ceil(i * mathForSecs1)) < borderSeconds[2] && (seconds[2] - Math.ceil(i * mathForSecs1)) >= borderSeconds[3]) {
                tdColor.textContent = `75%`;
                tdColor.classList = ""
                tdColor.classList.add("yellow")
            }
            if ((seconds[2] - Math.ceil(i * mathForSecs1)) < borderSeconds[3] && (seconds[2] - Math.ceil(i * mathForSecs1)) >= borderSeconds[4]) {
              tdColor.textContent = `80%`;
              tdColor.classList = ""
              tdColor.classList.add("red")
            }
            if ((seconds[2] - Math.ceil(i * mathForSecs1)) < borderSeconds[4] && (seconds[2] - Math.ceil(i * mathForSecs1)) >= borderSeconds[7]) {
              tdColor.textContent = `85%`;
              tdColor.classList = ""
              tdColor.classList.add("red")
            }
            if ((seconds[2] - Math.ceil(i * mathForSecs1)) < borderSeconds[7]) {
              td.textContent = ``
              tdColor.textContent = ``;
              tdColor.classList = ""
            }
          }
        }
      }
    }
  }
  tables = document.querySelectorAll('.tables');
}

function getPageTwo() {
  let page = document.body.id;
  switch (page) {
    case "index":
      setWeekNumberButton.addEventListener("change", getNumberOfWeeks(this))
      // let allselects = document.querySelectorAll("select")
      // console.log(allselects);
      // for (let i = 0; i < allselects.length; i++) {
      //   allselects[i].addEventListener("change", show(this, id) )
      // }
      break;

    case "workout":
      // numberOfWeeks = localStorage.getItem(`numberOfWeeks`); 
      // console.log(numberOfWeeks);
      break;

    default:
    console.error("This id is not supported")
      break;
  }
}
getPageTwo()

// });