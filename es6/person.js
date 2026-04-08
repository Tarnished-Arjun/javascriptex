class Person {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  describe() {
    console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`);
  }
}

class Teacher extends Person {
  constructor(id, name, email, subject) {
    super(id, name, email); 
    this.subject = subject;
  }

  teaches() {
    console.log(`Teacher ${this.name} teaches ${this.subject}`);
  }

  describe() {
    console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Subject: ${this.subject}`);
  }
}


let t1 = new Teacher(2472177, "Arjun", "arjunkrishna@gmial.com", "AIML");

t1.describe(); 
t1.teaches();