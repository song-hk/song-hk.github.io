$(document).ready(function() {
	$.ajaxSetup({cache:false}); //キャッシュリセット？
	$('.ajax').each(function(){
		var src = $(this).attr('src');
		if(src !=''){
			$(this).load(src);
		}
	});
});
