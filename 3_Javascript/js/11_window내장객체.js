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