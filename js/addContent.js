// window.onload(function() {

const questions = document.querySelectorAll("#index form > div > div")
const closeInfotext = document.querySelector("#index main section button ")
const generateButton = document.querySelector("button[type=submit]")
let watchIfallBasicsAreAnswered = [false, false, false, false, false]
const buttonPlace = document.querySelector('#buttonsHere');
let reload;

let chosenProgressions1 = []
let chosenProgressions2 = []
let chosenProgressions3 = []
let chosenProgression = []

let case1Answer
let case2Answer
let case3Answer
let useThis

let selectGoal = []
// alle selects van de goals uit de html komen hier
for (let i = 0; i <  3; i++) {
  selectGoal[i] = document.getElementById("goal-" + (i+1));
}

// add all the content out of the array's in the options in the selects
function addSelectOptions () {
  for (var i = 0; i < allExercisesList.length; i++) {
    let exercise = allExercisesList[i]
   // Create option variable for select and add name and value
    const option1 = document.createElement("option");
    option1.value = exercise.name;
    option1.text = exercise.selectBoxName();
    option1.disabled = exercise.selected  
    option1.dataset.type = exercise.type;

    //TODO: This can be simpeler??
    const option2 = document.createElement("option");
    option2.value = exercise.name;
    option2.text = exercise.selectBoxName();
    option2.disabled = exercise.selected  
    option2.dataset.type = exercise.type;

    const option3 = document.createElement("option");
    option3.value = exercise.name;
    option3.text = exercise.selectBoxName();
    option3.disabled = exercise.selected  
    option3.dataset.type = exercise.type;

    selectGoal[0].appendChild(option1);
    selectGoal[1].appendChild(option2);
    selectGoal[2].appendChild(option3);
  }

  progressionsArray.map(goalProgressions => {
    goalProgressions.map(progressions => {
      let option1 = document.createElement("option");
      option1.value = progressions.name;
      option1.text = progressions.selectBoxName();

      let option2 = document.createElement("option");
      option2.value = progressions.name;
      option2.text = progressions.selectBoxName();

      let option3 = document.createElement("option");
      option3.value = progressions.name;
      option3.text = progressions.selectBoxName();

      //for the basics, underneath the basics is for the normal progressions
      if (progressions.parent === "Shoulders" ||progressions.parent === "Core" ||progressions.parent === "Pull" ||progressions.parent === "Dips" ||progressions.parent === "Squats"){
        let selectBasics = document.getElementById(`${progressions.parent}`);
        selectBasics.appendChild(option1);
      } else {
        let select1 = document.getElementById(`${progressions.parent}` + (0));
        let select2 = document.getElementById(`${progressions.parent}` + (1));
        let select3 = document.getElementById(`${progressions.parent}` + (2));
        select1.appendChild(option1);
        select2.appendChild(option2);
        select3.appendChild(option3);
      }
    })
  })
}


