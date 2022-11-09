// window.setTimeout(함수, 지연시간(ms))
const btn1 = document.getElementById("btn1");

// document.getElementById("btn1").addEventListener("click", function(){
btn1.addEventListener("click", function(){


    // 이벤트 핸들러에서의 this == 이벤트가 발생한 html 요소

    //  0초(클릭하자마자)
    this.style.backgroundColor = "red";


    
    //  3초 후 orange로 변경
    window.setTimeout(function(){
        
        // window.setTimeout()에서의 this == window 객체
        
        
        // console.log(this);
        btn1.style.backgroundColor = "orange";
    }, 3000);
    
    console.log("중간에 출력");

    // 6초 후 yellow로 변경
    // window.setTimeout(함수, 지연시간)
    window.setTimeout(function(){
        btn1.style.backgroundColor = "yellow";
    }, 6000);
        
    // 9초 후 green로 변경
    // window.setTimeout(함수, 지연시간)
    window.setTimeout(function(){
        btn1.style.backgroundColor = "green";
    }, 9000);

});


// 현재 시간을 반환하는 함수
function currentTime(){
    const now = new Date(); // 현재 시간 정보를 저장하고 있는 객체 생성

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    // 3초 -> 03초로 나오게끔 
    // 얻어온 시간 값이 10미만일 경우 앞에 0추가
    if(hour < 10) hour = "0" + hour;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;

    return hour + " : " + min + " : " + sec;
}

const clock = document.getElementById("clock");
// 페이지가 로딩 되자마자 #clock에 현재 시간을  출력하도록 하는 함수 출력


clock.innerText = currentTime(); 


  // #clock에 1초마다 현재 시간을 출력하도록하는 코드
const interval = window.setInterval(function(){
    clock.innerText = currentTime();
}, 1000);

// window.clearInterval(setInerval()이 저장된 변수)
document.getElementById("stop").addEventListener("click", function(){

    window.clearInterval(interval);

});




