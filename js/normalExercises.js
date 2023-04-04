class  NormalExercises{

    name;
    type;
    repsOrSecs;
    difficulty;
    storage;
  
    constructor(name, type, repsOrSecs, difficulty, storage, storageToGetItFrom) {
      this.name = name;
      this.type = type;
      this.repsOrSecs = repsOrSecs;
      this.difficulty = difficulty;
      this.storage = storage;
      this.storageToGetItFrom = storageToGetItFrom;
  
    }
  
    printProgression(){
        // console.log(`Name: ${this.name}, type: ${this.type}, repsOrSecs: ${this.repsOrSecs} parent: ${this.parent}`);
    }
  
    selectBoxName(){
      return `${this.name.split("-").join(" ")}`
    }
  }
  