function show(answer, id) {
  const answered = answer.value != 0;
  let dropDown

  function removeChosenExercises (){
    for (var i = 0; i < allExercisesList.length; i++) {
      let exercise = allExercisesList[i]
      if (useThis == exercise.type){
        for (var h = 0; h < exercise.storage.length; h++) {
        localStorage.removeItem(`${exercise.storage[h]}`); 
        }
      }
    }
  }

  //places SPECIFICK GOAL EXERCISES in the table TABEL
  function addSpecificExercises (){
    for (var i = 0; i < allExercisesList.length; i++) {
      let exercise = allExercisesList[i]
      if (exercise.name == answer.value){
        for (var h = 0; h < exercise.storage.length; h++) {
        localStorage.setItem(`${exercise.storage[h]}`, exercise.matchingExercises[h]); 
        }
      }
    }
  }

  function removeChosenProgression(){
    for (let i = 0; i < chosenProgression.length; i++) {
      localStorage.removeItem(`${chosenProgression[i]}`);
      chosenProgression = []
      }
    }

      // displays the relevant select for your answer + sets specific exercise for that goal
       switch (id) {
           case 1:
               // These 3 lines makes sure that if you reselect a select it will remove the localstorages from what have been chosen
                useThis = case1Answer
                removeChosenExercises()
                case1Answer = useThis

                chosenProgression = chosenProgressions1
                removeChosenProgression()
                chosenProgressions1 = chosenProgression
                
                questions[1].style.display = answered ? "flex" : "none"
                questions[2].style.display = answered ? "flex" : "none"

                document.querySelectorAll('.select' + id).forEach(function(el) {
                  el.style.display = 'none';
               });

               if (answered){
                dropDown = document.getElementById(answer.value + "0") 
                dropDown.style.display = "flex"
               } 

               if (!answered){
                questions[3].style.display = "none";
                questions[4].style.display = "none"; 
                questions[5].style.display = "none";
               }

                  for (var i = 0; i < allExercisesList.length; i++) {
                    let exercise = allExercisesList[i]
                    if (exercise.name == answer.value){
                      case1Answer = exercise.type 
                    }
                  }

                addSpecificExercises()
               break;

            case 2:   
                chosenProgression = chosenProgressions1
                removeChosenProgression()
                chosenProgressions1 = chosenProgression
                
                for (var i = 0; i <  progressionsArray.length; i++) {
                  let goalProgressions = progressionsArray[i];
                  for (var h = 0; h <  goalProgressions.length; h++) {
                    let exercise = goalProgressions[h];
                    if (exercise.name == answer.value){
                      localStorage.setItem(`${exercise.storage}`, exercise.name); 
                      chosenProgressions1.push(`${exercise.storage}`);
                    } 
                  }  
                }  
                break;


            case 3:
                useThis = case2Answer
                removeChosenExercises()
                case2Answer = useThis

                chosenProgression = chosenProgressions2
                removeChosenProgression()
                chosenProgressions2 = chosenProgression

                questions[3].style.display = answered ? "flex" : "none"
                questions[4].style.display = answered ? "flex" : "none"

                document.querySelectorAll('.select' + id).forEach(function(el) {
                  el.style.display = 'none';
               });

               if (answered){
                dropDown = document.getElementById(answer.value + "1") 
                dropDown.style.display = "flex"
               }
                if (!answered){
                  questions[4].style.display = "none"; 
                  questions[5].style.display = "none";
              }

              for (var i = 0; i < allExercisesList.length; i++) {
                let exercise = allExercisesList[i]
                if (exercise.name == answer.value){
                  case2Answer = exercise.type 
                }
              }

            addSpecificExercises()
                break;


            case 4:
                  chosenProgression = chosenProgressions2
                  removeChosenProgression()
                  chosenProgressions2 = chosenProgression
                 
                  for (var i = 0; i <  progressionsArray.length; i++) {
                    let goalProgressions = progressionsArray[i];
                    for (var h = 0; h <  goalProgressions.length; h++) {
                      let exercise = goalProgressions[h];
                      if (exercise.name == answer.value){
                        localStorage.setItem(`${exercise.storage}`, exercise.name); 
                        chosenProgressions2.push(`${exercise.storage}`);
                      } 
                    }  
                  }  
                break;


            case 5:
                useThis = case3Answer
                removeChosenExercises()
                case3Answer = useThis

                chosenProgression = chosenProgressions3
                removeChosenProgression()
                chosenProgressions3 = chosenProgression

                questions[5].style.display = answered ? "flex" : "none"

                document.querySelectorAll('.select' + id).forEach(function(el) {
                  el.style.display = 'none';
               });

               if (answered){
                dropDown = document.getElementById(answer.value + "2") 
                dropDown.style.display = "flex"
                }  
               if (!answered){
                questions[5].style.display = "none";
                }

                for (var i = 0; i < allExercisesList.length; i++) {
                  let exercise = allExercisesList[i]
                  if (exercise.name == answer.value){
                    case3Answer = exercise.type 
                  }
                }

              addSpecificExercises()
                break;


              case 6:
                  chosenProgression = chosenProgressions3
                  removeChosenProgression()
                  chosenProgressions3 = chosenProgression
                  
                  for (var i = 0; i <  progressionsArray.length; i++) {
                    let goalProgressions = progressionsArray[i];
                    for (var h = 0; h <  goalProgressions.length; h++) {
                      let exercise = goalProgressions[h];
                      if (exercise.name == answer.value){
                        localStorage.setItem(`${exercise.storage}`, exercise.name); 
                        chosenProgressions3.push(`${exercise.storage}`);
                      } 
                    }  
                  }  
                break;

//  basics (verspreid over de dagen)
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                  for (var i = 0; i <  basicsArray.length; i++) {
                    let basics = basicsArray[i];
                    for (var h = 0; h <  basics.length; h++) {
                      let exercise = basics[h];
                      if (exercise.name == answer.value){
                        localStorage.setItem(`${exercise.storage}`, exercise.name); 
                        localStorage.setItem(`${exercise.storage}difficulty`, exercise.difficulty); 
                      } 
                    }  
                  }  
                  watchIfallBasicsAreAnswered[(id - 7)] = true
                  if (watchIfallBasicsAreAnswered[0] === true && watchIfallBasicsAreAnswered[1] === true && watchIfallBasicsAreAnswered[2] === true && watchIfallBasicsAreAnswered[3] === true && watchIfallBasicsAreAnswered[4] === true){
                    generateButton.disabled = false
                    } else {
                      generateButton.disabled = true
                    }
                break;
           default:
               break;
       }
    // dit zou je kunnen uitbreiden
}

