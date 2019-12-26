//窗口加载事件
window.onload = function(){
    //定义一个全局对象遍历来验证每一项的真假穿给最后的注册按钮
    var obj={username:false, pwd:false, twoPwd:false, telephone:false};



    //用户名验证
    $("form p .username").on("input",function(){
        console.log(111);
        if($(this).val().length<2){
            obj.username = false
            $(this).closest("p").css("border","1px solid #f00")
        }else{
            obj.username = true;
            $(this).closest("p").css("border","1px solid #0f0")
        }
    })
    //密码验证
    $("form p .pwd").on("input",function(){
        console.log(111);
        if($(this).val().length<6){
            obj.pwd = false
            $(this).closest("p").css("border","1px solid #f00")
        }else{
            obj.pwd = true;            
            $(this).closest("p").css("border","1px solid #0f0")
        }
    })
    //二次密码验证
    $("form p .twoPwd").on("input",function(){
        console.log(111);
        if($(this).val().length<6 || $(this).val()!=$(".pwd").val()){
            obj.twoPwd = false            
            $(this).closest("p").css("border","1px solid #f00")
        }else{
            obj.twoPwd = true                    
            $(this).closest("p").css("border","1px solid #0f0")
        }
    })
    //验证手机
    $("form p .telephone").on("input",function(){
        var reg=/^1[356789]\d{9}$/;
        if( !reg.test( $(this).val())){
            obj.telephone = false       
            $(this).closest("p").css("border", "1px solid #f00")
        }else{
            obj.telephone = true            
            $(this).closest("p").css("border", '1px solid #0a0');
        }
    })
    //最后的立即注册按钮验证
    //是针对的form的事件
    $("form").on("submit",function(){
        for (var i in obj) {
            if (obj[i]==false) {
                $("."+i).closest("p").css("border", "1px solid #f00")
                return false;
            }else{
                return true;
            }
        }
        
    })



















}