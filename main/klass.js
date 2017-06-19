/*实现类和继承*/
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.introduce = function() {
    return 'My name is ' + this.name + '. I am ' + this.age + ' years old.'
}

function Student(name, age, klass) {
    // 继承属性
    Person.call(this, name, age);
    this.klass = klass;
}
//继承方法
Student.prototype = new Person();
Student.prototype.construtor = Student;
Student.prototype.introduce = function() {
    return 'My name is ' + this.name + '. I am ' + this.age + ' years old.' + 'I am at Class ' + this.klass;
}
module.exports = {
    Student,
    Person
}