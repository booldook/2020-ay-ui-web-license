$(".navi-wrap").mouseover(function(){
	$(".sub-wrap").stop().slideDown(300);
});
$(".navis").mouseleave(function(){
	$(".sub-wrap").stop().slideUp(300);
});