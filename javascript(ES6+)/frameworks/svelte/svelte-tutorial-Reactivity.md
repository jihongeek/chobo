# 스벨트 공홈 튜토리얼 2.Reactivity

## 요약

* Reactivity : 스벨트는 값(=상태=state)이 바뀌면 자동으로 DOM을 업데이트 해줌  

## $ : 값이 바뀌는 변수 OR 그 변수가 들어간 식 

```html
<script>
	let count = 0;
	$ : doubled = count * 2 // count 값이 바뀔 때 마다 double에 count*2 값 할당
	const incrementCount = () => {count += 1} // count를 1씩 증가시키는 함수 
</script>

<button on:click={incrementCount}>
	Clicked {count} {count === 1 ? 'time' : 'times'}, doubled count is {doubled}
</button>

```

요로코롬 변수 값이 바뀔 때 (할당을 통해) 관련 값이 관련 변수에 할당하거나

```html
<script>
	let count = 0;
	$ : if (count > 0) alert(`${count*2}`) // count 값이 바뀔 때 마다 count > 0 이면 count*2 값 alert!
	const incrementCount = () => {count += 1} // count를 1씩 증가시키는 함수 
</script>

<button on:click={incrementCount}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

```

값이 바뀌는 변수와 관련된 문장(들)도 실행할 수 있다.

**바뜨.** 값이 변경 된다는 것은 **할당('=')만 해당**한다는 것을 명심하자

그 예로 Array.push()등과 같은 메소드를 사용해도 $ : 이 실행되지 않는다. (그렇기 때문에 비구조화 할당을 통한 추가나 '='을 사용해서 다시 할당을 해줘야한다.)

당연히 객체들도 마찬가지다. 프로퍼티등을 업데이트 할꺼면 이름[] = 꼴로 해주는게 편할 것 같다. 

```html
<script>
 let numbers = [0];
 $ : numbers
 function pushNum() {
	numbers = [...numbers,numbers.length]
	// numbers.push(numbers.length) -> 백날 numbers 값이 바뀌어도 밑에 버튼 텍스트 0
 }
</script>
<button on:click = {pushNum}>
	{numbers}
</button>
```

위 코드가 그 예시이다.