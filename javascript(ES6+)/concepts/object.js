// 자바스크립트 객체에 대하여!
// 객체는 데이터(프로퍼티)와 함수(메소드)로 이루어져 있다.

// 객체 리터럴 : 클래스를 사용하지 않고 컨텐트를 그대로 대입해서 만들어진 객체
let cat = {
    name : 'Nero',
    color : 'black',
    meow : function() {
        console.log('야옹~!')
    },
    eat : function (food) {
        console.log('먹는다. 그은드을지 므르...')
    }
}

// 점 표기법
console.log(`내 이름은 ${cat.name}`)
cat.meow()
cat.eat('츄르')

// 괄호 표기법
console.log(`내 이름은 ${cat['name']}`)
cat['meow']()
cat['eat']('츄르')

// 객체 멤버 설정
cat['name'] = '나옹'
console.log(`내 이름은 ${cat.name}`)
cat.name = 'Simba'
console.log(`내 이름은 ${cat['name']}`)

// 랩배틀의 diss가 아니라 this!
// 코드를 가지고있는 객체를 가르기는 this! 
cat.meow = function() {
    console.log(`나의 이름은 ${this.name}다! 야옹~!`)
} 
cat.meow()
