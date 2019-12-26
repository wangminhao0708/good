$(function(){
    // 热销榜手风琴效果
    $(".asideBanner>.rightBox>ul>li").mouseover(function(){
        // 鼠标移入，当前style1显示，style2隐藏
        $(this).find(".hotList1").removeClass("hide");
        $(this).find(".hotList2").addClass("hide");
        // 其它同级元素style1隐藏，style2显示
        $(this).siblings().find(".hotList1").addClass("hide");        
        $(this).siblings().find(".hotList2").removeClass("hide");
        // 当前移除active其他兄弟级添加active
        $(this).removeClass("active");
        $(this).siblings().addClass("active");
    })

    // 新书推荐右侧排行榜手风琴效果
    $("#newBook .boxRight>ul>li").mouseover(function(){
        // 鼠标移入，当前style1显示，style2隐藏
        $(this).find(".style1").removeClass("hide");
        $(this).find(".style2").addClass("hide");

        // 其它同级元素style1隐藏，style2显示
        $(this).siblings().find(".style1").addClass("hide");
        $(this).siblings().find(".style2").removeClass("hide");
    })

    // 独家提供翻页效果
    // 标题事件
    $("#only>.productTitle>ul>li").click(function(){
        // 当前添加active其他兄弟级移除active
        $(this).addClass("active").siblings().removeClass("active");
        //获取索引
        let index=$(this).index();
         // 让列表对应的内容显示
         $("#only>.onlyProduct>.longBox").stop(true).animate({"left":-(index*1200)},500);
        //  下部翻页对应索引添加active其他兄弟级移除active
         $("#only>.page>li").eq(index).addClass("active").siblings().removeClass("active");
    })
    // 下部翻页事件
    $("#only>.page>li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        //获取索引
        let index=$(this).index();
         // 让列表对应的内容显示
         $("#only>.onlyProduct>.longBox").stop(true).animate({"left":-(index*1200)},500);
         //  上部标题对应索引添加active其他兄弟级移除active
         $("#only>.productTitle>ul>li").eq(index).addClass("active").siblings().removeClass("active");
    })
})