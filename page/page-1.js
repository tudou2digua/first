// JavaScript Document

$(document).ready(function() {
	var i;
	var index=null;
	var now=0;
	var $box=$('#box');
   var $ula=$box.children(':first');
	var $item=$('#item');
	$ula.html($ula.html()+$ula.html());
 var $lia=$ula.children();
	var $ulb=$item.children(':first');
	var $lib=$ulb.children();
   for(var i=0;i<$lib.length;i++)
   {
	   $lib[i].index=i;
	  
	   $lib[i].onclick=function(){
		     
		   now=this.index;
		   tab();
		   };
		 function tab()
		 {
		 for(var j=0;j<$lib.length;j++)
				{
				   	$lib[j].className='';
				} 
				 $lib[now].className='active';
				 startMove($ula,{left:-1349*now});
		 }		  
   }
function fn(){
				now++;
			 if(now>=$lia.length/2)
			 {
				 now=0;
				$ula.css('left','0');
			 }
			
		}
     
	  $(function(){setInterval(fn,3000);});      
});


function getStyle(obj,name)
  {
     if(obj.currentStyle)
	 {
	   return obj.currentStyle[name];
	 }
	 else
	  {
	     return getComputedStyle(obj,false)[name];
	  }
  }
var timer=null;
  function startMove(obj,json,fnEnd)
  {
	  
     clearInterval(obj.timer);
	 obj.timer=setInterval(function(){
	 for(attr in json)
	{
	 var bStop=true;
	 var cur=0;
	 if(attr=='opacity')
		 {
		 cur=Math.round(parseFloat(getStyle(obj,attr))*100);
		 }
		 else
		 {
			 cur=parseInt(getStyle(obj,attr));
		 }
	 var speed=(json[attr]-cur)/6;
	 speed=speed>0?Math.ceil(speed):Math.floor(speed);
	 if(cur!=json[attr])
		{
		 bStop=false;
		}
	 if(attr=='opacity')
		 {
			   obj.style.filter='alpha(opacity:'+(cur+speed)+')';
		       obj.style.opacity=(cur+speed)/100;
		}
	 else
		 {
			 obj.style[attr]=cur+speed+'px';
		 }
	 }
	  if(bStop)
		 {
		   clearInterval(obj.timer);
		   if(fnEnd)
			 {
			   fnEnd();
			 }
		 }
	 },30);
  };
	