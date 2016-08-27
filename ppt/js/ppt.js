var data=[
{img:1,h1:'Creative',h2:'DUET'},
{img:2,h1:'Firendly',h2:'DEVIL'},
{img:3,h1:'Tranquilent',h2:'COMPATRIOT'},
{img:4,h1:'Insecure',h2:'HUSSLER'},
{img:5,h1:'Loving',h2:'REBEL'},
{img:6,h1:'Passionate',h2:'SEEKER'},
{img:7,h1:'Crazy',h2:'FRIEND'}
];
var g=function(id){
	 if(id.substr(0,1) == '.')
	{
		return document.getElementsByClassName(id.substr(1));
	} 
	return document.getElementById(id);
}
function addSlider()
{
	var tpl_page=g('page').innerHTML.replace(/^\s*/,'')
									.replace(/\s*$/,'');
	var tpl_ctrl=g('ctrl').innerHTML.replace(/^\s*/,'')
									.replace(/\s*$/,'');
	var out_page=[];
	var out_ctrl=[];
	for(i in data)
	{
		var _html_page=tpl_page.replace(/{{index}}/g,data[i].img)
								.replace(/{{h1}}/g,data[i].h1)
								.replace(/{{h2}}/g,data[i].h2)
								.replace(/{{css}}/g,['','main-radom'][i%2]);
		var _html_ctrl=tpl_ctrl.replace(/{{index}}/g,data[i].img);
		out_page.push(_html_page);
		out_ctrl.push(_html_ctrl);
	}
	g('page').innerHTML=out_page.join('');
	g('ctrl').innerHTML=out_ctrl.join('');
	g('page').innerHTML += tpl_page.replace(/{{index}}/g,'{{index}}')
								.replace(/{{h1}}/g,data[i].h1)
								.replace(/{{h2}}/g,data[i].h2);
	g('main-page-{{index}}').id='main-background';

};
function switchSlider(n){
	var page=g('main-page-'+n);
	var ctrl=g('main-ctrl-'+n);
	var clear_ctrl=g('.ctrl-item');
	var clear_page=g('.page-item');
	for(var i=0;i<clear_ctrl.length;i++)
	{
		clear_page[i].className=clear_page[i].className.replace('page-item-active','');
		clear_ctrl[i].className=clear_ctrl[i].className.replace('ctrl-item-active','');
	}
	page.className += 'page-item-active';
	ctrl.className += 'ctrl-item-active';
	g('main-background').innerHTML=page.innerHTML;
								
};
window.onload=function(){
	addSlider();
	switchSlider(1);
};