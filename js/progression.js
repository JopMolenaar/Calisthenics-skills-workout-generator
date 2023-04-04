class Progression {

    name;
    type;
    repsOrSecs;
    parent;
    storage;
  
    constructor(name, type, repsOrSecs, parent, storage, difficulty) {
      this.name = name;
      this.type = type;
      this.repsOrSecs = repsOrSecs;
      this.parent = parent;
      this.storage = storage;
      this.difficulty = difficulty;
  
    }
  
    printProgression(){
        // console.log(`Name: ${this.name}, type: ${this.type}, repsOrSecs: ${this.repsOrSecs} parent: ${this.parent}`);
    }
  
    selectBoxName(){
      return `${this.name.split("-").join(" ")}`
    }
  }
  
  