
//  create excercise list (goals)
const allExercisesList = []

function createExcercise(name, type, matchingExercises, repsOrSecs, storage){
    let exercise = new Exercise(  name, type, matchingExercises, repsOrSecs, storage);
    allExercisesList.push(exercise)
}
function createAllGoals(){
  // Create all of the different exercises (push, pull, core, legs, other)
  // the secs or reps is about the matching exercises
  createExcercise("Planche", "push", ["Planche lean", "Planche lean pushups", "Scapulapushups"], ["secs", "reps", "reps"], ["specificGoalExerciseOnePushSecs", "specificGoalExerciseTwoPushReps", "specificGoalExerciseThreePushReps"])
  createExcercise("Front-lever", "pull", ["Front lever negatives"], ["reps"], ["specificGoalExerciseOnePullReps"])
  createExcercise("Lsit-Vsit-Isit-Manna", "core", ["leg ups?"], ["reps"], ["specificGoalExerciseOneCoreReps"])
  createExcercise("Iron-cross", "pull", ["Iron cross ups?"], ["reps"], ["specificGoalExerciseOnePullReps"])
  createExcercise("Back-lever", "push", ["????"], ["secs"], ["specificGoalExerciseOnePushSecs"])
  createExcercise("Human-flag", "other", ["Human flag negatives"], ["reps"], [])
  createExcercise("Muscle-up", "pull", ["Banded muscle ups", "explosive pull up variations", "high pull up variations"], ["reps", "reps", "reps"], ["specificGoalExerciseOnePullReps", "specificGoalExerciseTwoPullReps", "specificGoalExerciseThreePullReps"])
  createExcercise("One-arm-pullup", "pull", ["One arm negatives"], ["reps"], ["specificGoalExerciseOnePullReps"])
  createExcercise("Dragon-flag", "core", ["Dragon flag negatives"], ["reps"], ["specificGoalExerciseOneCoreReps"])
  createExcercise("Planche-pushup", "push", ["Planche lean pushups", "Straddle planche-pushups", "Planche", "Scapulapushups"], ["reps", "reps", "secs", "reps"], ["specificGoalExerciseOnePushReps", "specificGoalExerciseTwoPushReps", "specificGoalExerciseThreePushSecs"])
  createExcercise("Maltese", "push", ["Banded maltese"], ["secs"], ["specificGoalExerciseOnePushSecs"])
  createExcercise("Front-lever-touch", "pull", ["adv front lever touch"], ["secs"], ["specificGoalExerciseOnePullSecs"])
  createExcercise("Victorian-cross", "pull", ["????"], ["secs"], ["specificGoalExerciseOnePullSecs"])
  createExcercise("Pistol-squats", "legs", ["Bulgarian squats", "Jump squats"], ["reps"], ["specificGoalExerciseOneLegsReps"])
  // halfesto
}
// default exercises for in the table
// - deadhangs, bulgarian squats, jump squats, 

//  create excercise list (exercises and basics)
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

  const excerciseArray = [
    "Planche",
    "Front-lever",
    "Lsit-Vsit-Isit-Manna",
    "Iron-cross",
    "Back-lever",
    "Human-flag",
    "Muscle-up",
    "One-arm-pullup",
    "Dragon-flag",
    "Planche-pushup",
    "Maltese",   
    "Front-lever-touch",
    "Victorian-cross",
    "Pistol-squats",
    "Shoulders",
    "Pull",
    "Dips",
    "Core",
    "Squats"
  ]
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


  function createProgression(name, type, repsOrSecs, parent, storage, difficulty){
    let progressions = new Progression(  name, type, repsOrSecs, parent, storage, difficulty);

    for (var i = 0; i <  excerciseArray.length; i++) {
      if (progressions.parent == excerciseArray[i] ){
        progressionsArray[i].push(progressions);
      } 
    }
}

