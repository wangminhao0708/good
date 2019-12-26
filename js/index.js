$(function () {
    // 侧边菜单和轮播
    // 侧边菜单的互动效果
    $("#asideBanner .aside>ul>li").hover(function () {
        // 显示二级菜单
        $(this).find(".twoAside").toggleClass("hide");
        // 给一级菜单添加样式
        $(this).find("p").toggleClass("active");
    }, function () {
        // 隐藏二级菜单
        $(this).find(".twoAside").toggleClass("hide");
        // 给一级菜单移出样式
        $(this).find("p").toggleClass("active");
    })

    // 电子书
    //配置轮播的参数
    $("#ebookBanner1,#ebookBanner2,#ebookBanner3").tyslide({
        boxh: 217,//盒子的高度
        w: 331,//盒子的宽度
        h: 217,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 5,//控制按钮高度
        radius: 0,//控制按钮圆角度数
        controlsColor: "#fff",//普通控制按钮的颜色
        controlsCurrentColor: "#333333",//当前控制按钮的颜色
        isNumber: false //是否需要数字
    });
    // 标题滑动切换效果
    $("#eBook .leftBox>.leftTitle>ul>li").mouseover(function(){        
        // 当前标题添加active其他标题移出active
        $(this).addClass("active").siblings().removeClass("active");
        // 获取索引
        let index = $(this).index();

        // 让对应列表显示
        $("#eBook .leftBox>.bottomList").eq(index).removeClass("hide").siblings(".bottomList").addClass("hide");
    })

    // 右侧排行榜手风琴效果
    $("#eBook .boxRight>ul>li").mouseover(function(){
        // 鼠标移入，当前style1显示，style2隐藏
        $(this).find(".style1").removeClass("hide");
        $(this).find(".style2").addClass("hide");

        // 其它同级元素style1隐藏，style2显示
        $(this).siblings().find(".style1").addClass("hide");
        $(this).siblings().find(".style2").removeClass("hide");
    })
    // 商品推荐
    // 鼠标移入添加背景
    $("#goods .outBox>.inBox>.singleBox>.singleList").hover(function(){
        // 当前添加active
        $(this).addClass("active")
    },function(){
        // 当前移除active
        $(this).removeClass("active")        
    })

    // 点击滚动切换选项卡
    $("#goods .floorTitle>ul>li").click(function(){
        // 本身添加active，其他移除active
        $(this).addClass("active").siblings().removeClass("active")
        // 获取索引进行判断
        let index = $(this).index();
        if(index==0){
            // 列表进行移动
            $("#goods .outBox>.inBox").stop(true).animate({"marginLeft":"0px"},1000);
        }else{
            // 列表进行移动
            $("#goods .outBox>.inBox").stop(true).animate({"marginLeft":"-1190px"},1000)
        }
        
    })
    //图片回到顶部
    $(".footer>.footTop .footGoTop>img").click(function(){
        $("html,body").stop(true).animate({"scrollTop":"0px"},500);
    })

    // 监听浏览器滚动条
    $(window).scroll(function(){
        // 获取滚动条数值
        let scroll = $("html,body").scrollTop();
        // 判断数值达到500以上显示副标题否则隐藏副标题
        if(scroll<500){
            $("#searchTwo").stop(true).slideUp(function(){
                $("#searchTwo .barLeft").appendTo($(".searchBar .wrapper"));
            });

            // 楼层导航隐藏
            $("#floorNav").stop(true).fadeOut(100);
        }else{
            // 将原有的搜索框组件放入新的位置
            $(".searchBar .barLeft").appendTo($("#searchTwo .wrapper"));
            $("#searchTwo").stop(true).slideDown();
            // 楼层导航显示
            $("#floorNav").stop(true).fadeIn(100);
        }
    })

    // 楼层导航事件
    let arr =["#91d56e","#f55826","#bb9fee","#fe7594","#c2ed51","#ff6600","#91d56e","#f55826"]
    $("#floorNav>ul>li").hover(function(){
        // 替换颜色
        // 获取索引
        let index = $(this).index();
        // 替换颜色
        $(this).find("div,p").css("backgroundColor",arr[index]);

        // 让p标签显示
        $(this).find("p").stop(true).animate({"left":"40px"},500);
    },function(){
        // 还原颜色
        $(this).find("div,p").css("backgroundColor","#f2f2f2");
         // 让p标签隐藏
         $(this).find("p").stop(true).animate({"left":"0px"},500);
    })
    // 楼层跳转事件
    $("#floorNav ul>li:not(:last-child) p").click(function(){
        // 获取索引
        let index = $(this).parent().index();
        console.log(index);
        // 获取当前元素的纵坐标
        let top =  $(".navfloor").eq(index).offset().top;
        console.log(top);
        // 设置滚动条高度
        $("html,body").stop(true).animate({"scrollTop":top},1000);
    })
    $("#floorNav>ul>li:last-child p").click(function(){
        $("html,body").stop(true).animate({"scrollTop":"0px"},1000);
    })
    // $("#tTop").click(function(){
    //     $("html,body").stop(true).animate({"scrollTop":"0px"},1000);
    // })

    //领券二维码显示事件
    $("#preferential>img:nth-child(2)").hover(function(){
        //鼠标移入移除隐藏
        $("#preferential>img:nth-child(3)").removeClass("hide")
    },function(){
        //鼠标移出添加隐藏
        $("#preferential>img:nth-child(3)").addClass("hide");
    })


})