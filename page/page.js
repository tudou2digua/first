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
	    EventUtil.addHandler(aLb[i],'click',function()
		 {
			    now=this.index;
		    	tab();
		 });	
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
		EventUtil.addHandler(bLi[0],'click',function()
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
			
	     });
		 EventUtil.addHandler(bLi[1],'click',function()
		{
			clearClass();
			 aLi[now].className='bs';
			 now++;
		});
	}
}
EventUtil.addHandler(document,'mousedown',function()
{
	clearClass();
});
var oBtn=document.getElementById('btn');
var oForm=document.getElementById('form');
var omyForm=document.getElementById('myForm');
var oClose=document.getElementById('close');
var oTxt=document.getElementById('txt');
EventUtil.addHandler(oBtn,'click',function(){
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	oForm.style.display="block";
	oForm.style.top=scrollTop+'px';
});
EventUtil.addHandler(oClose,'click',function(){
	oForm.style.display="none";
});

function formReset()
{
	omyForm.reset();
}
function formSubmit()
{
	omyForm.submit();
}	