function createProgressions(){
  // Create all of the different exercises (push, pull, core, legs, other)
  createProgression("pre-tuck-planche", "push", "secs", "Planche", "goalPushSecs")
  createProgression("Tuck-planche", "push", "secs", "Planche", "goalPushSecs")
  createProgression("Adv-tuck-planche", "push", "secs", "Planche", "goalPushSecs")
  createProgression("One-leg-planche", "push", "secs", "Planche", "goalPushSecs")
  createProgression("Super-adv-tuck-planche", "push", "secs", "Planche", "goalPushSecs")
  createProgression( "Straddle-planche", "push",  "secs", "Planche", "goalPushSecs")

  createProgression("pre-tuck-front-lever", "pull", "secs", "Front-lever", "goalPullSecs")
  createProgression("Tuck-front-lever", "pull", "secs", "Front-lever", "goalPullSecs")
  createProgression("Adv-tuck-front-lever", "pull", "secs", "Front-lever", "goalPullSecs")
  createProgression("One-leg-front-lever", "pull", "secs", "Front-lever", "goalPullSecs")
  createProgression("Super-adv-tuck-front-lever", "pull", "secs", "Front-lever", "goalPullSecs")
  createProgression("Halflay-front-lever", "pull", "secs", "Front-lever", "goalPullSecs")
  createProgression("Straddle-front-lever", "pull", "secs", "Front-lever", "goalPullSecs")

  createProgression("leg-raises", "core", "reps", "Lsit-Vsit-Isit-Manna", "goalCoreReps")
  createProgression("bend-leg-L-sit", "core", "secs", "Lsit-Vsit-Isit-Manna", "goalCoreSecs")
  createProgression("L-sit", "core", "secs", "Lsit-Vsit-Isit-Manna", "goalCoreSecs")
  createProgression("V-sit", "core", "secs", "Lsit-Vsit-Isit-Manna", "goalCoreSecs")
  createProgression("I-sit", "core", "secs", "Lsit-Vsit-Isit-Manna", "goalCoreSecs")
  createProgression("pre-manna", "core", "secs", "Lsit-Vsit-Isit-Manna", "goalCoreSecs")

  createProgression("Short-lever-iron-cross", "pull", "secs", "Iron-cross", "goalPullSecs")
  createProgression("Medium-lever-iron-cross", "pull", "secs", "Iron-cross", "goalPullSecs")
  createProgression("Long-lever-iron-cross", "pull", "secs", "Iron-cross" , "goalPullSecs")

  createProgression("pre-tuck-back-lever", "push", "secs", "Back-lever", "goalPushSecs")
  createProgression("Tuck-back-lever", "push", "secs", "Back-lever", "goalPushSecs")
  createProgression("Adv-tuck-back-lever", "push", "secs", "Back-lever", "goalPushSecs")
  createProgression("One-leg-back-lever", "push", "secs", "Back-lever", "goalPushSecs")
  createProgression("Super-adv-back-front-lever", "push", "secs", "Back-lever", "goalPushSecs")
  createProgression("Halflay-back-lever", "push", "secs", "Back-lever", "goalPushSecs")
  createProgression("Straddle-back-lever", "push", "secs", "Back-lever", "goalPushSecs")

  createProgression("Hanging-side-pull", "other", "secs", "Human-flag", "goalOtherAtPushSecs")
  createProgression("45-degree-hanging-hold", "other", "secs", "Human-flag", "goalOtherAtPushSecs")
  createProgression("Flag-plank", "other", "secs", "Human-flag", "goalOtherAtPushSecs")
  createProgression("Straddle-flag-lower-downs", "other", "secs", "Human-flag", "goalOtherAtPushSecs")
  createProgression("Double-leg-drops", "other", "secs", "Human-flag", "goalOtherAtPushSecs")
  //moet push of pul zijn, of een keuze maken waar ik dit zet in de template

  createProgression("Australian-pullups", "pull", "reps", "Muscle-up", "goalPullReps")
  createProgression("Banded-pullups", "pull", "reps", "Muscle-up", "goalPullReps")
  createProgression("Pullups", "pull", "reps", "Muscle-up", "goalPullReps")
  createProgression("High-pullups", "pull", "reps", "Muscle-up", "goalPullReps")

  createProgression("Australian-pullups", "pull", "reps", "One-arm-pullup", "goalPullReps")
  createProgression("Banded-pullups", "pull", "reps", "One-arm-pullup", "goalPullReps")
  createProgression("Pullups", "pull", "reps", "One-arm-pullup", "goalPullReps")
  createProgression("Archer-pullups", "pull", "reps", "One-arm-pullup", "goalPullReps")
  createProgression("Decline/reverse-one-arm-pullups", "pull", "reps", "One-arm-pullup", "goalPullReps")

  createProgression("pre-tuck-dragon-flag", "core", "secs", "Dragon-flag", "goalCoreSecs")
  createProgression("Tuck-dragon-flag", "core", "secs", "Dragon-flag", "goalCoreSecs")
  createProgression("Adv-tuck-dragon-flag", "core", "secs", "Dragon-flag", "goalCoreSecs")
  createProgression("One-leg-dragon-flag", "core", "secs", "Dragon-flag", "goalCoreSecs")
  createProgression("Super-adv-tuck-dragon-flag", "core", "secs", "Dragon-flag", "goalCoreSecs")
  createProgression("Halflay-dragon-flag", "core", "secs", "Dragon-flag", "goalCoreSecs")
  createProgression("Straddle-dragon-flag", "core", "secs", "Dragon-flag", "goalCoreSecs")

  createProgression("Full-planche", "push", "secs", "Planche-pushup", "goalPushSecs")
  createProgression("full-planche-to-bended-arm-planche", "push", "reps", "Planche-pushup", "goalPushReps")

  createProgression("Full-planche", "push", "secs", "Maltese", "goalPushSecs")
  createProgression("Wide-full-planche", "push", "secs", "Maltese", "goalPushSecs")
  createProgression("Banded-maltese", "push", "secs", "Maltese", "goalPushSecs")

  createProgression("Front-lever", "pull", "secs", "Front-lever-touch", "goalPullSecs")
  createProgression("Adv-tuck-front-lever-pullups", "pull", "reps", "Front-lever-touch", "goalPullReps")
  createProgression("Halflay-front-lever-touch-hold", "pull", "secs", "Front-lever-touch", "goalPullSecs")
  createProgression("Straddle-front-lever-touch-hold", "pull", "secs", "Front-lever-touch", "goalPullSecs")

  createProgression("Front-lever", "pull", "secs", "Victorian-cross", "goalPullSecs")
  createProgression("Front-lever-touch", "pull", "secs", "Victorian-cross", "goalPullSecs")
  createProgression("Wide-front-lever", "pull", "secs", "Victorian-cross", "goalPullSecs")

  createProgression("Seated-squats", "legs", "reps", "Pistol-squats", "goalLegsReps")
  createProgression("Squats", "legs", "reps", "Pistol-squats", "goalLegsReps")
  createProgression("Weighted-squats", "legs", "reps", "Pistol-squats", "goalLegsReps")
  createProgression("Assisted-pistol-squats", "legs", "reps", "Pistol-squats", "goalLegsReps")

// the basics
  createProgression("Incline-pushups", "push", "reps", "Shoulders", "pushBasicOne", "1")
  createProgression("Pushups", "push", "reps", "Shoulders", "pushBasicOne", "2")
  createProgression("Pseudo-pushups", "push", "reps", "Shoulders", "pushBasicOne", "3")
  createProgression("Pike-pushups", "push", "reps", "Shoulders", "pushBasicOne", "4")
  createProgression("Handstand pushups", "push", "reps", "Shoulders", "pushBasicOne", "5")

  createProgression("Australian-pullups", "pull", "reps", "Pull", "pullBasicOne", "1")
  createProgression("Banded-pullups", "pull", "reps", "Pull", "pullBasicOne", "2")
  createProgression("Chinups", "pull", "reps", "Pull", "pullBasicOne", "3")
  createProgression("Pullups", "pull", "reps", "Pull", "pullBasicOne", "4")
  createProgression("Weighted-pullups", "pull", "reps", "Pull", "pullBasicOne", "5")
  createProgression("Muscle-ups", "pull", "reps", "Pull", "pullBasicOne", "5")

  createProgression("Bench-dips", "push", "reps", "Dips", "pushBasicTwo", "2")
  createProgression("Dips", "push", "reps", "Dips", "pushBasicTwo", "3")
  createProgression("Weighted-dips", "push", "reps", "Dips", "pushBasicTwo", "5")

  createProgression("Bended-L-sit", "core", "secs", "Core", "coreBasicOneSecs", "1")
  createProgression("Sit-ups", "core", "reps", "Core", "coreBasicOneReps", "2")
  createProgression("Leg-raises", "core", "reps", "Core", "coreBasicOneReps", "3")
  createProgression("Hollow-body-hold", "core", "secs", "Core", "coreBasicOneSecs", "4")
  createProgression("Extended-hollow-body-hold", "core", "secs", "Core", "coreBasicOneSecs", "5")

  createProgression("Seated-squats", "legs", "reps", "Squats", "legsBasicOne", "1")
  createProgression("Squats", "legs", "reps", "Squats", "legsBasicOne", "2")
  createProgression("Assisted-pistol-squats", "legs", "reps", "Squats", "legsBasicOne", "4")
  createProgression("Pistol-squats", "legs", "reps", "Squats", "legsBasicOne", "5")
}


