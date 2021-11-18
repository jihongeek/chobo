const app = Vue.createApp({
    data() { // data 옵션 : $data로 컴포넌트에 저장
        // 편의상 최상위 속성 (요기에서는 questionIdx) 참조 가능 
        return {
            title : '제목없음',
            questionIdx : 0,
            questions : [
                "잔잔하고 감성적인 음악 VS 신나는 음악?",
                "공부나 일을 할 때 음악을 들으면서 하는 편인가요?",
                "잔잔하고 감성적인 음악 VS 신나는 음악?",
            ]
        }
    },
    methods : { // 메소드s 객체
        increment() // 자동으로 this 바인딩 so 화살표 함수 X
        {
            this.questionIdx++
        }
    },
    computed : {
        /* 
            메소드와 차이 : 반응형 종속성에 기반하여 캐시됨 -> 
            관련된 data의 속성이 바뀌지 않았으면 그냥 원래 계산값을 바로 반환
        */
        hasQuestion(){
            return this.questions.length > 0 ? '있음' : '없음' // data의 questions 속성과 종석적 관계를 선언적으로
        },
        titleOfList : {
            // 기본은 getter 이지만 setter도 설정 가능
            get() { return this.title},
            set(newTitle) { this.title = newTitle }
        }
    }
})

const vm = app.mount("#app")
console.log(vm.questionIdx === vm.$data.questionIdx) // true

vm._hello =  1 // 내부 속성 정의 -> 추적 O
vm.hello = 0 // 추적X
