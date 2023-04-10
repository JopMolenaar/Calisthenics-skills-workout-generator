class Progression {

    name;
    type;
    repsOrSecs;
    parent;
    storage;
    warmup;
  
    constructor(name, type, repsOrSecs, parent, storage, difficulty, warmup) {
      this.name = name;
      this.type = type;
      this.repsOrSecs = repsOrSecs;
      this.parent = parent;
      this.storage = storage;
      this.difficulty = difficulty;
      this.warmup = warmup;
  
    }
  
    printProgression(){
        // console.log(`Name: ${this.name}, type: ${this.type}, repsOrSecs: ${this.repsOrSecs} parent: ${this.parent}`);
    }
  
    selectBoxName(){
      return `${this.name.split("-").join(" ")}`
    }
  }
  
  