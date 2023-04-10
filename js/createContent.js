// watch out! the order of the arrays has to be the same as the order of the create exercises functions

let plancheProgressions = []
let frontLeverProgressions = []
let lsitVsitIsitMannaProgressions = []
let ironCrossProgressions = []
let backLeverProgressions = []
let humanFlagProgressions = []
let muscleUpProgressions = []
let oneArmPullupsProgressions = []
let dragonFlagProgressions = []
let planchePushupProgressions = []
let malteseProgressions = []
let frontLeverTouchProgressions = []
let victorianCrossProgressions = []
let pistolSquatsProgressions = []
let shoulderBasics = []
let pullBasics = []
let chestTricepsBasics = []
let coreBasics = []
let legBasics = []

let excerciseArray = []

const progressionsArray= [
  plancheProgressions,
  frontLeverProgressions,
  lsitVsitIsitMannaProgressions,
  ironCrossProgressions,
  backLeverProgressions,
  humanFlagProgressions,
  muscleUpProgressions,
  oneArmPullupsProgressions,
  dragonFlagProgressions,
  planchePushupProgressions,
  malteseProgressions,
  frontLeverTouchProgressions,
  victorianCrossProgressions,
  pistolSquatsProgressions,
  shoulderBasics,
  pullBasics,
  chestTricepsBasics,
  coreBasics,
  legBasics
]

const basicsArray = [
  shoulderBasics, 
  pullBasics, 
  chestTricepsBasics, 
  coreBasics, 
  legBasics
]

let getTheRightOrder = []
let storeBasics = []
let allExercisesList = []
let allTablePlacesArray = []
let arrayForNormalExercises = []




// goals
function createExcercise(name, type, matchingExercises, repsOrSecs, storage){
    let exercise = new Exercise(name, type, matchingExercises, repsOrSecs, storage);
    if(exercise.type != ""){
      allExercisesList.push(exercise)
    }
    excerciseArray.push(exercise.name) 
    exercise.storage.forEach(storage => {
      if (getTheRightOrder.includes(`${storage}`)){
        // console.log("skip");
      } else {
        getTheRightOrder.push(`${storage}`)
      }
    });
}
function createAllGoals(){
  // Create all of the different exercises (push, pull, core, legs, other)
  // the secs or reps is about the matching exercises
  createExcercise("Planche", "push", ["Planche lean", "Planche lean pushups", "Scapulapushups"], ["secs", "reps", "reps"], ["specificGoalExerciseOnePushMH", "specificGoalExerciseTwoPushMR", "specificGoalExerciseThreePushMR"])
  createExcercise("Front-lever", "pull", ["Front lever negatives"], ["reps"], ["specificGoalExerciseOnePullMR"])
  createExcercise("Lsit-Vsit-Isit-Manna", "core", ["leg ups?"], ["reps"], ["specificGoalExerciseOneCoreMR"])
  createExcercise("Iron-cross", "pull", ["Iron cross ups?"], ["reps"], ["specificGoalExerciseOnePullReps"])
  createExcercise("Back-lever", "push", [], [], [])
  createExcercise("Human-flag", "other", ["Human flag negatives"], ["reps"], [])
  createExcercise("Muscle-up", "pull", ["Banded muscle ups", "explosive pull up variations"], ["reps", "reps"], ["specificGoalExerciseOnePullReps", "specificGoalExerciseTwoPullReps"])
  createExcercise("One-arm-pullup", "pull", ["One arm negatives"], ["reps"], ["specificGoalExerciseOnePullReps"])
  createExcercise("Dragon-flag", "core", ["Dragon flag negatives"], ["reps"], ["specificGoalExerciseOneCoreReps"])
  createExcercise("Planche-pushup", "push", ["Planche lean pushups", "Scapulapushups", "Straddle planche-pushups"], ["reps", "reps", "reps"], ["specificGoalExerciseOnePushMR", "specificGoalExerciseTwoPushReps", "specificGoalExerciseThreePushMR"])
  createExcercise("Maltese", "push", ["Banded maltese"], ["secs"], ["specificGoalExerciseOnePushSecs"])
  createExcercise("Front-lever-touch", "pull", ["adv front lever touch"], ["secs"], ["specificGoalExerciseOnePullSecs"])
  createExcercise("Victorian-cross", "pull", [], [], [])
  createExcercise("Pistol-squats", "legs", ["Bulgarian squats", "Jump squats"], ["reps"], ["specificGoalExerciseOneLegsReps", "specificGoalExerciseOneLegsMH"])
  // halfesto

  // basics
  createExcercise("Shoulders", "", [], [], [])
  createExcercise("Pull", "", [], [], [])
  createExcercise("Dips", "", [], [], [])
  createExcercise("Core", "", [], [], [])
  createExcercise("Squats", "", [], [], [])
}




