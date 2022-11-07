
//배열 확인
const btn1 = document.getElementById("btn1").addEventListener("click", function(){

    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = new Array('사과', '딸기', '바나나');

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);

    // 배열에 존재하지 않는 인덱스에 값 대입
    // -> 자동으로 추가되면서 길이 증가 + 자료형 상관X
    arr1[0] = "김밥";
    arr1[1] = 5000;
    arr1[2] = true;

    // 중간 인덱스 건너뛰면, 건너 뛴 부분은 empty로 남음
    arr1[5] = 111; // 추가가능
    console.log(arr1);

// for문으로 배열 요소 반복 접근하기

    // 1. 일반 for문 - 배열, 컬렉션
    // for(let i=0 ; i<arr4.length ; i++){
    //     console.log(arr4[i]);
    // }

    // 2. 배열.forEach(function(item,index){ 반복 수행 코드 }) : 배열에만 사용 가능
    // - item : 현재 접근중인 요소
    // - index : 현재 인덱스
    // 배열이 아니므로 forEach()문을 쓸 숭 없다.
    // arr4.forEach(function(a, i){
    //     console.log(i + " : " + a);
    // })

    // 3. for(item of 배열(또는 컬렉션)){} - 배열, 컬렉션
    //   (Symbol.iterator가 존재하는 객체에 사용 가능)
    // == JAva 향상된 for문과 비슷
    for(let item of arr4){

        console.log(item);
    }

    // li 태그에 작성된 값 얻어와서 합 구하기
    // const list = document.getElementsByTagName("li");  // HTMl Collection
    const list = document.querySelectorAll("#test > li"); // NodeList 

    let sum = 0;
    for(let item of list){

        sum += Number(item.innerText);
                // 문자열 -> 숫자
    }

    console.log("sum : " + sum);



    // 4. for(let key in 객체) - JS객체용 for문
});


// 배열 관련 함수 확인
document.getElementById("btn2").addEventListener("click", function(){

    // 비어있는 배열 생성 
    const arr = [];  // == new Array()

    // 배열.push(값) : 배열 마지막 요소로 추가
    arr.push("초밥");
    arr.push("우육면");
    arr.push("쌀국수");
    arr.push("삼겹살");

    // 배열.toString() : 배열 요소 사이에 ,를 추가한 문자열로 반환
    console.log(arr.toString()); // toString() 생략 가능

    // 배열.pop() : 배열의 마지막 요소를 꺼내와 반환
    const temp = arr.pop(); // 마지막요소("삽겸살")를 꺼내와 temp 요소에 대입
    console.log("arr : " + arr.toString());
    console.log("temp :" + temp);

    // 배열.indetOf("겂") : 일치하는 값을 가진 요소의 inde를 반환
    //                     없으면 -1 반환
    console.log("초밥 인덱스 : " + arr.indexOf("초밥"));
    console.log("갈비가 arr에 포함되어 있는가 ? : " 
        + (arr.indexOf("갈비")) != -1 ); 

    // 배열.sort() :배열내 요소를 오름차순으로 정렬(문자열 기준 ,가,나,다순서)
    console.log(arr.sort());



    // 숫자 정렬의 문제점과 해결 방법
    const numArr = [5,3,2,10,1]; // 오름차순 정렬  : 1,2,3,5,10
    // console.log(numArr.sort()); // 1 10 2 3 5 // 문자열 기준 정렬 : 
    console.log(numArr.sort( function(a,b){return a-b;} ));
    // -> 숫자 기준 정렬 : 1,2,3,5,10


    // * sort()함수는 원본 배열의 순서를 정려함
    // -> 원본 훼손 발생
    console.log(numArr);

    // 배열.join("구분자")
    console.log(numArr.join("//"));
    

});

// 로또 번호 생성
Document.getElementById("btn3").addEventListener("click", function(){

    const lotto = []; //빈 배열
    while(lotto.length <6 ){ // ㅂ열 요소가 6개 미만이면 반복
        const ran = Math.floor(Math.random() * 45 + 1) ; // 1~45난수
        
        // 중복검사
        if(lotto.indexOf(ran) == -1) {// 배열에 난ㅅ ㅜ 값이 없다면
            lotto.push(ran); // 마지막 요소로 추가
        }

    }
    lotto.sort(function(a,b) {return(a-b)});
    console.log("로또번호 : " + lotto);
});