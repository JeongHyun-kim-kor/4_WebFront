
// Node 확인하기
document.getElementById("btn1").addEventListener("click" , function(){
    ////부모
    // 요소.parentnode : 요소의 부모 노드를 탐색하여 반환

    ////자식
    // 요소.childNodes : 요소의 자식 노드를 모두 반환(NodeList 형태) <유사배열 형태>
    // 요소.firstChild : 요소의 첫번째 자식 노드 탐색해서 반환
    // 요소.lastChild : 요소의 마지막 자식 노드 탐색해서 반환

    // 요소.childNodes[인덱스] : 인덱스 번째 자식 노드를 탐색해서 반환

    ////형제
    //요소.previousSibling : 요소의 이전 형제 노드 반환
    //요소.nextSibling : 요소의 다음 형제 노드 반환


    // #test의 자식 노드를 모두 얻어와서 확인
    const testNodeList = document.getElementById("test").childNodes;
    console.log(testNodeList);

    // 노드 탐색
})