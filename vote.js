function submitvote(event) {
    var checkstatus = event.parentNode.parentNode.getElementsByTagName('input');
    var vote=event.parentNode.parentNode.getElementsByTagName("ul");
    var fraction_count = 0;
    var is_all=0;
    for (var i = 0; i < checkstatus.length; i++) {
        if (checkstatus[i].checked) {
            is_all++;
            value = checkstatus[i].value
            fraction_count = parseInt(value) + fraction_count
        }
    }
    if(is_all==vote.length){
        window.localStorage.setItem("fraction_count",fraction_count);
        var url = "result.html"
        // window.location.href=url;
        window.location.replace(url);
    }else {
        alert("请填写完整才可提交哦")
    }

}