const placesInTables = [];

function setExerciseInRightPlace (){
    // append template to tablesHere div
    appendAllTheTables()

  for (let i = 0; i < AllTablePlacesArray.length; i++) {
    const placesInCurrentTable = [];
    tables.forEach((table) => {
      const place = table.querySelectorAll(`.${AllTablePlacesArray[i]} th`);
      placesInCurrentTable.push(place[0]);
      placesInCurrentTable.push(place[1]);
    });
    placesInTables.push(placesInCurrentTable);
  }

// if a name doesn't have its own place in the table it shows an error
    for (let h = 0; h < placesInTables.length; h++) {
      const elements = placesInTables[h]
        for (let j = 0; j < elements.length; j++) {
          const element = elements[j];
          if(elements != undefined){
            element.textContent = localStorage.getItem(`${AllTablePlacesArray[h]}`);
            }else {
              element.parentElement.style.display = "none"
              }
        }
    }
  const  allDateTRs = document.querySelectorAll(".date")
    function loadTable() {
      var today = new Date();
      var calendarDates = [];
      for (var i = 0; i < 90; i++) {
        var date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
        // var dayOfWeek = date.getDay();
        // var isToday = date.toDateString() === today.toDateString();
        // var isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        var dateFormatted = date.toLocaleDateString('en', {day: '2-digit', month: 'long'});
        calendarDates.push({
          formatted: dateFormatted,
        });
      }
      for (var i = 0; i < allDateTRs.length; i++) {
        var cell = allDateTRs[i]
          if (i < calendarDates.length) {
            var date = calendarDates[i];
            cell.textContent = date.formatted;
        }
      }
    }
    loadTable()
}

// all the undefined storages parents wil have a display none
function validatieCheck (){
      for (let h = 0; h < placesInTables.length; h++) {
        if (localStorage.getItem(`${AllTablePlacesArray[h]}`) == undefined){
          localStorage.removeItem(`${AllTablePlacesArray[h]}`)
        const elements = placesInTables[h]
          for (let j = 0; j < elements.length; j++) {
            const element = elements[j];
            if(element != undefined){
            element.parentElement.style.display = "none"
          } else {
              console.error("There are some exercises that don't have a place in the table");
            }
        } 
      }
    }
}




