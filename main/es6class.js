//采用es6实现的类与继承
//感觉es6的类与继承更像java了
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return 'My name is ' + this.name + '. I am ' + this.age + ' years old.'
    }
}
class Student extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }
    introduce() {
        return 'My name is ' + this.name + '. I am ' + this.age + ' years old.' + 'I am at Class ' + this.klass;
    }
}
module.exports = {
    Student
}