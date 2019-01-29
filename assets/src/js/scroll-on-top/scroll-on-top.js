$(document).ready(function() {
	$(function() {
		$('.button-on-top').click(function() {
		    $('.snap-content').animate({scrollTop: 0},500);
		    return false;
  		})
	});
});