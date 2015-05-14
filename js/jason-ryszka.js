var main = function(){
	var click = 0;
	$(function(){
  	$('.body-top','.intro').css({ height: $(window).innerHeight() });
  	$(window).resize(function(){
  		$('.body-top', '.intro', '.profile').css({ height: $(window).innerHeight() });
  		});
	});
	
};
$(document).ready(main);