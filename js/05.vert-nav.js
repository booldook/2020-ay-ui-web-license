$(".navi").mouseover(function(){
	$(this).find(".sub-wrap").stop().slideDown(300);
});
$(".navi").mouseleave(function(){
	$(this).find(".sub-wrap").stop().slideUp(300);
});