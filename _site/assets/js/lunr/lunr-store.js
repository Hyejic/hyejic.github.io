var store = [{
        "title": "github.io 블로그 첫 포스팅입니다",
        "excerpt":"제목  테스트입니다.  ","categories": ["js"],
        "tags": ["javascript"],
        "url": "/js/firstpost/",
        "teaser": null
      },{
        "title": "Markdown 기본 문법",
        "excerpt":"제목(header) #의 갯수로 제목의 레벨 결정 h1 ~ h6 # 제목 1 ## 제목 2 ### 제목 3 #### 제목 4 ##### 제목 5 ###### 제목 6 문장(Paragraph) 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 줄바꿈(Line Breaks) 동해물과 백두산이 마르고 닳도록...","categories": ["md"],
        "tags": ["Markdown"],
        "url": "/md/markdown/",
        "teaser": null
      },{
        "title": "04장 변수",
        "excerpt":"04장 변수 4.1 변수란 무엇인가? 왜 필요한가? 변수란? 변수는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 멤모리 공간을 식별하기 위해 붙인 이름이다. var userId = 1; var userName = 'Lee'; // 객체나 배열 같은 자료구조를 사용하면 여러개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다. var user...","categories": ["js"],
        "tags": ["javascript"],
        "url": "/js/modernJS04/",
        "teaser": null
      },{
        "title": "06장 데이터 타입",
        "excerpt":"06장 데이터 타입 구분 데이터 티입 설명 원시 타입 숫자 타입(number) 숫자, 정수와 실수 구분 없이 하나의 숫자 타입만 존재 문자열 타입(string) 문자열 불리언 타입(boolean) 논리적 참(true)과 거짓(false) undefined 타입 var 키워드로 선언된 변수에 암묵적으로 할당되는 값 null 타입 값이 없다는 것을 의도적으로 명시할 때 사용하는 값 실벌 타입(symbol) ES6에...","categories": ["js"],
        "tags": ["javascript"],
        "url": "/js/modernJS06/",
        "teaser": null
      },{
        "title": "09장 타입 변환과 단축 평가",
        "excerpt":"09장 타입 변환과 단축 평가 9.1 타입 변환이란? 개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환 또는 타입 캐스팅이라 한다. var x = 10; // 의도적으로 x의 값의 타입을 string으로 변경 var str = x.toString(); console.log(typeof str, str) // string 10 console.log(typeof x, x) // number 10 개발자의 의도와는...","categories": ["js"],
        "tags": ["javascript"],
        "url": "/js/modernJS09/",
        "teaser": null
      },{
        "title": "10장 객체 리터럴",
        "excerpt":"10장 객체 리터럴 10.1 객체란? 자바스크립트는 객체 기방의 프로그래밍 언어이며, 자바스크립트를 구성하는 거ㅣ “모든 것”이 객체다. 다양한 타입의 값을 하나의 단위로 구성한 복합적인 자료구조다. 객체는 프로퍼티와 메서드로 구성된 집합체다. 프로퍼티 : 객체의 상태를 나타내는 값(data) 메서드 : 프로퍼티상태 데이터를 참조하고 조작할 수 있는 동작(behavior) var counter = { num :...","categories": ["js"],
        "tags": ["javascript"],
        "url": "/js/modernJS10/",
        "teaser": null
      },{
        "title": "11장 원시 값과 객체의 비교",
        "excerpt":"11장 원시 값과 객체의 비교 자바스크립트가 제공하는 데이터 타입은 크게 원시타입과 객체 타입으로 구분할 수 있다. 원시 값은 변경 불가능한 값이고 객체는 변경 가능한 값이다. 11.1 원시 값 11.1.1 변경 불가능한 값 원시 값은 변경 불가능한 값, 즉 읽기 전용 값이다. 어떤일이 있어도 불변한다. 원시 값 자체를 변경할 수 없다는...","categories": ["js"],
        "tags": ["javascript"],
        "url": "/js/modernJS11/",
        "teaser": null
      },{
        "title": "12장 함수",
        "excerpt":"12장 함수 12.1 함수란? 일련의 과정을 문으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것이다. 함수 내부로 입력을 전달받는 변수를 매개변수, 입력을 인수, 출력을 반환겂이라 한다. 특정 함수를 구별하기 위해 식별자인 함수 이름을 사용할 수 있다. 함수는 함수 정의를 통해 생성되고, 인수를 매개변수를 통해 함수에 전달하면서 함수의 실행을 명시적으로...","categories": ["js"],
        "tags": ["javascript"],
        "url": "/js/modernJS12/",
        "teaser": null
      },{
        "title": "13장 스코프",
        "excerpt":"13장 스코프 13.1 스코프란? 모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다. 이를 스코프라 한다. 즉, 스코프는 식별자가 유효한 범위를 말한다. var x = 'global'; function foo() { var x = 'local'; console.log(x); } foo(); console.log(x);...","categories": ["js"],
        "tags": ["javascript"],
        "url": "/js/modernJS13/",
        "teaser": null
      },{
        "title": "14장 전역 변수의 문제점",
        "excerpt":"14장 전역 변수의 문제점 14.1 변수의 생명 주기 14.1.1 지역 변수의 생명 주기 변수는 자신이 선언된 위치에서 생성되고 소멸한다. 함수 내부에서 선언한 변수는 함수가 호출된 직후에 함수 몸체의 코드가 한 줄씩 순차적으로 실행되기 이전에 자스크립트 엔진에 의해 먼저 실행된다. 즉, 지역변수의 생명주기는 함수의 생명 주기와 일치한다. 변수는 메모리공간에 저장 되었다가...","categories": ["js"],
        "tags": ["javascript"],
        "url": "/js/modernJS14/",
        "teaser": null
      },{
        "title": "15장 let, const 키워드와 블록 레벨 스코프",
        "excerpt":"15장 let, const 키워드와 블록 레벨 스코프 15.1 var 키워드로 선언한 변수의 문제점 15.1.1 변수 중복 선언 허용 var 키워드로 선언한 변수는 중복 선언이 가능하다. var x = 1; var y = 1; // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용 // 초기화 문이 있는 경우 자바스크립트...","categories": ["js"],
        "tags": ["javascript"],
        "url": "/js/modernJS15/",
        "teaser": null
      },{
        "title": "16장 프로퍼티 어트리뷰트",
        "excerpt":"16장 프로퍼티 어트리뷰트 16.1 내부 슬롯과 내부 메서드 내부 슬롯과 매부 메서드는 자바스크립트 엔진의 구현 알고리즘을 설명하기 위해 ECMAScript 사양에서 사용하는 의사 프로퍼티와 의사 메서드다. 모든 객체는 [[Prototype]]이라는 내부 슬롯을 갖는다. 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 원칙적으로 직접 접근할 수 없지만 [[Prototype]] 내부 슬록의 경우, proto 를 통해 간접적으로...","categories": ["js"],
        "tags": ["javascript"],
        "url": "/js/modernJS16/",
        "teaser": null
      }]
