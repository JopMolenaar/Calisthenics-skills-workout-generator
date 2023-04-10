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

// the only possible combinations now are: 0, 0 for restday at Sunday. 0, 2 for a restay on Wednesday. 2, 2 for restay at Monday
let numberOfRestDay = 0
let numberOfRestDay2 = 0

const setWeekNumberButton = document.getElementById("setWeekNumber");


function getNumberOfWeeks(answer){
  localStorageRemoveItem(`numberOfWeeks`)
  if(answer === undefined){
    localStorageSetItem(`numberOfWeeks`, 5)
  } else { 
    localStorageSetItem(`numberOfWeeks`, answer.value)
  }
}
numberOfWeeks = localStorageGetItem(`numberOfWeeks`)

// change the content every week
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
  mathForSecsAndReps()

  for (let i = 0; i < numberOfWeeks; i++) {

  //   // here is the workout cycle changed by week
  //   //first reps then secs
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
}

// duplicate the weeks
function duplicateTemplate(){
  for (let j = 0; j < numberOfWeeks; j++) {
    const tablesHere = document.getElementById("tablesHere")
    const tableTemplate = document.getElementById("tabelTemplateee")
    const tableHTML = tableTemplate.content.firstElementChild.cloneNode(true);
    let weekNumber = tableHTML.querySelector(".week").textContent = `Week ${j + 1}`
    tablesHere.appendChild(tableHTML);
  }
  tables = document.querySelectorAll('.tables');
}