// progressions
let myWord = ["basic"];

  function createProgression(name, type, repsOrSecs, parent, storage, difficulty, warmup){
    let progressions = new Progression(  name, type, repsOrSecs, parent, storage, difficulty, warmup);
    if(`${progressions.name}` === "last"){
        getTheRightOrder.forEach((progressions) => [
          allTablePlacesArray.push(progressions)
        ])
        storeBasics.forEach((basic)=>[
          allTablePlacesArray.push(basic)
        ])
    } else {
      for (var i = 0; i <  excerciseArray.length; i++) {
        if (progressions.parent == excerciseArray[i] ){
          progressionsArray[i].push(progressions);

          function checkForWord(str, word) {
            if (str.includes(word)){
                if (storeBasics.includes(`${progressions.storage}`)){
                  //  console.log("skip");
              } else {
                  storeBasics.push(`${progressions.storage}`)
                } 
            } else {
              if (allTablePlacesArray.includes(`${progressions.storage}`)){
                //  console.log("skip");
            } else {
                allTablePlacesArray.push(`${progressions.storage}`)
              }
            }  
            }
          for (let j = 0; j < myWord.length; j++) {
            let myString = `${progressions.storage}`;
            const word = myWord[j];
              checkForWord(myString, word); 
          } 
        }   
      } 
    }
}

