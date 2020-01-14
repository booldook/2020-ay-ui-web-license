var slides = [
	{src: "./img/p1.png", link: "#"},
	{src: "./img/p2.png", link: "#"},
	{src: "./img/p3.png", link: "#"},
	{src: "./img/p4.png", link: "#"},
	{src: "./img/p5.png", link: "#"}
];

function slideMaker(chk) {
	var html = '';
	for(var i in slides) {
		html += '<div class="ban">';
		html += '<a href="'+slides[i].link+'">';
		html += '<img src="'+slides[i].src+'" class="img">';
		html += '</a>';
		html += '</div>';
	}
	$(".ban-wrap").html(html);
	if(chk) $(".ban-wrap").append($(".ban-wrap > div").eq(0).clone());
}


/* 무한반복형 */
(function(){
	slideMaker(true);
	var $ban = $("#ban-wrap1");
	var cnt = slides.length;
	var now = 0;
	var delay = 4000;
	var speed = 300;
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
})();