$(function(){
	$("#hd-log").click(function(){
		if($(".hd-left").html() == "账号密码登录"){
			$(this).find("a").html("账号密码登录");
			$(".hd-left").html("手机验证登录");
			$("#fm").css("display","none");
			$("#fm2").css("display","block");
		}else if($(".hd-left").html() == "手机验证登录"){
			$(this).find("a").html("手机验证登录");
			$(".hd-left").html("账号密码登录");
			$("#fm").css("display","block");
			$("#fm2").css("display","none");
		}
		return false;
	})
	$("#span").click(function(){
		$(this).html(getCode());
	})
	
	if($.cookie("phoneNumber")){
		$("#phone").val($.cookie("phoneNumber"));
		$("#pass").val($.cookie("password"));
	}
	$("#login").click(function(){
		
		if($("#phone").val() == "13800138000" && $("#pass").val() == "123456"){
			$.cookie("phone2", $("#phone").val());
			alert("登录成功");
			
			//alert($("#keep-log").get(0).className);
			if($("#keep-log").get(0).className){
				$.cookie("phoneNumber",$("#phone").val(),{expires:10})
				$.cookie("password",$("#pass").val(),{expires:10})
			}
			window.location = "index.html";
		}else{
			alert("您输入的账号或密码有误")
		}
 	})
	
	
	$("#keep-log").toggle(function(){
		$("#keep-log").css("background-image","url(img/checked.png)").css("background-size","cover").addClass("ckecked");
	},function(){
		$("#keep-log").css("background-image","url(img/no-checked.jpg)").removeClass();
	})
	
//	$(".phone").blur(function(){
//		if(!/^[1][34578][0-9]{9}$/.test($(this).get(0).value)){
//			alert("请输入正确的手机号");
//		}
//	})
	$("#login2").click(function(){
		//alert($("#pass2").val());
		//alert($("#span").html());
		if(!/^[1][34578][0-9]{9}$/.test($(".phone1").get(0).value)){
			$(".tishi").css("display", "block");
		}else if($("#pass2").val() == $("#span").html()){
			$(".tishi").css("display", "none");
			$.cookie("phone1", $(".phone1").val());
			alert("登录成功");
			window.location = "index.html";
		}else{
			alert("验证码错误");
		}
		
	})
	
//	$("#foget").click(function(){
//		$("#popup").css("display","block");
//	})
})
//获得随机数
function getRandom(start,end){
	var d = end+1-start;
	return Math.floor(Math.random()*d+start);
}
//将随机数放入数组，并转化成字符串
function getCode(){
	var arr = [];
	while(arr.length<4){
		var n=getRandom(0,9);
		arr.push(n);
	}
	return arr.join("");
}

