$(document).ready(function(){
$("button").not("#equal,#clear").click(function(){
var title=$(this).text();
	$("div").append(title);
});
$("#equal").click(function(){
	var str=$("div").text();
	var a=eval(str);
	$("div").text(a);
});
$("#clear").click(function(){
	$("div").text("");
});
});