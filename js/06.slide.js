/* 가로 - 후다닥형 */
(function () {
	var wid = 720;	// 움직일 값(px)
	var cnt = 4;		// 마지막 그림 Index
	var now = 0;		// 현재 그림 Index
	var interval = setInterval(slide, 3000);
	function slide() {
		if(now == cnt) now = 0;
		else now++;
		$("#ban-wrap1").stop().animate({"left": -wid*now+"px"}, 500);
	}
})();

/* 가로 - 무한루프형 */
(function () {
	var wid = 720;
	var cnt = 5;
	var now = 0;
	var interval = setInterval(slide, 3000);
	function slide() {
		if(now == cnt) {
			now = 0;
			$("#ban-wrap2").css("left", 0);
		}
		now++;
		$("#ban-wrap2").stop().animate({"left": -wid*now+"px"}, 500);
	}
})();

/* 세로 - 후다닥형 */
(function () {
	var hei = 322;
	var cnt = 4;
	var now = 0;
	var interval = setInterval(slide, 3000);
	function slide() {
		if(now == cnt) now = 0;
		else now++;
		$("#ban-wrap3").stop().animate({"top": -hei*now+"px"}, 500);
	}
})();

/* 세로 - 무한루프형 */
(function () {
	var hei = 322;
	var cnt = 5;
	var now = 0;
	var interval = setInterval(slide, 3000);
	function slide() {
		if(now == cnt) {
			now = 0;
			$("#ban-wrap4").css({"top": 0});
		}
		now++;
		$("#ban-wrap4").stop().animate({"top": -hei*now+"px"}, 500);
	}
})();

/* Fade 형 */
(function(){
	var cnt = 4;
	var now = 0;
	var interval = setInterval(slide, 3000);
	function slide() {
		if(now == cnt) now = 0;
		else now++;
		$("#bans5").find(".ban").stop().animate({"opacity": 0}, 500);
		$("#bans5").find(".ban").eq(now).stop().animate({"opacity": 1}, 500);
	}
})();

/* 이전/다음 형 */
(function(){
	var cnt = 4;
	var now = 0;
	var wid = 720;
	$(".prev").click(function(){
		if(now > 0) {
			now--;
			$("#ban-wrap6").stop().animate({"left": -wid*now+"px"}, 500);
		}
	});
	$(".next").click(function(){
		if(now < cnt) {
			now++;
			$("#ban-wrap6").stop().animate({"left": -wid*now+"px"}, 500);
		}
	});
})();


/* Pager 형 */
(function(){
	var cnt = 4;
	var now = 0;
	var wid = 720;
	$(".pager").click(function(){
		now = $(this).index();
		$(".pager").removeClass("active");
		$(this).addClass("active");
		$("#ban-wrap7").stop().animate({"left": -wid*now+"px"}, 300);
	});
})();
