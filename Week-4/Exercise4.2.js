function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayName = function() {
    console.log(`My name is ${this.name}`);
  };
  
  function Teacher(name) {
    Person.call(this, name);
  }
  
  Teacher.prototype = Object.create(Person.prototype);
  Teacher.prototype.constructor = Teacher;
  
  Teacher.prototype.teach = function(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
  };
  
  // Usage example:
  const teacher = new Teacher('Mr. Smith');
  teacher.sayName(); // Output: My name is Mr. Smith
  teacher.teach('Math'); // Output: Mr. Smith is now teaching Math
  