// //大小图的切换
// var picArr = ["http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4211/1.png","http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4211/2.png","http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4211/3.png","http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4211/4.png","http://img6.zhongjiu.cn/resourceb2b2c/Storage/Shop/1/Products/4211/5.png"];
//
// //var picArr = ["../img/ljp_24.jpg","../img/ljp_25.jpg","../img/ljp_26.jpg","../img/ljp_27.jpg","../img/ljp_28.jpg"];
//
// //鼠标移入小图，对应border显示
// //大图切换成小图的放大版
// var leftSmallImg = $(".left_smallpic .leftPic");
// var lastPic = leftSmallImg[0];
// for(var i = 0;i<leftSmallImg.length;i++){
// 	leftSmallImg[i].index = i;
// 	leftSmallImg[i].onmouseover = function(){
// 		lastPic.style.borderColor = "transparent";
// 		leftSmallImg[this.index].style.borderColor = "red";
// 		$(".bigpic").prop("src",picArr[this.index]);
// 		$(".change_pic").prop("src",picArr[this.index]);
// 		lastPic = leftSmallImg[this.index];
// 	}
// }
//图片放大镜
var slide = document.getElementsByClassName("wrap")[0];
var min = document.getElementsByClassName("move")[0];
var max = document.getElementsByClassName("changePic")[0];
var maxImg = document.getElementsByClassName("change_pic")[0];
//放大镜跟随鼠标移动
//鼠标移入
min.onmousemove = function(ev){
	slide.style.display = "block";
	max.style.display = "block";
	
	var ev = window.event || ev;
	//获取鼠标在min的坐标
	var disX = ev.clientX - min.offsetLeft;
	var disY = ev.clientY - min.offsetTop;
	//鼠标对准滑块中心
	var x = disX - slide.offsetWidth;
	var y = disY - slide.offsetHeight;
	//滑块移动的最大距离
	var maxWidth = min.clientWidth - slide.offsetWidth;
	var maxHeight = min.clientHeight - slide.offsetHeight;
	
	if(x>=maxWidth){
		x=maxWidth;
	}else if(x<=0){
		x=0;
	}
	if(y>=maxHeight){
		y = maxHeight;
	}else if(y<=0){
		y=0;
	}
	slide.style.left = x + "px";
	slide.style.top = y + "px";
	//滑块移动的位置相对于可移动区域的比例
	var scaleX = x/maxWidth;
	var scaleY = y/maxWidth;
	//max的偏移量等于移动区域乘以max的移动范围
	max.scrollLeft = scaleX*(maxImg.offsetWidth - max.clientWidth);
	max.scrollTop = scaleY*(maxImg.offsetHeight - max.clientHeight);
}
//移除隐藏
min.onmouseleave = function(){
	slide.style.display = "none";
	max.style.display = "none";
}
//点击收藏的变化
//图片发生变化，如果是已变化过的，显示提示框
$(".save").on("click",function(){
	console.log(($(".save img").attr("src")));
	if($(".save img").attr("src") == "../img/ljp_35.png"){
		
		$(".save img").attr("src","../img/ljp_33.png");
	}else{
		$(".null").css("display","block");
		$(".null").html("您已经关注过该商品了");
	}
	setTimeout(function(){
		$(".null").css("display","none");
	},1500)
})
//点击加减号，数量加一减一
$(".sub").on("click",function(){
	if($(".num").html() > 0){
		var subNum = $(".num").html();
		subNum--;
		$('.num').html(subNum);
	}else{
		$(".num").html("0");
	}
})
$(".sum").on("click",function(){
	var sumNum = $(".num").html();
	sumNum++;
	$(".num").html(sumNum);
})
//搜索框没写入东西的效果
$(".search_btn").on("click",function(){
	if($(".keyword").val() == ""){
		$(".null").css("display","block");
		$(".null").html("请输入关键字或者价格区间");
	};
	setTimeout(function(){
		$(".null").css("display","none");
	},1500)
});
// //动态生成热门销售的商品
// for(var i = 0;i<5;i++){
// 	//热门销售
// 	$("<li><img class=\"sell_pic\" src=\"../img/ljp_36.jpg\"/><a class='sell_a' href=''><p class=\"sell_hot_name\">50°五粮液 500ml(普五水晶盒)</p></a><p class=\"sell_num\"><span class=\"span1\">"+(i+1)+"</span> <span class=\"span2\">热销<span class=\"sell_amount\">6180</span>件</span></p></li>").appendTo($(".hot_sell_goods"));
//
// 	//热门关注
// 	$("<li><img class=\"concern_pic\" src=\"../img/ljp_37.jpg\"/><a class='concern_a' href=''><p class=\"concern_hot_name\">12°尧喝货清爽型黄酒500ml</p></a><p class=\"concern_num\"><span class=\"span3\">"+(i+1)+"</span> <span class=\"span4\">关注<span class=\"concern_amount\">60</span>次</span></p></li>").appendTo($(".hot_concern_goods"));
// }
//鼠标移入移除热门的显示隐藏
$(".hot_sell").on("mouseover",function(){
	$(".hot_sell_goods").css("display","block");
	$(".hot_concern_goods").css("display","none");
});
$(".hot_concern").on("mouseover",function(){
	$(".hot_concern_goods").css("display","block");
	$(".hot_sell_goods").css("display","none");
});
//点击商品介绍、评价和咨询的样式切换
var lis = $(".part_one_kind li");
var last	 = lis[0];
for(var i = 0;i<lis.length;i++){
	lis[i].index = i;
	lis[i].onclick = function(){
		var a = this.firstChild;
		a.style.color = "red";
		var a1 = last.firstChild;
		a1.style.color = "black";
		last = lis[this.index];
	}
}
// //商品介绍动态生成商品
// for(var i = 0;i<8;i++){
// 	$("<a href=\"\"><li class=\"part_two_pic\"><img class=\"part_two_img\" src=\"../img/ljp_38.jpg\"/><p class=\"part_two_price\">￥<span>528</span></p><p class=\"part_two_goodsName\">42°天佑德青稞酒海拔2600 500ml</p></li></a>").appendTo($(".right_part_two"));
// }
//动态生成初次评论
// for(var i= 0;i<10;i++){
// 	$("<dl><dt class=\"pj_name\">初次评价：</dt><dd class=\"pj_content\">非常满意！物流很快，包装结实！酒的口感很棒：打开后口感圆润，丹宁丰富，酒体适中，即使是初次喝红酒的人也容易接受，现在这个季节搭配着烤肉非常棒！好酒需慢慢品！下次还来</dd><div class=\"pj_right\"><span class=\"user_number\">131****3248</span><br /><span class=\"star\"><img src=\"../img/ljp_51.png\"/></span></div></dl>").prependTo($(".pj_box"));
// }
//页面滚动到商品简介，评价和咨询处，栏目停在页面顶部
var right_kind = document.getElementsByClassName("part_one_kind")[0];
document.documentElement.onmousewheel = function(){
	if(this.scrollTop >= 650){
		right_kind.style.position = "fixed";
		right_kind.style.backgroundColor = "white";
		right_kind.style.border = "2px solid #CACAD0";
		right_kind.style.top = "0px";
		right_kind.style.zIndex = "6";
	}else{
		right_kind.style.position = "";
		right_kind.style.border = "0px solid #CACAD0";
	}
}

