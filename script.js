$("#submit").on("click",function(e){
	var phoneValue=$("#phone").val();
	if (phoneValue.length<=9 && phoneValue.length>=1){
		$("#phone").css("box-shadow","0 0 4px #811");
		e.preventDefault();
	}
});

$("#phone").blur(function(ev){
	var phoneValue=$("#phone").val();
	if (phoneValue.length<=9 && phoneValue.length>=1){
		$("#phone").css("box-shadow","0 0 4px #811");
	}
	else{
		$("#phone").css("box-shadow","0 0 4px #181");
	}
});