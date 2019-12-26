// ┏┓　　　┏┓
// ┏┛┻━━━┛┻┓
// ┃　　　　　　　┃ 　
// ┃　　　━　　　┃
// ┃　┳┛　┗┳　┃
// ┃　　　　　　　┃
// ┃　　　┻　　　┃
// ┃　　　　　　　┃
// ┗━┓　　　┏━┛
// ┃　　　┃ 神兽保佑　　　　　　　　
// ┃　　　┃ 代码无BUG！
// ┃　　　┗━━━┓
// ┃　　　　　　　┣┓
// ┃　　　　　　　┏┛
// ┗┓┓┏━┳┓┏┛
// ┃┫┫　┃┫┫
// ┗┻┛　┗┻┛
$(function(){
    // 公共楼层轮播设置
    $("#floorBanner1,#floorBanner2,#floorBanner3").tyslide({
        boxh: 338,//盒子的高度
        w: 424,//盒子的宽度
        h: 338,//图片的高度
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
    $("#floorBanner4,#floorBanner5,#floorBanner6").tyslide({
        boxh: 338,//盒子的高度
        w: 424,//盒子的宽度
        h: 338,//图片的高度
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

     // 服装楼层标题滑动切换效果
     $("#cloth .floorTitle ul>li").mouseover(function(){        
        // 当前标题添加active其他标题移出active
        $(this).addClass("active").siblings().removeClass("active");
        // 获取索引
        let index = $(this).index();

        // 让对应列表显示
        $("#cloth .floorRgihtList").eq(index).removeClass("hide").siblings(".floorRgihtList").addClass("hide");
    })

    // 户外楼层标题滑动切换效果
    $("#outdoor .floorTitle ul>li").mouseover(function(){        
        // 当前标题添加active其他标题移出active
        $(this).addClass("active").siblings().removeClass("active");
        // 获取索引
        let index = $(this).index();

        // 让对应列表显示
        $("#outdoor .floorRgihtList").eq(index).removeClass("hide").siblings(".floorRgihtList").addClass("hide");
    })

    // 童装楼层标题滑动切换效果
    $("#child .floorTitle ul>li").mouseover(function(){        
        // 当前标题添加active其他标题移出active
        $(this).addClass("active").siblings().removeClass("active");
        // 获取索引
        let index = $(this).index();

        // 让对应列表显示
        $("#child .floorRgihtList").eq(index).removeClass("hide").siblings(".floorRgihtList").addClass("hide");
    })

    // 共用大轮播板块
    //配置轮播的参数
    $(".bannerBig").tyslide({
        boxh: 430,//盒子的高度
        w: 1000,//盒子的宽度
        h: 400,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 20,//控制按钮高度
        radius: 10,//控制按钮圆角度数
        controlsColor: "#ccc",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
        isNumber: true //是否需要数字
    });

})

