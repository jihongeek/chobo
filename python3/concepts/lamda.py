# lambda 키워드로 짜는 파이썬 익명 함수

# 일반적인 함수는 "이름"이 있다!  
def max(a,b):
    return a > b
print("그냥 함수",max(2,1)) # True

# 하지만 익명 함수는 말 그대로 이름이 없다! 
# 요런식으로 바로 람다 함수식을 괄호로 묶은 뒤에 매개변수를 넣어주면 호출이 된다.   
print("익명함수",(lambda a,b : a>b)(2,1)) # True

# 물론 요렇게 변수를 이용해서 이름을 지어줄 수 있다.
maxLambda = lambda a,b : a>b 
print("그냥 함수",maxLambda(2,1)) # True

# 아마 인수로 함수가 들어가는 map() 등과 함께 사용하면 유용할 거 같다.