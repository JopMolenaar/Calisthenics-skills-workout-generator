// this is an exercise 


class Exercise {

  name;
  type;
  matchingExercises;
  repsOrSecs;
  selected;
  storage;

  constructor(name, type, matchingExercises, repsOrSecs, storage) {
    this.name = name;
    this.type = type;
    this.repsOrSecs = repsOrSecs || [];
    this.matchingExercises = matchingExercises || [];
    this.selected = false;
    this.storage = storage || [];
  }

  printExcercise(){
      // console.log(`Name: ${this.name}, type: ${this.type}, matchingExercises: ${this.matchingExercises}, repsOrSecs: ${this.repsOrSecs}`);
  }

  selectBoxName(){
    return `${this.name.split("-").join(" ")}`
  }
}

