const ListRendering = {
    data() { // 컴포넌트 인스턴스 속성 중 하나 -> 사용자 정의 속성과 구별 -> $ 붙히기
        return { 
            questions : [
                { 
                    id : 1,
                    text : "잔잔하고 감성적인 음악 VS 신나는 음악?",
                    yes : "잔잔하고 감성적인 음악",
                    no : "신나는 음악"
                },
                { 
                    id : 2,
                    text : "공부나 일을 할 때 음악을 들으면서 하는 편인가요?",
                    yes : "네 당연하죠!",
                    no : "아니요."
                },
                { 
                    id : 3,
                    text : "나만 알던 노래가 유명해져서 모두가 듣고 있으면 잘 안듣게 된다.",
                    yes : "맞다",
                    no : "아니다"
                },
            ],
            type : "ListRendering",
            titleHtml : "<h1>Music Taste MBTI! 📀</h1>"
        }
    },
    created() { // 라이프사이클 훅! : 컴포넌트 인스턴스가 생성될 때 실행 : 오 생성자 느낌인데?
        console.log(this.type+" 컴포넌트 인스턴스 만들어짐!") 
        console.log(this.$data)
    }
}


Vue.createApp(ListRendering) // ListRendering 옵션은 루트 컴포넌트를 구성하는데 사용, mount할 때 시작점
.component('question-item', {
    props : ['text'],
    template : `<li> {{text}} </li>` 
})
.mount('#question-box')