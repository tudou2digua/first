// JavaScript Document
window.onload=function()
{
     var oItem=document.getElementById('item');
	 var aUl1=oItem.getElementsByTagName('ul')[0];
	 var aLb=aUl1.getElementsByTagName('li');
	 var oBox=document.getElementById('box');
	 var aUl2=oBox.getElementsByTagName('ul')[0];
	 var index=null;
	 var now=0;
	 for(var i=0;i<aLb.length;i++)
	 { 
	     aLb[i].index=i;
	    
	     aLb[i].onclick=function()
		 {
			    now=this.index;
		    	tab();
		 }	
		 function tab()
		 {
		 for(var j=0;j<aLb.length;j++)
				{
				   	aLb[j].className='';
				} 
				 aLb[now].className='active';
				 startMove(aUl2,{left:-1349*now});
		 }		  
     }	
	 aUl2.innerHTML+=aUl2.innerHTML;
	  var aLa=aUl2.getElementsByTagName('li');
	 function next()
	 { 
		now++;
		if(now>=aLa.length/2)
		{
			now=0;
		   	aUl2.style.left=0;
		}
		tab();
	}
	setInterval(next,3000);
};

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
  $(document).ready(function(e) {
    
});