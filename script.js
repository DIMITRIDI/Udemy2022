'use strict';

class Rectangle {
   constructor(height, width) { // height, width получаем из сервера
      this.height = height;
      this.width = width;
   }

   calcArea() { // метод calcArea для подсчета площади
      return this.height * this.width;
   }
}

const square = new Rectangle(10, 10); // в переменной square лежит объект, в котором свойства (height, width) и метод calcArea
const long = new Rectangle(20, 100); // создадим еще одну фигуру - прямоугольник

console.log(square.calcArea());
console.log(long.calcArea());

// Принципы объектно-ориентированного программирования:
// 1.	Абстракция – отделение концепции от ее экземпляра. (шаблон и экземпляры)
// 2.	Наследование – способность нашего объекта (класса) базироваться на другом объекте (классе).

class ColoredRectangleWithText extends Rectangle { // extends - наследование от класса Rectangle
   constructor(height, width, text, bgColor) {
      super(height, width); // super - вызывает суперконструкор родителя (всегда на 1 строке в конструкторе)
      this.text = text;
      this.bgColor = bgColor;
   }

      showMyProps() {
      console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
   }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello', 'red');

div.showMyProps();
console.log(div.calcArea());