const arrayForNormalExercises = []

function createNormalExercise(name, type, repsOrSecs, difficulty, storage, storageToGetItFrom){
  let normalExercise = new NormalExercises(name, type, repsOrSecs, difficulty, storage, storageToGetItFrom);
  arrayForNormalExercises.push(normalExercise);
}
function createNormalExercises(){
  createNormalExercise("Incline-pushups", "push", "reps", "1", "normalExercisePushOne", "pushBasicOne")
  createNormalExercise("Pushups", "push", "reps", "2", "normalExercisePushOne", "pushBasicOne")
  createNormalExercise("Decline-pushups", "push", "reps", "3", "normalExercisePushOne", "pushBasicOne")
  createNormalExercise("Archer-pushups", "push", "reps", "4", "normalExercisePushOne", "pushBasicOne")
  createNormalExercise("One-arm-pushups", "push", "reps", "5", "normalExercisePushOne", "pushBasicOne")

  createNormalExercise("Tricep-push-downs", "push", "reps", "1", "normalExercisePushTwo", "pushBasicTwo")
  createNormalExercise("Tricep-push-downs", "push", "reps", "2", "normalExercisePushTwo", "pushBasicTwo")
  createNormalExercise("Diamond-pushups", "push", "reps", "3", "normalExercisePushTwo", "pushBasicTwo")
  createNormalExercise("Diamond-pushups", "push", "reps", "4", "normalExercisePushTwo", "pushBasicTwo")
  createNormalExercise("Weighted-diamond-pushups", "push", "reps", "5", "normalExercisePushTwo", "pushBasicTwo")

  createNormalExercise("Australian-chinups", "pull", "reps", "1", "normalExercisePullOne", "pullBasicOne")
  createNormalExercise("Australian-chinups", "pull", "reps", "2", "normalExercisePullOne", "pullBasicOne")
  createNormalExercise("Pullups-negatives", "pull", "reps", "3", "normalExercisePullOne", "pullBasicOne")
  createNormalExercise("Weighted-chinups", "pull", "reps", "4", "normalExercisePullOne", "pullBasicOne")
  createNormalExercise("Weighted-chinups", "pull", "reps", "5", "normalExercisePullOne", "pullBasicOne")

  createNormalExercise("Rows", "pull", "reps", "1", "normalExercisePullTwo", "pullBasicOne")
  createNormalExercise("Rows", "pull", "reps", "2", "normalExercisePullTwo", "pullBasicOne")
  createNormalExercise("Rows", "pull", "reps", "3", "normalExercisePullTwo", "pullBasicOne")
  createNormalExercise("Rows", "pull", "reps", "4", "normalExercisePullTwo", "pullBasicOne")
  createNormalExercise("Rows", "pull", "reps", "5", "normalExercisePullTwo", "pullBasicOne")

  createNormalExercise("Jumpsquats", "legs", "reps", "1", "normalExerciseLegsOne", "legsBasicOne")
  createNormalExercise("Jumpsquats", "legs", "reps", "2", "normalExerciseLegsOne", "legsBasicOne")
  createNormalExercise("Jumpsquats", "legs", "reps", "3", "normalExerciseLegsOne", "legsBasicOne")
  createNormalExercise("Jumpsquats", "legs", "reps", "4", "normalExerciseLegsOne", "legsBasicOne")
  createNormalExercise("Jumpsquats", "legs", "reps", "5", "normalExerciseLegsOne", "legsBasicOne")
  createNormalExercise("Bulgarian-splitsquats", "legs", "reps", "1", "normalExerciseLegsTwo", "legsBasicOne")
  createNormalExercise("Bulgarian-splitsquats", "legs", "reps", "2", "normalExerciseLegsTwo", "legsBasicOne")
  createNormalExercise("Bulgarian-splitsquats", "legs", "reps", "3", "normalExerciseLegsTwo", "legsBasicOne")
  createNormalExercise("Bulgarian-splitsquats", "legs", "reps", "4", "normalExerciseLegsTwo", "legsBasicOne")
  createNormalExercise("Bulgarian-splitsquats", "legs", "reps", "5", "normalExerciseLegsTwo", "legsBasicOne")

  createNormalExercise("mountainclimbers?", "core", "reps", "1", "normalExerciseCoreOne", "coreBasicOneReps")
  createNormalExercise("mountainclimbers?", "core", "reps", "2", "normalExerciseCoreOne", "coreBasicOneReps")
  createNormalExercise("mountainclimbers?", "core", "reps", "3", "normalExerciseCoreOne", "coreBasicOneReps")
  createNormalExercise("mountainclimbers?", "core", "reps", "4", "normalExerciseCoreOne", "coreBasicOneReps")
  createNormalExercise("mountainclimbers?", "core", "reps", "5", "normalExerciseCoreOne", "coreBasicOneReps")

  createNormalExercise("Plank", "core", "secs", "1", "normalExerciseCoreTwo", "coreBasicOneSecs")
  createNormalExercise("Plank", "core", "secs", "2", "normalExerciseCoreTwo", "coreBasicOneSecs")
  createNormalExercise("Plank", "core", "secs", "3", "normalExerciseCoreTwo", "coreBasicOneSecs")
  createNormalExercise("Plank", "core", "secs", "4", "normalExerciseCoreTwo", "coreBasicOneSecs")
  createNormalExercise("Plank", "core", "secs", "5", "normalExerciseCoreTwo", "coreBasicOneSecs")
}


