var Person = require('./person.js')

function Student(name, age, klass) {
    // 继承属性
    Person.call(this, name, age);
    this.klass = klass;
}
//继承方法
Student.prototype = new Person();
Student.prototype.construtor = Student;
Student.prototype.introduce = function() {
    return 'My name is ' + this.name + '. I am ' + this.age + ' years old.' + ' I am a Student. I am at Class ' + this.klass + '.';
}
module.exports = Student