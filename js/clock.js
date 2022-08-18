window.addEventListener("load",function() {
    clockRun();
});

function clockRun() {
    var d = new Date();

    var s = d.getSeconds();
    var s_angle = s *6 // 1초가 6도
    var s_angle_value = "rotate(" + s_angle + "deg)";
    document.getElementById("second").style.transform = s_angle_value;
    
    var m = d.getMinutes();
    var m_angle = m *6 // 1초가 6도
    var m_angle_value = "rotate(" + m_angle + "deg)";
    document.getElementById("minute").style.transform = m_angle_value;
    
    var h = d.getHours();

    var y = d.getFullYear();
    var m = d.getMonth()+1;
    var d = d.getDate();

    // 오전 오후 구분해서 계산(13시 등으로 숫자가 커짐)

    // 경우1) 오전
    if(h<12) {
        var h = h;

    // 경우2) 오후
    } else {
        var h = h -12;
    }
    
    // 5회 X 1분 x 6도 = 30도
    // 시간당 30도
    
    // 예: 4시
    // 120도
    
    // 예시 4시 30분
    // 120도 + 15도(30도 / 60분 * 30분)
    
    // 예: 4시 45분
    // 120도 + 22.5도(30도 / 60분 * 45분)

    var h_angle = (h * 30) + (30 / 60 * m)
    var h_angle_value = "rotate(" + h_angle + "deg)";
    document.getElementById("hour").style.transform = h_angle_value;

    setTimeout(clockRun, 1000)
}
function setClock() {
        var d = new Date();
    
        var s = d.getSeconds();
        var m = d.getMinutes();
        var h = d.getHours();
    
        var y = d.getFullYear();
        var mm = d.getMonth()+1;
        var da = d.getDate();

        document.getElementById("date").innerHTML =y + "년 " + mm + "월 " + da + "일";
        document.getElementById("time").innerHTML =h + " : " + m /*+ " : " + s*/;
        document.getElementById("sec").innerHTML ="&nbsp: "+s;
}
function modifyNumber(time) {
    if(parseInt(time)<10){
        return "0" + time;
    } else 
        return time;
}

window.onload = function() {
    setClock();
    setInterval(setClock, 1000)
}