//地区
$(function(){
	init_city_select($("#sel1, #sel2"));
});


//购物车操作***************************************改动区域
var gouwuche_left_content_first_click = document.getElementsByClassName(" gouwuche_left_content_first_click");
var gouwuche = document.getElementsByClassName(" gouwuche")[0];
var gouwuche_right = document.getElementsByClassName(" gouwuche_right")[0];
change();
		//点击全选
			$("#inp1").click(function() {
				$(".inpcounts").prop("checked", this.checked);
				$(".inpcount").prop("checked", this.checked);
				change();
			})
			//点击中酒自营
			$(".inpcounts").click(function() {
				$("#inp1").prop("checked", this.checked);
				$(".inpcount").prop("checked", this.checked);
				change();
			})
			//点击商品
			$(".inpcount").click(function() {
				$(".inpcounts").prop("checked", $('.inpcount:checked').length == $('.inpcount').length);
				$("#inp1").prop("checked", $('.inpcount:checked').length == $('.inpcount').length);
				change();
			})
			//查看所有
			$(".chakan").mouseover(function() {
				$(".chakan").css("color", "red");
			})
			$(".chakan").mouseout(function() {
				$(".chakan").css("color", "black");
			})
			
			//获取购物车中商品数量	
			function change(){
				$(".gouwushuliang").html(function(){	
				var countss = 0;
				$(".inpcount").siblings(".s_sum").each(function(index, el) {
						countss += parseInt(el.innerHTML);
				})
				return countss;		
			})





			// $(".prices").html(function() {
			// 		var countss = 0;
			// 		var arrs=[];
			// 		var arrss=[];
            //
			// 		$(".inpcount:checked").siblings(".titalprice").each(function(index, el) {
			//
			// 			arrs.push(el.innerHTML);
            //
			// 		})
			// 	console.log(arrs);
			// 		$(".inpcount:checked").siblings(".s_sum").each(function(index, el) {
			// 			arrss.push(el.innerHTML);
            //
			// 			countss+=parseInt(arrs[index])*parseInt(arrss[index]);
			// 		})
             //    console.log("+++++++++"+countss);
			// 		return countss;
			// 	})
			//














				$(".counts").html(function() {
					var counts = 0;
					$(".inpcount:checked").siblings(".s_sum").each(function(index, el) {
						counts += parseInt(el.innerHTML);
					})
					return counts;
				})
			}
