// 부모 클래스 정의하기
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name}이(가) 소리를 냅니다.`);
    }
  }
  
  // 자식 클래스 정의하기
  class Cat extends Animal {
    constructor(name) {
      super(name);
    }
  
    speak() {
      console.log(`${this.name}이(가) 유미궁.`);
    }
  
    fetch() {
      console.log(`${this.name}이(가) 냥냥펀치.`);
    }
  }
  
  // 객체 생성하기
  const cat = new Cat("유미");
  cat.speak(); // 뽀삐이(가) 멍멍..
  cat.fetch(); // 뽀삐이(가) 공을..