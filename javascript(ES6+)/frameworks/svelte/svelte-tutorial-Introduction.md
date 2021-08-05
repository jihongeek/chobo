# 스벨트 공홈 튜토리얼 1.Introduction

## Basics

* 스벨트는 빠른 웹 어플리케이션을 만들기위한 툴!

* Vue와 React랑 비슷함 하지만 스벨트는 빌드 타임에서 **앱을 이상적인 자바스크립트 코드로 바로 바꿔줌(컴파일)**  : 빠르다는 이야기
* 스벨트에서 앱은 하나이상의 컴포넌트로 이루어져 있는데 컴포넌트는 그냥 html, css, javascript 코드 블록이고, .svelte에 저장함

## Adding data

```html
<h1> 안녕~! </h1>
```

요거도 평범한 html 같겠지만 .svelte 파일안에 있으면 컴포넌트임 

그냥 안녕~! 만 출력하는 건 재미없으니깐 이름을 출력해보자!

```html
<script>
	let name = '스벨트'
</script>
<h1>안녕~! {name}</h1>
```

요거 처럼 중괄호 안에 자바스크립트를 넣으면 html에 딱 들어감.  

## Dynamic attributes

텍스트만 되는거 아니냐고? 천만에 말씀! 만만에 콩떡!

요번엔 html 속성도 바꿔 볼꺼임

```html
<h1 style = "color:white"> 어떤 색으로 칠할 지 고민중...</h1>
```

```html
<script>
	let color = 'magenta'
</script>

<h1 style = "color:{color}"> 어떤 색으로 칠할 지 고민중... {color}로 하자!</h1>
```

만약에 자바스크립트 변수이름이랑 속성이름이 같으면 요렇게도 할 수 있어!

```html
<script>
	let style = 'color:magenta'
</script>

<h1 {style}> 어떤 스타일로 할 지 고민중... {style}로 하자!</h1>
```

 



