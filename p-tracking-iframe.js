var $ = jQuery.noConflict();

function getCookie(name) {
	name += '=';
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i=0; i < ca.length; i++) {
		var c = ca[i];
		while(c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if(c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return null;
}

var acode = getCookie('acode');
	console.log('acode=' + acode);
var gclid = getCookie('gclid'); // Might need to remove this if URL parameters are used
	console.log('gclid=' + gclid);
var fbclid = getCookie('fbclid');
	console.log('fbclid=' + fbclid);
var subid = getCookie('subid');
	console.log('subid=' + subid);
var tfn = getCookie('tfn');
	console.log('tfn=' + tfn);
var kwid = getCookie('kwid');
	console.log('kwid=' + kwid);
var referringURL = window.location.href;
	console.log('referringURL=' + referringURL);

$(document).ready(function(){
    var eventContainer = document.getElementsByClassName('event-item on-page ');
	var index = 0;
	for (var event of eventContainer) {
			console.group('AVENTRI [DEBUG] - Event[' + index + ']:');
		var btn = event.getElementsByClassName('btn btn-primary  ');
		var url = btn[0].getAttribute('href');
			console.log('Old URL: ' + url);
		var urlString = '&p_acode=' + acode + '&p_gclid=' + gclid + '&p_fbclid=' + fbclid + '&p_subid=' + subid
				+ '&p_tfn=' + tfn + '&p_kwid=' + kwid + '&p_referringURL=' + referringURL;
			console.log('urlString: ' + urlString);
		var newUrl = url.concat(urlString);
			console.log('New URL: ' + newUrl);
		btn[0].href = newUrl;
			console.groupEnd();
		index++;
	}
});