// functionality
// get a single record from data store

// get a set of records from data store => specify size of set
class CardRepository {
  constructor() {
    this._db = null;

    this._promiseToOpen = this._promiseToOpen.bind(this);
  }

  open() {
    return new Promise(this._promiseToOpen);
  }

  _promiseToOpen(resolve, reject) {
    let openRequest = window.indexedDB.open('QuizMe', 2);
    openRequest.onsuccess = (event) => {
      this._db = event.target.result;
      this._db.onerror = (event) => {
        console.log(event.target.errorCode);
      }
      resolve({ status: 'success' });
    }
    openRequest.onerror = (event) => {
      reject({ status: 'error', error: event });
    }
    openRequest.onupgradeneeded = this._handleUpgrade;
  }

  _handleUpgrade(event) {
    let db = event.target.result;

    let createStoreRequest = db.createObjectStore("questions", { autoIncrement: true });
    createStoreRequest.createIndex("showAfter", "showAfter", { unique: false })
    createStoreRequest.transaction.oncomplete = (event) => {
      const questionStore = db.transaction("questions", "readwrite").objectStore("questions");
      testData.forEach(question => {
        questionStore.add(question);
      });
    }

  }

  getCards(numToTake = 1) {
    return new Promise((resolve, reject) => {
      if (!this._db) reject({ error: "Database doesn't exist" });

      let questions = [];
      let objectStore = this._db.transaction("questions").objectStore("questions");
      let index = objectStore.index('showAfter');

      index.openCursor().onsuccess = (event) => {
        let cursor = event.target.result;

        if (cursor && numToTake > questions.length) {
          questions.push({ id: cursor.primaryKey, ...cursor.value });
          cursor.continue();
        } else {
          resolve(questions);
        }
      }
    });
  }
}

const _cardRepository = _cardRepository || new CardRepository();

export default _cardRepository;

const testData = [{
  topic: "C++",
  type: "multiple-answer",
  text: "What are the correct ways to initialize a variable?",
  answers: ["int i = 10;", "auto i = 4.0;"],
  choices: ["var i int8 = 0", "var i = 20;", "i = 0"],
  showAfter: Date.now() - 1
}, {
  topic: "C++",
  type: "multiple-choice",
  text: "What variable initialization causes a compiler error if var2 is a larger data type?",
  answers: ["int var1{ var2 };"],
  choices: ["int var1 = var2;"],
  showAfter: Date.now() - 2
}, {
  topic: "C#",
  type: "multiple-choice",
  text: "What is the data type and value of var1 after the assignment: var1 = 7/2.0",
  answers: ["double, 3.5"],
  choices: ["int, 3", "int, 4", "double, 3.0"],
  showAfter: Date.now() - 3
}, {
  topic: "C#",
  type: "multiple-choice",
  text: "What is the data type and value of var1 after the assignment: var1 = 7/2",
  answers: ["int, 3"],
  choices: ["double, 3.5", "int, 4", "double, 3.0"],
  showAfter: Date.now() - 4
}, {
  topic: "C#",
  type: "multiple-choice",
  text: "What is the data type and value of var1 after the assignment: var1 = (double)(7/2)",
  answers: ["double, 3.0"],
  choices: ["double, 3.5", "int, 4", "int, 3"],
  showAfter: Date.now() - 5
}, {
  topic: "C#",
  type: "short-answer",
  text: "Write a statement which will allow use of all System.Console functions without having to write System.Console.x",
  answers: ["using static System.Console;"],
  showAfter: Date.now() - 6
}];