// All Placesnames in the table
const AllTablePlacesArray = [
    "goalPushReps", 
    "goalPushSecs",
    "goalOtherAtPushReps",
    "goalOtherAtPushSecs",
    "specificGoalExerciseOnePushReps", 
    "specificGoalExerciseOnePushSecs", 
    "specificGoalExerciseTwoPushReps", 
    "specificGoalExerciseTwoPushSecs", 
    "specificGoalExerciseThreePushReps", 
    "specificGoalExerciseThreePushSecs", 
  
    "goalPullReps", 
    "goalPullSecs", 
    "goalOtherAtPullReps", 
    "goalOtherAtPullSecs", 
    "specificGoalExerciseOnePullReps", 
    "specificGoalExerciseOnePullSecs", 
    "specificGoalExerciseTwoPullReps", 
    "specificGoalExerciseTwoPullSecs", 
    "specificGoalExerciseThreePullReps", 
    "specificGoalExerciseThreePullSecs", 
  
    "goalLegsReps", 
    "goalLegsSecs", 
    "goalCoreReps", 
    "goalCoreSecs", 
    "specificGoalExerciseOneLegsReps", 
    "specificGoalExerciseOneLegsSecs", 
    "specificGoalExerciseTwoLegsReps", 
    "specificGoalExerciseTwoLegsSecs", 
    
    "specificGoalExerciseOneCoreReps", 
    "specificGoalExerciseOneCoreSecs", 
    "specificGoalExerciseTwoCoreReps", 
    "specificGoalExerciseTwoCoreSecs", 
  
    "pushBasicOne", 
    "pushBasicTwo",
    "pullBasicOne", 
    "coreBasicOneReps", 
    "coreBasicOneSecs", 
    "legsBasicOne",
  
    "normalExercisePushOne",
    "normalExercisePushTwo",
    "normalExercisePullOne",
    "normalExercisePullTwo",
    "normalExerciseLegsOne",
    "normalExerciseLegsTwo",
    "normalExerciseCoreOne",
    "normalExerciseCoreTwo"
  ]


  function localStorageClear() {
    localStorage.length;
    window.localStorage.clear();
    localStorage.length;
  }
  
  function localStorageGetItem(key) {
    localStorage.length;
    const item = window.localStorage.getItem(key);
    localStorage.length;
    return item;
  }
  
  function localStorageSetItem(key, item) {
    localStorage.length;
    window.localStorage.setItem(key, item);
    localStorage.length;
  }
  
  function localStorageRemoveItem(key) {
    localStorage.length;
    window.localStorage.removeItem(key);
    localStorage.length;
  }