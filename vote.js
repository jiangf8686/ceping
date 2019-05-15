/*
统计选择的情况
在1—9题中选择了6个或多于6个“经常”或“总是”，
结果可评估为注意力缺陷主导型；在10～18题中选择了6个或多于6个“经常”或“总是”，
结果可评估为多动或冲动主导型；如果同时符合注意力缺陷和多动或冲动主导型的评估条件，则被评估为混合型。
*/
function submitvote(event) {
    var checkstatus = event.parentNode.parentNode.getElementsByTagName('input');
    var vote=event.parentNode.parentNode.getElementsByTagName("ul");
    var fraction_count = 0;
    var is_all=0;//统计总的选择数量，必现全部选择完才可以提交
    var count_1_9=0;//统计1到9题的选择经常总是的个数
    var count_10_18=0;//统计10到18题的选择经常总是的个数
    for (var i = 0; i < checkstatus.length; i++) {
        if (checkstatus[i].checked) {
            is_all++;
            value = checkstatus[i].value
            var value_shoose=parseInt(value);
            if(is_all<=9){
                //前9题的选择经常总是则加1
                if(value_shoose===1){
                    count_1_9++;
                }
            }else {
                //后9题的选择情况
                if(value_shoose===1){
                    count_10_18++;
                }
            }
        }
    }
    alert("count_1_9="+count_1_9);
    alert("count_10_18="+count_10_18);
    if(count_1_9<6 && count_10_18<6){
        fraction_count=0;//
    }else if(count_1_9>=6&&count_10_18<6){
        fraction_count=1;//
    }else if(count_1_9<6&&count_10_18>=6){
        fraction_count=2;//
    }else {
        fraction_count=3;//
    }
    if(is_all===vote.length){
        window.localStorage.setItem("fraction_count",fraction_count);
        var url = "result.html"
        // window.location.href=url;
        window.location.replace(url);
    }else {
        alert("请填写完整才可提交哦")
    }

}
