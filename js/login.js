$(function(){
    // 登录框二维码动画事件
    $("#content .loginBox>.loginContent").hover(function(){
        // 二维码移动到左侧，显示电话图片
        $(this).find("img:first-child").stop(true).animate({"left":"0px"},500,function(){
            $("#content .loginBox>.loginContent>.inContant>div>img:last-child").stop(true).fadeIn(300);
        });
    },function(){
        // 隐藏电话图片，二维码移动到中间
        $(this).find("img:first-child").next().stop(true).fadeOut();
        $(this).find("img:first-child").stop(true).animate({"left":"90px"},500);
    })

    //登陆框
    $("#content .loginBox .user>input").keyup(function(){
        // 获取input value值
        let vel=$(this).val();
        if(vel.length===0){
            // vel值等于0时给del添加隐藏
            $("#content .loginBox .user>.del").hide();
        }else{
            // 不等于0时给del移除隐藏
            $("#content .loginBox .user>.del").show();
        }
        // 点击del input框velue值为空 自身隐藏
        $("#content .loginBox .user>.del").click(function(){
            $("#content .loginBox .user>input").val("");
            $(this).hide();
        })
    })
    // 密码框
    $("#content>.wrapper>.loginBox>.loginContent>.password>input").keyup(function(){
        let vel=$(this).val();
        console.log(234 )
        if(vel.length==0){
            $("#content .loginBox .password>.del").hide();
        }else{
            $("#content .loginBox .password>.del").show();
        }
        // 点击del input框velue值为空 自身隐藏
        $("#content .loginBox .password>.del").click(function(){
            $("#content .loginBox .password>input").val("");
            $(this).hide();
        })
    })

    //标题点击切换效果
    $("#content .loginBox .loginTitle>span").click(function(){
        // 当前标题添加active其他标题移出active
        $(this).addClass("active").siblings().removeClass("active");
        // 获取索引
        let index = $(this).index();

        // 让对应列表显示
        $("#content .loginBox>.loginContent").eq(index).removeClass("hide").siblings(".loginContent").addClass("hide")
    })
})