function createProgressions(){
  // Create all of the different exercises (push, pull, core, legs, other)
  // createProgression("pre-tuck-planche", "push", "secs", "Planche", "goalPushSecs", "no")
  createProgression("Tuck-planche", "push", "secs", "Planche", "goalPushSecs","", "yes")
  createProgression("Adv-tuck-planche", "push", "secs", "Planche", "goalPushSecs","", "yes")
  createProgression("One-leg-planche", "push", "secs", "Planche", "goalPushSecs","", "yes")
  createProgression("Super-adv-tuck-planche", "push", "secs", "Planche", "goalPushSecs","", "yes")
  createProgression( "Straddle-planche", "push",  "secs", "Planche", "goalPushSecs", "","yes")

  createProgression("Tuck-front-lever", "pull", "secs", "Front-lever", "goalPullSecs","", "yes")
  createProgression("Adv-tuck-front-lever", "pull", "secs", "Front-lever", "goalPullSecs","", "yes")
  createProgression("One-leg-front-lever", "pull", "secs", "Front-lever", "goalPullSecs","", "yes")
  createProgression("Super-adv-tuck-front-lever", "pull", "secs", "Front-lever", "goalPullSecs","", "yes")
  createProgression("Halflay-front-lever", "pull", "secs", "Front-lever", "goalPullSecs","", "yes")
  createProgression("Straddle-front-lever", "pull", "secs", "Front-lever", "goalPullSecs","", "yes")

  createProgression("leg-raises", "core", "reps", "Lsit-Vsit-Isit-Manna", "goalCoreMR","", "no")
  createProgression("bend-leg-L-sit", "core", "secs", "Lsit-Vsit-Isit-Manna", "goalCoreMH","", "no")
  createProgression("L-sit", "core", "secs", "Lsit-Vsit-Isit-Manna", "goalCoreMH","", "yes")
  createProgression("V-sit", "core", "secs", "Lsit-Vsit-Isit-Manna", "goalCoreMH","", "yes")
  createProgression("I-sit", "core", "secs", "Lsit-Vsit-Isit-Manna", "goalCoreMH","", "yes")
  createProgression("pre-manna", "core", "secs", "Lsit-Vsit-Isit-Manna", "goalCoreMH","", "yes")

  createProgression("Short-lever-iron-cross", "pull", "secs", "Iron-cross", "goalPullSecs","", "yes")
  createProgression("Medium-lever-iron-cross", "pull", "secs", "Iron-cross", "goalPullSecs","", "yes")
  createProgression("Long-lever-iron-cross", "pull", "secs", "Iron-cross" , "goalPullSecs","", "yes")

  createProgression("Tuck-back-lever", "push", "secs", "Back-lever", "goalPushSecs","", "yes")
  createProgression("Adv-tuck-back-lever", "push", "secs", "Back-lever", "goalPushSecs","", "yes")
  createProgression("One-leg-back-lever", "push", "secs", "Back-lever", "goalPushSecs","", "yes")
  createProgression("Super-adv-back-front-lever", "push", "secs", "Back-lever", "goalPushSecs","", "yes")
  createProgression("Halflay-back-lever", "push", "secs", "Back-lever", "goalPushSecs","", "yes")
  createProgression("Straddle-back-lever", "push", "secs", "Back-lever", "goalPushSecs","", "yes")

  createProgression("Hanging-side-pull", "other", "secs", "Human-flag", "goalOtherAtPushSecs","", "yes")
  createProgression("45-degree-hanging-hold", "other", "secs", "Human-flag", "goalOtherAtPushSecs","", "yes")
  createProgression("Flag-plank", "other", "secs", "Human-flag", "goalOtherAtPushSecs","", "yes")
  createProgression("Straddle-flag-lower-downs", "other", "reps", "Human-flag", "goalOtherAtPushReps","", "yes")
  createProgression("Double-leg-drops", "other", "reps", "Human-flag", "goalOtherAtPushReps","", "yes")

  createProgression("Australian-pullups", "pull", "reps", "Muscle-up", "goalPullMR","", "no")
  createProgression("Banded-pullups", "pull", "reps", "Muscle-up", "goalPullReps","", "no")
  createProgression("Pullups", "pull", "reps", "Muscle-up", "goalPullReps","", "yes")
  createProgression("High-pullups", "pull", "reps", "Muscle-up", "goalPullReps","", "yes")

  createProgression("Australian-pullups", "pull", "reps", "One-arm-pullup", "goalPullMR","", "no")
  createProgression("Banded-pullups", "pull", "reps", "One-arm-pullup", "goalPullReps","", "no")
  createProgression("Pullups", "pull", "reps", "One-arm-pullup", "goalPullReps","", "yes")
  createProgression("Archer-pullups", "pull", "reps", "One-arm-pullup", "goalPullReps","", "yes")
  createProgression("Decline/reverse-one-arm-pullups", "pull", "reps", "One-arm-pullup", "goalPullReps","", "yes")

  createProgression("Tuck-dragon-flag", "core", "secs", "Dragon-flag", "goalCoreSecs","", "yes")
  createProgression("Adv-tuck-dragon-flag", "core", "secs", "Dragon-flag", "goalCoreSecs","", "yes")
  createProgression("One-leg-dragon-flag", "core", "secs", "Dragon-flag", "goalCoreSecs", "","yes")
  createProgression("Super-adv-tuck-dragon-flag", "core", "secs", "Dragon-flag", "goalCoreSecs","", "yes")
  createProgression("Halflay-dragon-flag", "core", "secs", "Dragon-flag", "goalCoreSecs","", "yes")
  createProgression("Straddle-dragon-flag", "core", "secs", "Dragon-flag", "goalCoreSecs","", "yes")

  createProgression("Full-planche", "push", "secs", "Planche-pushup", "goalPushSecs","", "yes")
  createProgression("full-planche-to-bended-arm-planche", "push", "reps", "Planche-pushup", "goalPushReps","", "yes")

  createProgression("Full-planche", "push", "secs", "Maltese", "goalPushSecs","", "yes")
  createProgression("Wide-full-planche", "push", "secs", "Maltese", "goalPushSecs","", "yes")
  createProgression("Banded-maltese", "push", "secs", "Maltese", "goalPushSecs","", "yes")

  createProgression("Front-lever", "pull", "secs", "Front-lever-touch", "goalPullSecs","", "yes")
  createProgression("Adv-tuck-front-lever-pullups", "pull", "reps", "Front-lever-touch", "goalPullReps","", "yes")
  createProgression("Halflay-front-lever-touch-hold", "pull", "secs", "Front-lever-touch", "goalPullSecs","", "yes")
  createProgression("Straddle-front-lever-touch-hold", "pull", "secs", "Front-lever-touch", "goalPullSecs","", "yes")

  createProgression("Front-lever", "pull", "secs", "Victorian-cross", "goalPullSecs","", "yes")
  createProgression("Front-lever-touch", "pull", "secs", "Victorian-cross", "goalPullSecs","", "yes")
  createProgression("Wide-front-lever", "pull", "secs", "Victorian-cross", "goalPullSecs","", "yes")

  createProgression("Seated-squats", "legs", "reps", "Pistol-squats", "goalLegsMR","", "no")
  createProgression("Squats", "legs", "reps", "Pistol-squats", "goalLegsMR","", "no")
  createProgression("Weighted-squats", "legs", "reps", "Pistol-squats", "goalLegsReps","", "yes")
  createProgression("Assisted-pistol-squats", "legs", "reps", "Pistol-squats", "goalLegsReps","", "yes")

// the basics
  createProgression("Incline-pushups", "push", "reps", "Shoulders", "basicOnePushReps", "1", "no")
  createProgression("Pushups", "push", "reps", "Shoulders", "basicOnePushReps", "2", "no")
  createProgression("Pseudo-pushups", "push", "reps", "Shoulders", "basicOnePushReps", "3", "no")
  createProgression("Pike-pushups", "push", "reps", "Shoulders", "basicOnePushReps", "4", "yes")
  createProgression("Handstand pushups", "push", "reps", "Shoulders", "basicOnePushReps", "5", "yes")

  createProgression("Australian-pullups", "pull", "reps", "Pull", "basicOnePullReps", "1", "no")
  createProgression("Banded-pullups", "pull", "reps", "Pull", "basicOnePullReps", "2", "no")
  createProgression("Chinups", "pull", "reps", "Pull", "basicOnePullReps", "3", "no")
  createProgression("Pullups", "pull", "reps", "Pull", "basicOnePullReps", "4", "no")
  createProgression("Weighted-pullups", "pull", "reps", "Pull", "basicOnePullReps", "5", "yes")
  createProgression("Muscle-ups", "pull", "reps", "Pull", "basicOnePullReps", "5", "yes")

  createProgression("Bench-dips", "push", "reps", "Dips", "basicTwoPushReps", "2", "no")
  createProgression("Dips", "push", "reps", "Dips", "basicTwoPushReps", "3", "no")
  createProgression("Weighted-dips", "push", "reps", "Dips", "basicTwoPushReps", "5", "yes")

  createProgression("Bended-L-sit", "core", "secs", "Core", "basicOneCoreMH", "1", "no")
  createProgression("Sit-ups", "core", "reps", "Core", "basicOneCoreReps", "2", "no")
  createProgression("Leg-raises", "core", "reps", "Core", "basicOneCoreReps", "3", "no")
  createProgression("Hollow-body-hold", "core", "secs", "Core", "basicOneCoreMH", "4", "no")
  createProgression("Extended-hollow-body-hold", "core", "secs", "Core", "basicOneCoreMH", "5", "no")

  createProgression("Seated-squats", "legs", "reps", "Squats", "basicOneLegsMR", "1", "no")
  createProgression("Squats", "legs", "reps", "Squats", "basicOneLegsMR", "2", "no")
  createProgression("Assisted-pistol-squats", "legs", "reps", "Squats", "basicOneLegsMR", "4", "no")
  createProgression("Pistol-squats", "legs", "reps", "Squats", "basicOneLegsMR", "5", "yes")

  createProgression("last", "", "", "", "", "", "")
}



