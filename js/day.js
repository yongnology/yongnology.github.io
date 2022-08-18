window.onload = function() {
var itemList=[];
    var addButton=document.querySelector("#add");
    var input=document.querySelector("#item");
    input.addEventListener("keydown", function(e) {
        if(e.keyCode==13) {
            addList();
        }
    });
    addButton.addEventListener("click", addList);

    function addList() {
        var item = document.querySelector("#item").value;
        if(item !== "") {
            itemList.push(item);                            // itemList에 배열 요소를 추가
            document.querySelector("#item").value="";       // 입력 후 내용 삭제
            document.querySelector("#item").focus();        // 검색창으로 포커스.
            showList();
        } else {
            alert("내용 입력 후 추가를 눌러주세요");
        }
    }

    function showList() {
        var list="<ul>";
            for(var i =0; i<itemList.length; i++) {
                list += "<li>" + itemList[i] + 
                    "<span class='close' id="+i+">X</spna></li>";
            }
            list += "</ul>";
            document.querySelector("#itemList").innerHTML=list;
            var remove = document.querySelectorAll(".close");
            for(var i=0; i<remove.length; i++) {
                remove[i].addEventListener("click", removeList);
            }
    }
    function removeList() {
        var id=this.getAttribute("id");
        itemList.splice(id,1);
        showList(); // 변경된 itemList 배열을 다시 화면에 표시
        document.querySelector("#item").focus();        // 검색창으로 포커스.
    }
    setClock();
    setInterval(setClock, 1000)
}
