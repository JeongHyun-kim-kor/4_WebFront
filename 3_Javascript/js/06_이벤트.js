
// 인라인 이벤트 모델 확인하기
function fnTest1(btn){
    console.log(btn.style); // 요소에 적용할 수 있는 css속성 확인

    // JS로 요소에 CSS 지정시
    // inline형식으로 CSS코드가 추가된다.
    btn.style.color = "white";
    btn.style.backgroundColor ="black";
    btn.style.cursor = "pointer";
}

// 고전 이벤트 모델
// 요소가 가지고 있는 이벤트 리스너 속성(변수)에 
// 직접 함수(이벤트 핸들러)를 대입하는 방법
document.getElementById("btn1").onclick = function(){
    alert("버튼이 클릭됨");

    // 고전/표준 이벤트모델 장점
    // -> 이벤트 제거거가 가능

    //요소의 속성중 on이벤트명 속성에 대ㅅㄴ 함수 대신 null을 대입하여
    //이벤트 삭제(변수에 값을 새로 대입하여 )

    document.getElementById("brn1").onmouseout = null;
}

// 하나의 요소에 여러 이벤트 추가 가능
document.getElementById("btn1").onmouseover = function(){
    // 마우스가 요소 위로 올라왓을때

        document.getElementById("btn1").style.backgroundColor="red";
}

document.getElementById("btn1").onmouseout = function(){
    // 마우스가 요소 밖으로 나갔을 때

        document.getElementById("btn1").style.backgroundColor="yellow";
}

// 고전 이벤트 모델의 단점
// - 한요소에 동일한 이벤트 리스터에 대한 
// 다수의 이벤트 핸들러를 작성할 수 없다.
// 마지막으로 대입된 이벤트 핸들러만 적용
// -> 해결 방법 : 표준 이벤트 모델

document.getElementById("btn1").onclick = function(){
    alert  ("새로운 이벤트 처리 방법");
}


// 표준 이벤트 모델
const btn2 = document.getElementById("btn2");

// btn2.addEventListener("이벤트명", 함수);

btn2.addEventListener("click", function(){ //익명함수 쓰는것이 다반사

    // 이벤트 핸들러 내부에 작성된this == 이벤트가 발생한 요소(버튼)
    console.log(this);

    this.style.backgroundColor = "pink";
    this.style.border = "3px solir black";
    this.style.padding = "10px";
    this.style.display = "block";
}); 

// 고전 이벤트 모델 단점(덮어쓰기) 보완 확인
btn2.addEventListener("click", function(){
    this.style.fontSize="30px";
    this.style.fontWeight="bold";
    this.style.fontFamily="궁서";

});



// 배경색이 입력한 값으로 변하는 박스

document.getElementById("input1").addEventListener("keyup", function(){

    // 박스 요소 선택
    const div1 = document.getElementById("div1");

    // 배경색 변경
    div1.style.backgroundColor = this.value;


})