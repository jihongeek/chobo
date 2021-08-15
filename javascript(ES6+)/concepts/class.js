// 자바스크립트 클래스에 대하여!
// 자바스크립트의 클래스 : ES6 부터 추가된 prototype 기반의 상속에 대한 문법적 기능

// Cat 클래스 
class Cat {
  // 생성자 : 객체를 생성할 때 객체의 필드 값등을 초기화하는 함수
  constructor(name,color) {
    this.name = name;
    this.color = color;
  }
  // 생성자를 사용하지 않고 필드에 값을 할당
  _age = 0;
  meow() {
    console.log(`나는 ${this.name} 이다냥!`);
  }
}

// Cat 클래스를 이용해서 객체 생성
const nero = new Cat('Nero','black');
console.log(nero.name);
console.log(nero.color);
nero.meow();

// 상속과 다형성
// 클래스 상속을 통해서 상위 클래스의 필드,메소드를 하위 클래스에서 사용할 수 있게됨
class Fossa extends Cat {}
const fossandra = new Fossa('fossandra','brown');
console.log(fossandra.name)
console.log(fossandra.color)
fossandra.meow()
// 함수 오버라이딩을 통한 다형성 : 하나의 객체가 여러가지 클래스의 객체가 되는 것
class Lion extends Cat {
  meow() {
    // 상위 클래스(Cat)의 meow() 호출
    super.meow()
    console.log(`어흥! 나는 ${this.name}다.`)    
  }
}
const simba = new Lion('Simba','light brown'); // Lion 과 Cat의 객체
simba.meow();
// getter 와 setter : set 할 때는 변수처럼 get 할 때는 함수처럼
class CatWithAge extends Cat {
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
}
const kitty = new CatWithAge('kitty','pink');
kitty.age = 1;
console.log(kitty.age); 

// static : 특정 필드,메소드가 클래스 자체 붙어있다는 뜻
class CatWithSpec extends CatWithAge {
  static spec(object) {
    console.log(`
    이름 : ${object.name}
    색깔 : ${object.color}
    나이 : ${object._age}
    `)
  }  
}
const alex = new CatWithSpec('Alex','light brown');
alex.age = 5
CatWithSpec.spec(alex)