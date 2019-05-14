function show(event) {
    var result=window.localStorage.getItem("fraction_count");
    if(parseFloat(result)>=5&&parseFloat(result)<10){
        alert("情况11111分数为"+result);
        var ele=event.getElementById("show_result");
        ele.innerHTML="情况11111分数为"+result;
    }else {
        alert("情况22222分数为"+result);
        var ele=event.getElementById("show_result");
        ele.innerHTML="情况22222分数为"+result;
    }
}