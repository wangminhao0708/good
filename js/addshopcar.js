//窗口加载事件
window.onload=function(){
    //放大镜插件
    var magnifierConfig = {
		magnifier : "#magnifier1",//最外层的大容器
		width : 340,//承载容器宽
		height : 350,//承载容器高
		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 5//缩放比例
	};

	var _magnifier = magnifier(magnifierConfig);

	/*magnifier的内置函数调用*/
	/*
		//设置magnifier函数的index属性
		_magnifier.setIndex(1);

		//重新载入主图,根据magnifier函数的index属性
		_magnifier.eqImg();
	*/



    //种类选择的交互效果
    //获取到对应事件源
    $(".rightbox .lastBox>p span").on("click",function(){
        //控制台打印测试
        console.log(1111);
        //this在这指代的是函数源对象,此处对应的是span,除开点击的span标签,其他兄弟span移除active类名
        $(this).siblings().removeClass("activer");
        //给点击的span标签添加一个active类名
        $(this).addClass("activer");
    });
    //数量加减交互效果
    //获取到事件源
    //自增加法
    $(".rightbox .lastBox .letter").on("click","span:first-child",function(){
        console.log(111);
        let number = $(".rightbox .lastBox .letter").html()
        console.log(".rightbox .lastBox .letter");
        number = parseInt(number);
        number++;
        // $(".rightbox .lastBox .letter").html(number);
        if(number>=99){
            number = 99;
        }
        $(".rightbox .lastBox .letter").html(number+"<span>+</span> <span>-</span>");
       
    });
    //自增减法
    $(".rightbox .lastBox .letter").on("click","span:last-child",function(){
        console.log(111);
        let number = $(".rightbox .lastBox .letter").html()
        console.log(".rightbox .lastBox .letter");
        number = parseInt(number);
        number--;
        // $(".rightbox .lastBox .letter").html(number);
        if(number<=1){
            console.log(11);
            number = 1;
         }
        $(".rightbox .lastBox .letter").html(number+"<span>+</span> <span>-</span>");
    })
    //商品切换
    $(".bookBox  .rightBox .oneBox span").on("click",function(){
       $(this).siblings().removeClass("on");
       $(this).addClass("on");
       let index=$(this).index();
       console.log(index);
        $(".comment").hide();
        $(".bookBox>.bookCont .rightBox>.comment").eq(index-1).show();
    })
    //提交按钮事件
    $(".spanBox").on("click",function(){
        console.log(111);
        //点击加入购物车按钮,让背景灰色蒙层显示
        $("#mask").show();
        //点击加入购物车按钮,让弹出框也显示
        $("#info").show();
    })
    //在弹出框显示的情况下在给X按钮和取消按钮绑定事件
    $(".close").on("click",function(){
        console.log(111);
        //让背景蒙层隐藏
        $("#mask").hide();
        //让弹出框同时隐藏
        $("#info").hide();
        //返回一个结果值为false中止跳转,因为默认跳转为true,所以在这不用判定,只需要判定为假的情况下阻止跳转就行
        return false;
    })




}