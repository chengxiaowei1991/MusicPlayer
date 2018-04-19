$('#photo span').eq(1).hide();
$('#photo span').eq(0).show();
$('#photo span').eq(0).click(function(){
	$('#photo span').eq(0).hide();
	$('#photo span').eq(1).show();
})
$('#photo span').eq(1).click(function(){
	$('#photo span').eq(1).hide();
	$('#photo span').eq(0).show();
})
