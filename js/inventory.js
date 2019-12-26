//窗口加载事件
$(function(){
    //收货人信息点击事件
    $(".consignee .innerTitle").on("click","span",function(){
        $(this).siblings().removeClass("actives");
        $(this).addClass("actives");
        console.log(111);
        
    })
    //支付方式点击事件
    $(".payBox").on("click","span",function(){
        $(this).siblings().removeClass("actives");
        $(this).addClass("actives");
    })
    //提交按钮蒙层及跳转
    $("#btn").on("click",function(){
        $("#mask").show();
        $("#info").show();
    })
    $(".close").on("click",function(){
        $("#mask").hide();
        $("#info").hide();
    })



})