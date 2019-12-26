$(function () {
    // 进入页面首先刷新数据
    reSet();

    // 全选的互动事件
    $(".checkAll").click(function () {
        // 把自身的checked状态交给每一个checkbox
        // 获取当前状态
        let check = $(this).prop("checked");
        // console.log(check);
        // 将所有的checkbox赋予当前的属性值
        $(".checkAll,.checkSingle").prop("checked", check);
        // 更新数据
        reSet();
    })

    // 单选与全选的关系事件
    $(".checkSingle").click(function () {
        // 设置全选标杆---true代表全选
        let flag = true;
        // 获取所有的checkSingle,的状态并打印出来
        $(".checkSingle").each(function () {
            // 获取当前的checkSingle的checked属性值
            let check = $(this).prop("checked")
            // console.log(check);
            // 判断当前选项的checked
            if (!check) {
                flag = false;
            }
        })
        // 判断标杆确定是否全选
        if (flag) {
            $(".checkAll").prop("checked", true);
        } else {
            $(".checkAll").prop("checked", false);
        }
         // 更新数据
         reSet();
    })
    // +事件
    $("#carList>.inBox>.Lists .numberBar>li:last-child").click(function () {
        // 获取当前单元格对应的数量值------string
        let val = $(this).prev().find("input").val();
        // 将获取的值+1
        val = parseInt(val) + 1;
        // console.log(val);
        // 将改变后的值，放回input里面去
        $(this).prev().find("input").val(val);

        // 改变小计
        // 获取单价
        let money = $(this).parents("li").prev().html();
        // 计算小计
        let count = val * parseFloat(money)
        // 放入小计显示
        $(this).parents("li").next().html(count);
         // 更新数据
         reSet();
    })
    // -事件
    $("#carList>.inBox>.Lists .numberBar>li:first-child").click(function () {
        // 获取当前单元格对应的数量值------string
        let val = $(this).next().find("input").val();
        // 判断当前值是否为1-----isNaN
        if (parseInt(val) <= 1) {
            val = 1;
        } else {
            // 将获取的值-1
            val = parseInt(val) - 1;
        }
        // console.log(val);
        // 将改变后的值，放回input里面去
        $(this).next().find("input").val(val);

        // 改变小计
        // 获取单价
        let money = $(this).parents("li").prev().html();
        // 计算小计
        let count = val * parseFloat(money)
        // 放入小计显示
        $(this).parents("li").next().html(count);
         // 更新数据
         reSet();
    })
    // 保存上次输入内容
    let oldVal = "";
    $("#carList>.inBox>.Lists .numberBar>li:nth-child(2)>input").focus(function () {
        // 保存上次的值
        oldVal = $(this).val();
    })

    //手动添加数字事件
    $("#carList>.inBox>.Lists .numberBar>li:nth-child(2)>input").blur(function () {
        // 获取当前输入内容
        let val = parseInt($(this).val()) ;
        console.log(val);
        //判断是否为纯数字
        // console.log(isNaN(val));    
        if (!isNaN(val)) {
            // 判断数字是否大于1
            if (val >= 1) {
                $(this).val(val);
                // 改变小计
                // 获取单价
                let money = $(this).parents(".box41").prev().html();
                // 计算小计
                let count = val * parseFloat(money)
                // 放入小计显示
                $(this).parents(".box41").next().html(count);
                 // 更新数据
                reSet();
            } else {
                val = oldVal
                $(this).val(val);
            }
        } else {
            val = oldVal
            $(this).val(val);
        }

    })



    // 更新数据
    function reSet(){
        //设置总数量
        let allNum = 0;
        // 设置总小计
        let allCount = 0;
        // 循环累加相应的值
        $(".Lists").each(function(){
            // 判断当前是否被选中，选中再计算
            if($(this).find(".checkSingle").prop("checked")){
                 // 获取当前的数量累加给allnum
                 allNum += parseInt($(this).find(".num").val()) ;
                //  获取总小计
                allCount +=parseFloat($(this).find(".box51").html())
            }
        }) 
        // 将获取的值放入指定的地方显示
        $("#allCount .allNum").html(allNum);
        $("#allCount .allCount").html(allCount.toFixed(2))
    }

    // 单个删除
    $(".box61>p:first-child").click(function(){
        // 找寻当前父级并删除
        $(this).parents(".Lists").remove();
        // 更新数据
        reSet();
    })
    // 删除选中商品
    $("#allCount .leftContent .contentLeft>span:last-child").click(function(){
        // 获取所有列表的checkbox
        $(".checkSingle").each(function(){
            // 获取当前这个checkbox的选中状态
            let check = $(this).prop("checked")
            // 判定如果为true就删除
            if(check){
                $(this).parents(".Lists").remove();
                // 更新数据
                reSet();
            }
        })
    })


})