// normal exercises
function createNormalExercise(name, type, repsOrSecs, difficulty, storage, storageToGetItFrom){
  let normalExercise = new NormalExercises(name, type, repsOrSecs, difficulty, storage, storageToGetItFrom);
  arrayForNormalExercises.push(normalExercise);
  if (allTablePlacesArray.includes(`${normalExercise.storage}`)){
    // console.log("skip");
  } else {
    allTablePlacesArray.push(`${normalExercise.storage}`)
  }
}
function createNormalExercises(){
  createNormalExercise("Incline-pushups", "push", "reps", "1", "normalExercisePushOneReps", "basicOnePushReps")
  createNormalExercise("Pushups", "push", "reps", "2", "normalExercisePushOneReps", "basicOnePushReps")
  createNormalExercise("Decline-pushups", "push", "reps", "3", "normalExercisePushOneReps", "basicOnePushReps")
  createNormalExercise("Archer-pushups", "push", "reps", "4", "normalExercisePushOneReps", "basicOnePushReps")
  createNormalExercise("One-arm-pushups", "push", "reps", "5", "normalExercisePushOneReps", "basicOnePushReps")

  createNormalExercise("Tricep-push-downs", "push", "reps", "1", "normalExercisePushTwoReps", "basicTwoPushReps")
  createNormalExercise("Tricep-push-downs", "push", "reps", "2", "normalExercisePushTwoReps", "basicTwoPushReps")
  createNormalExercise("Diamond-pushups", "push", "reps", "3", "normalExercisePushTwoReps", "basicTwoPushReps")
  createNormalExercise("Diamond-pushups", "push", "reps", "4", "normalExercisePushTwoReps", "basicTwoPushReps")
  createNormalExercise("Weighted-diamond-pushups", "push", "reps", "5", "normalExercisePushTwoReps", "basicTwoPushReps")

  createNormalExercise("Australian-chinups", "pull", "reps", "1", "normalExercisePullOneReps", "basicOnePullReps")
  createNormalExercise("Australian-chinups", "pull", "reps", "2", "normalExercisePullOneReps", "basicOnePullReps")
  createNormalExercise("Pullups-negatives", "pull", "reps", "3", "normalExercisePullOneReps", "basicOnePullReps")
  createNormalExercise("Weighted-chinups", "pull", "reps", "4", "normalExercisePullOneReps", "basicOnePullReps")
  createNormalExercise("Weighted-chinups", "pull", "reps", "5", "normalExercisePullOneReps", "basicOnePullReps")

  createNormalExercise("Rows", "pull", "reps", "1", "normalExercisePullTwoReps", "basicOnePullReps")
  createNormalExercise("Rows", "pull", "reps", "2", "normalExercisePullTwoReps", "basicOnePullReps")
  createNormalExercise("Rows", "pull", "reps", "3", "normalExercisePullTwoReps", "basicOnePullReps")
  createNormalExercise("Rows", "pull", "reps", "4", "normalExercisePullTwoReps", "basicOnePullReps")
  createNormalExercise("Rows", "pull", "reps", "5", "normalExercisePullTwoReps", "basicOnePullReps")

  createNormalExercise("Jumpsquats", "legs", "secs", "1", "normalExerciseLegsOneMH", "basicOneLegsReps")
  createNormalExercise("Jumpsquats", "legs", "secs", "2", "normalExerciseLegsOneMH", "basicOneLegsReps")
  createNormalExercise("Jumpsquats", "legs", "secs", "3", "normalExerciseLegsOneMH", "basicOneLegsReps")
  createNormalExercise("Jumpsquats", "legs", "secs", "4", "normalExerciseLegsOneMH", "basicOneLegsReps")
  createNormalExercise("Jumpsquats", "legs", "secs", "5", "normalExerciseLegsOneMH", "basicOneLegsReps")
  createNormalExercise("Bulgarian-splitsquats", "legs", "reps", "1", "normalExerciseLegsTwoReps", "basicOneLegsReps")
  createNormalExercise("Bulgarian-splitsquats", "legs", "reps", "2", "normalExerciseLegsTwoReps", "basicOneLegsReps")
  createNormalExercise("Bulgarian-splitsquats", "legs", "reps", "3", "normalExerciseLegsTwoReps", "basicOneLegsReps")
  createNormalExercise("Bulgarian-splitsquats", "legs", "reps", "4", "normalExerciseLegsTwoReps", "basicOneLegsReps")
  createNormalExercise("Bulgarian-splitsquats", "legs", "reps", "5", "normalExerciseLegsTwoReps", "basicOneLegsReps")

  createNormalExercise("mountainclimbers?", "core", "secs", "1", "normalExerciseCoreOneMH", "basicOneCoreReps")
  createNormalExercise("mountainclimbers?", "core", "secs", "2", "normalExerciseCoreOneMH", "basicOneCoreReps")
  createNormalExercise("mountainclimbers?", "core", "secs", "3", "normalExerciseCoreOneMH", "basicOneCoreReps")
  createNormalExercise("mountainclimbers?", "core", "secs", "4", "normalExerciseCoreOneMH", "basicOneCoreReps")
  createNormalExercise("mountainclimbers?", "core", "secs", "5", "normalExerciseCoreOneMH", "basicOneCoreReps")

  createNormalExercise("mountainclimbers?", "core", "secs", "1", "normalExerciseCoreOneMH", "basicOneCoreSecs")
  createNormalExercise("mountainclimbers?", "core", "secs", "2", "normalExerciseCoreOneMH", "basicOneCoreSecs")
  createNormalExercise("mountainclimbers?", "core", "secs", "3", "normalExerciseCoreOneMH", "basicOneCoreSecs")
  createNormalExercise("mountainclimbers?", "core", "secs", "4", "normalExerciseCoreOneMH", "basicOneCoreSecs")
  createNormalExercise("mountainclimbers?", "core", "secs", "5", "normalExerciseCoreOneMH", "basicOneCoreSecs")

  createNormalExercise("Plank", "core", "secs", "1", "normalExerciseCoreTwoMH", "basicOneCoreReps")
  createNormalExercise("Plank", "core", "secs", "2", "normalExerciseCoreTwoMH", "basicOneCoreReps")
  createNormalExercise("Plank", "core", "secs", "3", "normalExerciseCoreTwoMH", "basicOneCoreReps")
  createNormalExercise("Plank", "core", "secs", "4", "normalExerciseCoreTwoMH", "basicOneCoreReps")
  createNormalExercise("Plank", "core", "secs", "5", "normalExerciseCoreTwoMH", "basicOneCoreReps")

  createNormalExercise("Plank", "core", "secs", "1", "normalExerciseCoreTwoMH", "basicOneCoreSecs")
  createNormalExercise("Plank", "core", "secs", "2", "normalExerciseCoreTwoMH", "basicOneCoreSecs")
  createNormalExercise("Plank", "core", "secs", "3", "normalExerciseCoreTwoMH", "basicOneCoreSecs")
  createNormalExercise("Plank", "core", "secs", "4", "normalExerciseCoreTwoMH", "basicOneCoreSecs")
  createNormalExercise("Plank", "core", "secs", "5", "normalExerciseCoreTwoMH", "basicOneCoreSecs")
}