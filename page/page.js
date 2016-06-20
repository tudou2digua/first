// JavaScript Document


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
var oLista=document.getElementById('img-list');
var aLi=oLista.getElementsByTagName('li');
var oListb=document.getElementById('dirc-list');
var bLi=oListb.getElementsByTagName('li');
var i;
for(i=0;i<aLi.length;i++)
{
	aLi[i].index=i;
	aLi[i].onmousedown=function(ev)
	{
		now=this.index;
		clearClass();
		aLi[now].className='bs';
		canBubble(ev);
		bLi[0].onclick=function()
		{ 
			if(now==0)
			{
				now=aLi.length-1;
			   clearClass();
			   aLi[now].className='bs';
			}else
			{
			now--;
			clearClass();
			aLi[now].className='bs';
			}
			
	     }
		bLi[1].onclick=function()
		{
			clearClass();
			 aLi[now].className='bs';
			 now++;
		}
	}
}

document.onmousedown=function()
{
	clearClass();
}

function clearClass(){
	
	   var j=0;
		for(j=0;j<aLi.length;j++)
		{
			aLi[j].className='';
		}
}
function canBubble(ev)
{
	var oEvent=ev||event;
	if(oEvent.cancelBubble)
	{
		oEvent.cancelBubble=true;
	}
	else
	{
		oEvent.stopPropagation();
	}
}

var oBtn=document.getElementById('btn');
var oForm=document.getElementById('form');
var omyForm=document.getElementById('myForm');
var oClose=document.getElementById('close');
var oTxt=document.getElementById('txt');
oBtn.onclick=function(){
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	oForm.style.display="block";
	oForm.style.top=scrollTop+'px';
}
oClose.onclick=function(){
	oForm.style.display="none";
}

function formReset()
{
	omyForm.reset();
}
function formSubmit()
{
	omyForm.submit();
}	
