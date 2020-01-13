$(".navi-wrap").mouseover(function(){
	$(".sub-wrap").stop().slideDown(300);
});
$(".header-wrap").mouseleave(function(){
	$(".sub-wrap").stop().slideUp(300);
});