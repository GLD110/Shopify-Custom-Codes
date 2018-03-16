var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
  if (xmlhttp.status == 200) {
	try {
	  var location = JSON.parse(xmlhttp.responseText);
	  switch(location.country_code) {
		case 'AU':
		case 'KH':
		case 'CN':
		case 'IN':
		case 'ID':
		case 'JP':
		case 'KR':
		case 'LA':
		case 'MY':
		case 'MN':
		case 'MM':
		case 'NP':
		case 'PK':
		case 'PH':
		case 'SG':
		case 'LK':
		case 'TH':
		case 'VN':
		case 'FJ':
		case 'PF':
		case 'GU':
		case 'NR':
		case 'NC':
		case 'NZ':
		case 'PG':
		case 'WS':
		case 'SB':
		case 'TO':
		case 'TV':
		case 'VU':
		  window.location = 'https://thebumbag.com.au';
		  return;
		default:
		  return;
	  }
	} catch(e) {}
  }
  else if (xmlhttp.status == 400) {
	alert('There was an error 400');
  }
  else {
	alert('something else other than 200 was returned');
  }
}
};

xmlhttp.open("GET", "https://freegeoip.net/json/", true);
xmlhttp.send();