change();
window.onload = function(){
    change();
    }
//			加入购物车
			$(".btn2").click(function(){

				// $("<li style='position:relative;margin-bottom:5px;'><input type='checkbox' checked='checked' class='inpcount'/>"
				// +"<img style='vertical-align:middle;width:40px;' src='../img/0.jpg'/>"
				// +"<div class='s_sum'>"+$('.num').html()+"</div><span class='titalprice' style='float:right; margin-top:8px;'>"
				// +$('.pri').html()+"</span></li>").appendTo($(".ols"));
				change();
			})
			
			
			

$(".chexiao").click(function() {
	gouwuche.style.width = "40px";
	gouwuche_right.style.width = "0px";
})
 var gouwuche_right_right=document.getElementsByClassName("gouwuche_right_right");
 for(var i = 0; i < gouwuche_left_content_first_click.length; i++) {
	gouwuche_left_content_first_click[i].index = i;
	gouwuche_right_right[i].index=i;
	gouwuche_right_right[i].style.display="none";
	gouwuche_right_right[0].style.display="block";	
	 gouwuche_left_content_first_click[i].onclick = function(){
	 	gouwuche.style.width = "260px";
		gouwuche_right.style.width = "220px";
		$(".gouwuche_right").css("transition", ".1s");
	 	var _this=this;
	 	gouwuche_right_right[0].style.display="none";
	 	gouwuche_right_right[1].style.display="none";
	 	gouwuche_right_right[2].style.display="none";
	 	gouwuche_right_right[3].style.display="none";
	 	gouwuche_right_right[_this.index].style.display="block";
	 	if(_this.index!=0){
	 		$(".lanonloads").fadeIn(200);
				$(".lanonloads").fadeOut(1000);
	 	}else{
	 		
	 	}
	 	
	 }
 }
//  //购物车结束********************改动区域结束
//
//
//
// //btn2 img
// var scrollTop=0;
// 	$(window).scroll(function(){
// 				 scrollTop=$(this).scrollTop();
// 				console.log(scrollTop);
// 			})
// 	$('.btn2').on('click', addProduct);
// 		function addProduct(event) {
//
// 		var offset = $('.paowuxian').offset(), flyer = $("<img style='position:absolute;' src='../img/ljp_24.jpg' alt='' class='divsss' />");
//
//
// 		flyer.fly({
// 		// 初始位置
// 		    start: {
//
// 		        left: event.pageX-120,
//
// 		        top: event.pageY-scrollTop-30
//
// 		    },
// 		// 结束位置
// 		    end: {
//
// 		        left: offset.left-70,
//
// 		        top: offset.top-scrollTop-5,
//
// 		        width: 0,
//
// 		        height: 0
//
// 		    }
//
// 		});
//
// 	}

