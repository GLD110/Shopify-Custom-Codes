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

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function delete_cookie( name ) {
	document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

var first_name = getCookie("first_name");
var last_name = getCookie("last_name");
var email = getCookie("email");

console.log(first_name);

if(first_name && last_name && email){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://members.ecomm-hacks.com/?optimizemember_pro_remote_op_integration=1&op=create_user&api_key=ecd5fb892c0111a9ae1af456ced5c966&data[first_name]=' + first_name + '&data[last_name]=' + last_name + '&data[user_login]=' + email + '&data[user_email]=' + email + '&data[optimizemember_level]=1&data[notification]=1');
	xhr.onload = function() {
		if (xhr.status === 200) {
			console.log('User\'s name is ' + xhr.responseText);
		}
		else {
			console.log('Request failed.  Returned status of ' + xhr.status);
		}
	};
	xhr.send();
}

delete_cookie("first_name");
delete_cookie("last_name");
delete_cookie("email");
