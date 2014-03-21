$(function(){
	$('#two_color').click(function(){
		var item = document.querySelectorAll(".hidden_1");
		$(item).fadeIn(1000);
		$(".active").hide();

	});

	$('#one_color').click(function(){
		var item = document.querySelectorAll(".active");
		$(item).fadeIn(1000);
		$(".hidden_1").hide();

	});



})