// reset all the content in the table
function resetOptionalItems(){
  for (let i = 0; i < AllTablePlacesArray.length; i++) {
    localStorage.removeItem(`${AllTablePlacesArray[i]}`);
    }
}



let buttonArray;
// shows n buttons for n tables
function addButtonElement() {
  console.log(tables);
    for (let i = 0; i <= (tables.length - 1); i++){
      let button = document.createElement('button');
      button.classList.add("button");
      button.textContent = "Week " + (i + 1);
      button.setAttribute("id", i);
      buttonPlace.appendChild(button);
    }
    buttonArray = document.querySelectorAll(".button")
    buttonArray[0].classList.add("activeButton")
    tables[0].classList.add("active")
}


//shows the right table at the right button
function showRightTable (e) {
  if (e.target !== e.currentTarget){
    const clickedItem = e.target.id;

    buttonArray.forEach(x => x.classList.remove("activeButton"));
    buttonArray[clickedItem].classList.add("activeButton")

    tables.forEach(x => x.classList.remove("active"));
    tables[clickedItem].classList.add("active")
  }
e.stopPropagation();
}



// disable all options with the same type and chosen options
let selectedOptions = ["", "", ""]; // array to store selected option types

function disableOption() {
     for (let i = 0; i < selectGoal.length; i++) {
      selectGoal[i].addEventListener('change', function() {
        var selectedOption = this.options[this.selectedIndex].dataset.type;
        selectedOptions[i] = selectedOption; // add selected option to array
          // loop through all select elements
          for (var j = 0; j < selectGoal.length; j++) {
            if (j !== i) { // check if not the same select element
                disable(selectGoal[j], selectedOptions);
              }
          }
        });   
    }
  }
function disable(selectElement, disabledOptions) {
// loop through options in select element
  for (var i = 0; i < selectElement.options.length; i++) {
    var option = selectElement.options[i];
    if (disabledOptions[0] === undefined){
      disabledOptions[0] = "";
      disabledOptions[1] = "";
      disabledOptions[2] = "";
      option.disabled = false; // enable option
      console.log(undefined);
      disable(selectGoal[0], disabledOptions)
    } else if (disabledOptions[1] === undefined){
      disabledOptions[1] = "";
      disabledOptions[2] = "";
      option.disabled = false; // enable option
      disable(selectGoal[1], disabledOptions)
    } else if (disabledOptions.includes(option.dataset.type)) {
      option.disabled = true; // disable option if type is in disabledOptions array
    } else {
      option.disabled = false; // enable option otherwise
    }
  }
}


// This function looks at the selectedOptions and if pull is chosen for example, it removes the localstorages from that type
function setNormalExercises (){
  for (var i = 0; i <  arrayForNormalExercises.length; i++) {
      let exercise = arrayForNormalExercises[i];
      if (selectedOptions.includes(`${exercise.type}`)){
        localStorage.removeItem(`${exercise.storage}`)
      } else if (exercise.difficulty === localStorage.getItem(`${exercise.storageToGetItFrom}difficulty`)){
        localStorage.setItem(`${exercise.storage}`, exercise.name); 
      }
  }  
}


// voert wat functies uit als je op een bepaalde pagina bent
function getPage() {
  let page = document.body.id;
  switch (page) {
    case "index":
      disableOption()
      questions[0].style.display = "flex";
      resetOptionalItems();
      createAllGoals()
      createProgressions()
      addSelectOptions()
      createNormalExercises()
      generateButton.disabled = true
      generateButton.addEventListener("click", setNormalExercises)
      getNumberOfWeeks()
      break;

    case "workout":
      setExerciseInRightPlace()
      validatieCheck()
      addButtonElement()
      buttonPlace.addEventListener("click", showRightTable)    
      break;

    default:
    console.error("This id is not supported")
      break;
  }
}
getPage()

// });