// JavaScript Document
var EventUtil={
	addHandler:function(element,type,handle){
		if(element.addEventListener)
		{
			element.addEventListener(type,handle,false);
		}else if(element.attachEvent)
		{
			element.attachEvent('on'+type,handle);
		}else
		{
			element['on'+click]=handle;
		}
	},
	removeHandler:function(element,type,handle)
	{
		if(element.removeEventListener)
		{
			element.removeEventLiatener(type,handle,false);
		}else if(element.detachEvent)
		{
			element.detachEvent('on'+type,handle);
		}else{
			element['on'+click]=null;
		}
	}
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