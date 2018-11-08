function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var cc_select = document.getElementsByClassName("cc-expirey-year")[0];
cc_select.onchange = function(){
	var name = document.getElementsByName("name")[0].value;
	var names = name.split(" ");
	var first_name = names[0];
	var last_name = names[1];
	var email = document.getElementsByName("email")[0].value;
	setCookie("first_name", first_name, 1);
	setCookie("last_name", last_name, 1);
	setCookie("email", email, 1);      	
};
