var slides = [
	{src: "./img/p1.png", link: "#"},
	{src: "./img/p2.png", link: "#"},
	{src: "./img/p3.png", link: "#"},
	{src: "./img/p4.png", link: "#"},
	{src: "./img/p5.png", link: "#"}
];

function slideMaker($parent, chk) {
	var html = '';
	for(var i in slides) {
		html += '<div class="ban">';
		html += '<a href="'+slides[i].link+'">';
		html += '<img src="'+slides[i].src+'" class="img">';
		html += '</a>';
		html += '</div>';
	}
	$parent.find(".ban-wrap").html(html);
	if(chk) $parent.find(".ban-wrap").append($parent.find(".ban-wrap > div").eq(0).clone());
}

function pagerMaker($parent) {
	var html = '';
	for(var i in slides) {
		html += '<div class="pager">●</div>';
	}
	$parent.find(".pagers").html(html);
}


/* 무한반복형 */
(function(){
	var $bans = $("#bans1");
	var $ban = $bans.find(".ban-wrap");
	var $prev = $bans.find(".prev");
	var $next = $bans.find(".next");
	var cnt = slides.length; //5
	var now = 0;
	var delay = 4000;
	var speed = 300;
	slideMaker($bans, true);
	pagerMaker($bans);
	var interval = setInterval(slide, delay);
	function slide() {
		if(now == cnt) {
			now = 0;
			$ban.css({"left": 0});
		}
		now++;
		ani();
	}
	function ani() {
		$ban.stop().animate({"left": -now*100+"%"}, speed);
	}
	$ban.mouseenter(function(){
		clearInterval(interval);
	});
	$ban.mouseleave(function(){
		clearInterval(interval);
		interval = setInterval(slide, delay);
	});
	$prev.click(function(){
		if(now > 0) {
			now--;
			ani();
		}
	});
	$next.click(function(){
		if(now < cnt - 1) {
			now++;
			ani();
		}
	});
})();

/*
var color = $("객체").css("color");
$("객체").css("color", "#000");
$("객체").css({"color": "#000", "padding": "12px"});
$("객체").animate({"color": "#000"}, 500);
*/