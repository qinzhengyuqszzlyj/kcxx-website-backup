// JavaScript Document
$(document).ready(function(){
	 news();
	 banner();
	 gun();
})	
	function news(){
		var n=0;
		var run=null;
			
		$(".dot li").mouseover(function(){//此处的n是局部变量 只针对此处有作用 改成j以示区分
			var	j=$(this).index();
			$(this).addClass("checked").siblings().removeClass("checked");
			$(".caption li").eq(j).addClass("selected").siblings().removeClass("selected");
			$(".photo li").eq(j).addClass("first").siblings().removeClass("first");		
		})
		
		//自动轮播
		run=setInterval(function(){
			n++;
			if(n>5){
				n=0;
			}
			autoPlay();		
		},2000)
		
		//封装
		function autoPlay(){
			$(".dot li").eq(n).addClass("checked").siblings().removeClass("checked");
			$(".caption li").eq(n).addClass("selected").siblings().removeClass("selected");
			$(".photo li").eq(n).addClass("first").siblings().removeClass("first");			
		}
		
		//点击小点点图片轮播停止	
		$(".photo").hover(function(){
			clearInterval(run);
			},function(){
			run=setInterval(function(){
				n++;
				if(n>5){
					n=0;
				}
				autoPlay();		
			},2000)
		})	
	}
//banner
	function banner(){
		var i=0;
		var timer=null;	
		//向右播
		$(".btn .next").click(function(){
			i++;
			if(i>5){
				i=0;
			}//可简写成if(index>5) index=0;
			paly()
		
		})
		
		//向左播	
		$(".banner .btn .prev").click(function(){
			i--;
			if(i<0){
				i=5;
			}
			paly();
		})
		
		//鼠标悬停小图标对应图片轮播  
		$(".banner .icon ul li").mouseover(function(){
			i=$(this).index();//点到谁就获取谁的序列号
			paly();
		})
		
		//自动轮播
		timer=setInterval(function(){
				i++;
			if(i>5){
				i=0;
			}//可简写成if(index>5) index=0;
			paly();
			},3000)
		//鼠标悬停banner，自动播放停止	
		$(".banner").hover(function(){
			clearInterval(timer);
			$(".btn").show();
			},function(){
				
			timer=setInterval(function(){
				i++;
			if(i>5){
				i=0;
			}//可简写成if(index>5) index=0;
			paly();
			},3000);	
			$(".btn").hide();	
		})	
		//封装
		function paly(){
			$(".banner .pic ul li").eq(i).addClass("active").siblings().removeClass("active");
			$(".banner .icon ul li").eq(i).addClass("on").siblings().removeClass("on");
			$(".banner .txt ul li").eq(i).addClass("show").siblings().removeClass("show");		
			
			}
	}
	//相册	
	function gun(){
	
		var speed=20; 
	    var tab=document.getElementById("slide");
	    var tab1=document.getElementById("slide1");
	    var tab2=document.getElementById("slide2");
	    tab2.innerHTML=tab1.innerHTML;
	    function Marquee(){
	    if(tab2.offsetWidth-tab.scrollLeft<=0)
	    tab.scrollLeft-=tab1.offsetWidth
	    else{
	    tab.scrollLeft++;
	    }
			var now = new Date();  
	         
	    var year = now.getFullYear();       //年  
	    var month = now.getMonth() + 1;     //月  
	    var day = now.getDate();            //日  
	         
	    var hh = now.getHours();            //时  
	    var mm = now.getMinutes();          //分  
	    var ss=now.getSeconds();            //秒  
	         
	    var clock = year + "-";  
		
	    if(month < 10) clock += "0";         
	    clock += month + "-";  
		
	    if(day < 10) clock += "0";   
	    clock += day + " ";  
		
		if(hh < 10) clock += "0";   
		clock += hh + ":";
		if(mm < 10) clock += "0";   
		clock += mm + ":";
		if(ss < 10) clock += "0";   
		clock += ss ;
		$('#time').text(clock);
	    }
	    var MyMar=setInterval(Marquee,speed);
	    tab.onmouseover=function() {clearInterval(MyMar)};
	    tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};	
	}