// duplicate the rows
// this is the function that desides how the template looks
const template = document.querySelector("#templateee")
function createTemplate (){

  duplicateTemplate()

  for (let i = 0; i < allTablePlacesArray.length; i++) {
    const place = allTablePlacesArray[i];

    function checkForWord(str, word, secOrRep) {
      if (str.includes(word) && str.includes(secOrRep)) {
        if(secOrRep === "Reps"){
          const content = 1
          if(word === "Push"){
            const number = 1
            placeInRightBody(number, content)
          // place in push
          } else if(word === "Pull"){
            const number = 2
            placeInRightBody(number, content)
          // place in push
          } else if(word === "Core"){
            const number = 3
            placeInRightBody(number, content)
          // place in push
          } else if(word === "Legs"){
            const number = 3
            placeInRightBody(number, content)
          // place in push
          }
        } else if (secOrRep === "Secs"){
          const content = 2
          if(word === "Push"){
            const number = 1
            placeInRightBody(number, content)
          // place in push
          } else if(word === "Pull"){
            const number = 2
            placeInRightBody(number, content)
          // place in push
          } else if(word === "Core"){
            const number = 3
            placeInRightBody(number, content)
          // place in push
          } else if(word === "Legs"){
            const number = 3
            placeInRightBody(number, content)
          // place in push
          }
        } else if (secOrRep === "MH"){
          const content = 3
          if(word === "Push"){
            const number = 1
            placeInRightBody(number, content)
          // place in push
          } else if(word === "Pull"){
            const number = 2
            placeInRightBody(number, content)
          // place in push
          } else if(word === "Core"){
            const number = 3
            placeInRightBody(number, content)
          // place in push
          } else if(word === "Legs"){
            const number = 3
            placeInRightBody(number, content)
          // place in push
          }
        } else if (secOrRep === "MR"){
          const content = 4
          if(word === "Push"){
            const number = 1
            placeInRightBody(number, content)
          // place in push
          } else if(word === "Pull"){
            const number = 2
            placeInRightBody(number, content)
          // place in push
          } else if(word === "Core"){
            const number = 3
            placeInRightBody(number, content)
          // place in push
          } else if(word === "Legs"){
            const number = 3
            placeInRightBody(number, content)
          // place in push
          }
        }
      }
      
    }
    let myString = `${place}`;
    let myWord = ["Push", "Pull", "Core", "Legs", "Other"];
    let secsOrReps = ["Secs", "Reps", "MH", "MR"];

    for (let j = 0; j < myWord.length; j++) {
      const word = myWord[j];
      for (let h = 0; h < secsOrReps.length; h++) {
        const secOrRep = secsOrReps[h];
        checkForWord(myString, word, secOrRep); 
      }
    }

    function placeInRightBody(id, content){

      for (let i = 0; i < tables.length; i++) {
        // dupliceer template and add classlist to row
        let tableHTML = template.content.firstElementChild.cloneNode(true);
        tableHTML.classList.add(`${place}`)

        let tableHTML2 = template.content.firstElementChild.cloneNode(true);
        tableHTML2.classList.add(`${place}`)

        const testTablePlace = document.querySelector(`table:nth-child(${i + 1}) tbody:nth-child(${((id * 2) + 1)+ numberOfRestDay})`)
        const secondTestTablePlace = document.querySelector(`table:nth-child(${i + 1}) tbody:nth-child(${((id * 2) + 7) + numberOfRestDay2})`)

        switch (content) {
          case 1:
            tableHTML.classList.add(`reps`)
            tableHTML2.classList.add(`reps`)

            tableHTML.querySelector(".set1").textContent = "x12"
            tableHTML.querySelector(".set2").textContent = "x10"
            tableHTML.querySelector(".set3").textContent = "x10"
            tableHTML.querySelector(".set4").textContent = "x8"

            tableHTML2.querySelector(".set1").textContent = "x12"
            tableHTML2.querySelector(".set2").textContent = "x10"
            tableHTML2.querySelector(".set3").textContent = "x10"
            tableHTML2.querySelector(".set4").textContent = "x8"
            break;

          case 2:
            tableHTML.classList.add(`secs`)
            tableHTML2.classList.add(`secs`)

            tableHTML.querySelector(".set1").textContent = "20 sec"
            tableHTML.querySelector(".set2").textContent = "20 sec"
            tableHTML.querySelector(".set3").textContent = "16 sec"
            tableHTML.querySelector(".set4").textContent = "12 sec"

            tableHTML.querySelector(".band1").textContent = "50%"
            tableHTML.querySelector(".band2").textContent = "70%"
            tableHTML.querySelector(".band3").textContent = "75%"
            tableHTML.querySelector(".band4").textContent = "80%"

            tableHTML.querySelector(".band1").classList.add("green")
            tableHTML.querySelector(".band2").classList.add("yellow")
            tableHTML.querySelector(".band3").classList.add("yellow")
            tableHTML.querySelector(".band4").classList.add("red")

            tableHTML2.querySelector(".set1").textContent = "20 sec"
            tableHTML2.querySelector(".set2").textContent = "20 sec"
            tableHTML2.querySelector(".set3").textContent = "16 sec"
            tableHTML2.querySelector(".set4").textContent = "12 sec"

            tableHTML2.querySelector(".band1").textContent = "50%"
            tableHTML2.querySelector(".band2").textContent = "70%"
            tableHTML2.querySelector(".band3").textContent = "75%"
            tableHTML2.querySelector(".band4").textContent = "80%"

            tableHTML2.querySelector(".band1").classList.add("green")
            tableHTML2.querySelector(".band2").classList.add("yellow")
            tableHTML2.querySelector(".band3").classList.add("yellow")
            tableHTML2.querySelector(".band4").classList.add("red")
            break;
        case 3:
            tableHTML.querySelector(".set1").textContent = "MH/30 sec"
            tableHTML.querySelector(".set2").textContent = "MH/30 sec"
            tableHTML.querySelector(".set3").textContent = "MH/30 sec"

            tableHTML2.querySelector(".set1").textContent = "MH/30 sec"
            tableHTML2.querySelector(".set2").textContent = "MH/30 sec"
            tableHTML2.querySelector(".set3").textContent = "MH/30 sec"

          break;
          case 4:
            tableHTML.querySelector(".set1").textContent = "x8-12"
            tableHTML.querySelector(".set2").textContent = "x8-12"
            tableHTML.querySelector(".set3").textContent = "x8-12"
            tableHTML.querySelector(".set4").textContent = "x8-12"

            tableHTML2.querySelector(".set1").textContent = "x8-12"
            tableHTML2.querySelector(".set2").textContent = "x8-12"
            tableHTML2.querySelector(".set3").textContent = "x8-12"
            tableHTML2.querySelector(".set4").textContent = "x8-12"
            break;
          default:
            console.error("we dont have that switch for the content")
            break;
        }



        testTablePlace.appendChild(tableHTML);
        secondTestTablePlace.appendChild(tableHTML2);
      }
    }
  }
  function addExtraOptions(){
    const extraOptionsNumber = 2
    for (let j = 0; j < extraOptionsNumber; j++) {
      for (let i = 0; i < tables.length; i++) {
        // duplicate template and add classlist to row
        for (let j = 0; j < 3; j++) {
          const testTablePlace = document.querySelector(`table:nth-child(${i + 1}) tbody:nth-child(${(((j + 1) * 2) + 1) + numberOfRestDay})`)
          const secondTestTablePlace = document.querySelector(`table:nth-child(${i + 1}) tbody:nth-child(${(((j + 1) * 2) + 7) + numberOfRestDay2})`)
          const extraTemplate = document.getElementById("extraTemplate")
          const extraOptions1 = extraTemplate.content.firstElementChild.cloneNode(true);
          const extraOptions2 = extraTemplate.content.firstElementChild.cloneNode(true);
          testTablePlace.appendChild(extraOptions1);
          secondTestTablePlace.appendChild(extraOptions2);
        }
      }
    }
  }
  addExtraOptions()
}


function getPageTwo() {
  let page = document.body.id;
  switch (page) {
    case "index":
      setWeekNumberButton.addEventListener("change", getNumberOfWeeks(this))
      break;

    case "workout":
      break;
      case "template":
        break;
    default:
    console.error("This id is not supported")
      break;
  }
}
getPageTwo()
