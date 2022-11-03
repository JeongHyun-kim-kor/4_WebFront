const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const result = document.getElementById("result");
// if(num1 == 0 || num2 == 0) {
//     alert('0을 넣을 수 없습니다.');

// }

function plus(){
    // console.log(num1.value);
    // console.log(num2.value);
    // result = document.getElementById("result");
    // console.log(Number(num1.value)+ Number(num2.value));
    // if(num1 = 0 || num2 = 0) {
    //     window.alert('0을 넣을 수 없습니다.');
    result.innerText = (Number(num1.value)+ Number(num2.value));

    
}

function minus(){
    // console.log(Number(num1.value) - Number(num2.value));
    result.innerText = (Number(num1.value) - Number(num2.value));

}

function multiple(){
    result.innerText = (Number(num1.value) * Number(num2.value));
 
}

function division(){
    
    result.innerText = (Number(num1.value) / Number(num2.value));

}

function mod(){
    result.innerText = (Number(num1.value) % Number(num2.value));

}