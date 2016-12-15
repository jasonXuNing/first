$(function(){
//	$(".login").click(function(){
//		open("login.html");
//	})
	
	$("#hover").hover(function(){
		$("#address").css("display","block");
		$("#arrow").css("background-position-x","-193px");
		$(this).css("background-color", "#fff").css("border-left", "1px solid #f4f4f4").css("border-right", "1px solid #f4f4f4");
	},function(){
		$("#address").css("display","none");
		$("#arrow").css("background-position-x","-178px");
		$(this).css("background-color", "#f4f4f4").css("border", 0);
	})
	$(".word").find("li").click(function(){
		$(".word").find("li").attr("class","");
		$(this).attr("class","is-select");
	})
	//banner图滚动
	var oBtn = $("#count").find("li");
	var oUl = $("#pic");
	var oLi = oUl.find("li");
	
	var iNow = 0;
	var timer = null;
	oBtn.click(function(){
		iNow = $(this).index();
		tab();
	})
	
	timer = setInterval(timerInner,2000);
	$("#banner").mouseenter(function(){
		clearInterval(timer);
	});
	$("#banner").mouseleave(function(){
		timer = setInterval(timerInner,2000);
	});
	
	function tab(){
		oBtn.attr("class", "");
		oBtn.eq(iNow).attr("class", "active");
		if(iNow == oLi.size()-1){
			oBtn.eq(0).attr("class", "active");
		}
		
		oUl.animate({left: -1366*iNow}, function(){
			if(iNow == oLi.size()-1){
				iNow = 0;
				oUl.css("left", 0);
			}
		});
	}
	function timerInner(){
		iNow++;
		tab();
	}
	
	var leftBtn = $(".share-left-btn");
	var rightBtn = $(".share-right-btn");
	var shareMove = $(".move-share");
	var ulMove = shareMove.find("ul");
	var id = null;
	var pNow = 0;
	
	id = setInterval(start, 2000);
	$(".share-con").mouseenter(function(){
		clearInterval(id);
	})
	$(".share-con").mouseleave(function(){
		id = setInterval(start, 2000);
	})
	
	
	
	function moveTab(){
		shareMove.animate({left: -1186*pNow}, function(){
			if(pNow == ulMove.size()-1){
				pNow = 0;
				shareMove.css("left", 0);
			}
		})
	}
	
	function start(){
		pNow++;
		moveTab();
	}
	
//	$("#count").mouseenter(function(){
//		$(this).find("li").css("width", "13px").css("height", "13px").css("border-radius", "13px");
//	});
//	$("#count").mouseleave(function(){
//		$(this).find("li").css("width", "10px").css("height", "10px").css("border-radius", "10px");
//	});

	//导航
	var div1 = $("#nav-list");
	var oul = null;
	var div2 = $("<div>");
	$.ajax({
		type:"get",
		url:"nav.json",
		success: function(res){
			//alert(res);
			for(var i = 0; i < res.length; i++){
				var html = '';
				for(var key in res[i]){
					//alert(res[i][key]);
					html += '<li class="bra">' + res[i][key] +'</li>';
				}
				oul = $("<ul></ul>").html(html);
				oul.append($("<a href='#' class='more'>更多></a>"))
				//console.log(oul);
				for(var j=0;j<oul.length;j++){
					div2.append(oul[j]);
				}
			}
			div2.append("<div class='moresize'>更多手机品牌></div>");
		}
	});
	var div3=$("<div>");
	$.ajax({
		type:"get",
		url:"nav2.json",
		success: function(res){
			//alert(res);
			for(var i = 0; i < res.length; i++){
				var html = '';
				for(var key in res[i]){
					//alert(res[i][key]);
					html += '<li class="bra">' + res[i][key] +'</li>';
				}
				oul = $("<ul></ul>").html(html);
				oul.append($("<a href='#' class='more'>更多></a>"))
				//console.log(oul);
				for(var j=0;j<oul.length;j++){
					div3.append(oul[j]);
				}
			}
			div3.append("<div class='moresize'>更多平板电脑品牌></div>");
		}
	});
	
	var div4=$("<div>");
	$.ajax({
		type:"get",
		url:"nav3.json",
		success: function(res){
			//alert(res);			
			for(var i = 0; i < res.length; i++){
				var html = '';
				for(var key in res[i]){
					//alert(res[i][key]);
					html += '<li class="bra">' + res[i][key] +'</li>';
				}
				oul = $("<ul></ul>").html(html);
				oul.append($("<a href='#' class='more'>更多></a>"))
				//console.log(oul);
				for(var j=0;j<oul.length;j++){
					div4.append(oul[j]);					
				}
			}			
			div4.append("<div class='moresize'>更多笔记本品牌></div>");			
		}
	});
	
	$("#nav ul").find(".li1").click(function(){
		open("list.html");
	})
	
	
	var move_media = $("#left_right");
	$.ajax({
		type:"get",
		url:"media.json",
		success: function(res){
			var html = '';
			for(var  i = 0; i < res.length; i++){
				html += '<div class="news1"><img src="'+ res[i].img +'" /><div class="news1-bot"><span class="tit1">'+ res[i].tit1 +'</span><span class="tit2">'+ res[i].tit2 +'</span><div class="con">'+ res[i].con +'</div><div class="con-link"><span class="checkout">查看详细 ></span><i class="'+ res[i].class +'"></i></div></div></div>'
			}
			move_media.html(html);
		}
	});
	
	//媒体部分的移动
	var page = 1;
	$(".bleft").click(function(){
		if(!$("#left_right").is(":animated")){
			if(page == 5){
				$("#left_right").animate({left: 0});
				page = 1;
			}else{
				$("#left_right").animate({left: '-='+284});
				page++;
			}
		}
		
	})
	
	$(".bright").click(function(){
		if(!$("#left_right").is(":animated")){
			if(page == 1){
				$("#left_right").animate({left: '-='+1136});
				page = 5;
			}else{
				$("#left_right").animate({left: '+='+284});
				page--;
			}
		}
		
	})
	
//	var leftBtn = document.getElementsByClassName("share-left-btn")[0];
//	var rightBtn = document.getElementsByClassName("share-right-btn")[0];
//	var moveShare = document.getElementsByClassName("move-share")[0];
	var Ppage = 1;
	$(".share-left-btn").click(function(){
		if(!$(".move-share").is(":animated")){
			if(Ppage == 5){
				$(".move-share").animate({left: 0});
				Ppage = 1;
			}else{
				$(".move-share").animate({left: '-='+1186});
				Ppage++;
			}
		}
	})
	$(".share-right-btn").click(function(){
		if(!$(".move-share").is(":animated")){
			if(Ppage == 1){
				$(".move-share").animate({left: '-='+4744});
				Ppage = 5;
			}else{
				$(".move-share").animate({left: '+='+1186});
				Ppage--;
			}
		}
		
	})
	
	//点击用户分享左右按钮移动
//	leftBtn.onclick = function(e){
//		arguments.callee.num = arguments.callee.num?arguments.callee.num:0;
//		++arguments.callee.num;
//		startMove(moveShare, {left: -1186*arguments.callee.num});
//	}
//	rightBtn.onclick = function(){
//		arguments.callee.num = arguments.callee.num?arguments.callee.num:0;
//		++arguments.callee.num;
//		startMove(moveShare, {left: 1*arguments.callee.num});
//	}
	
	
	$("#nav").hover(function(){
		$(this).css("cursor","pointer");
		$("#nav-list").css("display","block");
	},function(){
		$("#nav-list").css("display","none");
	})
	
	$("#nav-list").hover(function(){
		$(this).css("display","block");
	},function(){
		$(this).css("display","none");
	})
	
	$(".li1").mouseenter(function(){
		div1.html("");
		div1.html(div2);
		$("#nav-list").find("ul li:first-child").css("color","black").css("margin-right","56px");
	})
	
	$(".li2").mouseenter(function(){
		div1.html("");
		div1.html(div3);
		$("#nav-list").find("ul li:first-child").css("color","black").css("margin-right","56px");
	})
	
	$(".li3").mouseenter(function(){
		div1.html("");
		div1.html(div4);
		$("#nav-list").find("ul li:first-child").css("color","black").css("margin-right","56px");
	})
	
	$(".goods-nav ul").find("li").click(function(){
		$(".goods-nav ul").find("li").attr("class","");
		$("#high-price").css("background-position-y","-932px")
		$(this).attr("class","phone-active");
	})
	$("#high-price").click(function(){
		$(this).css("background-position-y","-886px")
	})
	
	$("#goodhead-left").find("span").hover(function(){
		$(this).find("#rules-pop").css("display", "block");
		$(this).find("#tra").css("display", "block");
	},function(){
		$(this).find("#rules-pop").css("display", "none");
		$(this).find("#tra").css("display", "none");
	});
	
	$.ajax({
		type:'GET',
		url: 'goods.json',
		success: function(res){
			var html = '';
			for(var i = 0; i < res.length; i++){
				html += '<li class="goods-item"><div class="goods-pic"><img src="'+ res[i].img +'" /></div><div><p>'+ res[i].name +'</p></div><div><b>回收最高价<span>'+ res[i].price +'</span></b></div><div class="sc"><div class="sc-btn" id="'+ res[i].id +'">加入回收车</div></div><div class="up">+' +res[i].up+ '</div></li>'
			}
			$('#good-box ul').html(html);
			var goods_pics = document.getElementsByClassName("goods-pic");
			for(var i = 0; i < goods_pics.length; i++){
				goods_pics[i].onmouseenter = function(){
					startMove(this,{left: -9});
				}
				goods_pics[i].onmouseleave = function(){
					startMove(this,{left: 0});
				}
			}
		}
	})
	
	//购物车

	$('#good-box ul').on('click', '.sc-btn', function(e){
		var first = ($.cookie('goods') == null||$.cookie('goods') == "")?true:false;
		var aprice = $(this).parent().siblings().find("b").find("span").html();
		var price = Number(aprice.substring(1));
		var id = this.id;
		//alert(typeof price)
		//alert(img);
		/*
		 *  arguments.callee 在哪一个函数中运行，它就代表哪一个函数。 一般用在匿名函数中。
			在匿名函数中有时会需要自己调用自己，但是由于是匿名函数，没有名子，无名可调。
			这时就可以用arguments.callee来代替匿名的函数。
		 */
		arguments.callee.num = arguments.callee.num ? arguments.callee.num : 0;
		$('.number').text(++arguments.callee.num);
		if(first){
			$.cookie('goods', '[{id:'+id+',price:'+price+'}]');
			$.cookie('first','false');
		}else{
			var str = $.cookie('goods');
			var arr = eval(str);
//			for(var i in arr){
//				arr[i].num = arr[i].num + 1;
//			}
			var obj = {id:id, price:price};
			arr.push(obj);
			var cookieStr = JSON.stringify(arr);
			$.cookie('goods', cookieStr);
			
		}
		
		sc_msg();
	})
	sc_msg();
	$(".car").mouseenter(function(){
		$(this).css("background", "#fff");
		$(".car-con").css("display", "block");
//		sc_msg();
	})
	$(".car").mouseleave(function(){
		$(this).css("background", "#f4f4f4");
		$(".car-con").css("display", "none");
	})
	
	
	function sc_msg(){
		$.ajax({
			type:"get",
			url:"goods.json",
			success: function(res){
				var sc_str = $.cookie('goods');
				if(sc_str){
					var sc_obj = eval(sc_str);
					var allprice = 0;
					var html = '';
					var html1 = '';
					for(var i in sc_obj){
						html += '<li><div class="min_img"><img src="'+ res[sc_obj[i].id].img +'"/></div><span class="phone_name">'+ res[sc_obj[i].id].name +'</span><span class="phone_price">'+ sc_obj[i].price +'元</span></li>'
						html1 += '<li><div class="detail_img"><img src="'+ res[sc_obj[i].id].img +'"/></div><p class="detail_name">'+ res[sc_obj[i].id].name +'</p><span class="detail_price">￥'+ sc_obj[i].price +'</span><div class="has_xiao">价格有效</div><div class="detail_num">1</div><b class="detail_money">'+ sc_obj[i].price +'</b><div class="cao"><a class="del">删除</a><br/><a>重新询价</a></div></li>'
						//console.log(res[sc_obj[i].id].img)
						allprice = sc_obj[i].price + allprice;
						//console.log(allprice)
					}
					//alert(html)
					$(".price_all").html(allprice);
					$('.car_con').html(html);
					$('.goods_detail').html(html1);
					$('.pay_all').html("￥"+allprice);
				
					$(".cao").on("click", ".del", function(){
						//alert($(this).parent().parent().index());
						var index = $(this).parent().parent().index();
						var del_obj = $.cookie("goods");
						var del_arr = eval(del_obj);
						del_arr.splice(index, 1);
						var new_obj = JSON.stringify(del_arr);
						$.cookie("goods", new_obj);
						$(this).parent().parent().remove();
						sc_msg();
						$(".number1").html(del_arr.length);
					})
					
					$(".clear_car").click(function(){
						$(".goods_detail").remove();
						$(".pay_all").html("￥0");
						$.cookie("goods", "");
						$(".car-con").find("li").remove();
						$(".number1").html("0");
						$(".price_all").html("0");
					})
				}
			}
		});
	}
	
	$(".join_btn").click(function(){
		open("car.html");
	})
	
	//alert($(".del"))
//	$(".cao").on("click", ".del" ,function(){
//		alert(12)
//	})
	
	
	
	
	//地址上下移动
	$(".move-up").toggle(function(){
		$(".registor").animate({top: -258});
		$(this).find("i").addClass("arrow");
	},function(){
		$(".registor").animate({top: 0});
		$(this).find("i").removeClass();
	})
	
	
	$(".detail").hover(function(){
		$(this).css("background", "#3782ff").css("border", 0);
		$(this).find(".store-addr").css("display", "block").css("color", "white");
		$(this).find(".store-num").css("display", "block").css("color", "white");
		$(this).find(".store-name").css("display", "none");
	},function(){
		$(this).css("background", "#fff").css("border", "1px dashed #f2f2f2");
		$(this).find(".store-addr").css("display", "none");
		$(this).find(".store-num").css("display", "none");
		$(this).find(".store-name").css("display", "block");
	})
	
	
	$(".share-con").hover(function(){
		$(".share-left-btn").css("display", "block");
		$(".share-right-btn").css("display", "block");
	},function(){
		$(".share-left-btn").css("display", "none");
		$(".share-right-btn").css("display", "none");
	})
	
	
})


onload = function(){
	//banner中的index变化大小
	var countUl = document.getElementById("count");
	var countLis = countUl.children;
	countUl.onmouseenter = function(){
		for(var i = 0; i<countLis.length; i++){
			startMove(countLis[i],{width:13, height:13})
		}
		
	}
	countUl.onmouseleave = function(){
		for(var i = 0; i<countLis.length; i++){
			startMove(countLis[i],{width:10, height:10})
		}
		
	}
	
	//商品划过时左移一段距离
//	var goods_pics = document.getElementsByClassName("goods-pic");
//	for(var i = 0; i < goods_pics.length; i++){
//		goods_pics[i].onmousover = function(){
//			alert(123)
//			startMove(this,{left: -9});
//		}
//		goods_pics[i].onmouseout = function(){
//			startMove(this,{left: 0});
//		}
//	}
//	

	
}
