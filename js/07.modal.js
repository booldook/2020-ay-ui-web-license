$(".tab").click(function(){
	var num = $(this).index();
	$(".tab").removeClass("active");
	$(this).addClass("active");
	if(num == 0) {
		$(".notice-wrap").css({"display": "block"});
		$(".gallery-wrap").css({"display": "none"});
	}
	else {
		$(".notice-wrap").css({"display": "none"});
		$(".gallery-wrap").css({"display": "flex"});
	}
});