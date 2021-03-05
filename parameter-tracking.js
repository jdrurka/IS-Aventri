console.log('AVENTRI [DEBUG]: Code successfully devilvered via CDN.');

var $ = jQuery.noConflict();

document.cookie = 'test_acode=0000'; /* For testing - remove later */
document.cookie = 'test_gclid=1111'; /* For testing - remove later */
document.cookie = 'test_fbclid=2222'; /* For testing - remove later */
document.cookie = 'test_subid=3333'; /* For testing - remove later */
document.cookie = 'test_tfn=4444'; /* For testing - remove later */
document.cookie = 'test_kwid=5555'; /* For testing - remove later */

function getCookie(a) {
    a = new RegExp("(?:^" + a + "|;s*" + a + ")\x3d(.*?)(?:;|$)","g");
    a = a.exec(document.cookie);
    return null === a ? null : a[1]
}
//To-do: fix this function, because it is only working on the first call

var acode = getCookie('test_acode');
	console.log('acode=' + acode);
var gclid = getCookie('test_gclid'); /* Might need to remove this if URL parameters are used */
	console.log('gclid=' + gclid);
var fbclid = getCookie('test_fbclid');
	console.log('fbclid=' + fbclid);
var subid = getCookie('test_subid');
	console.log('subid=' + subid);
var tfn = getCookie('test_tfn');
	console.log('tfn=' + tfn);
var kwid = getCookie('test_kwid');
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

		var urlString = '&acode=' + acode + '&gclid=' + gclid + '&fbclid=' + fbclid + '&subid=' + subid
				+ '&tfn=' + tfn + '&kwid=' + kwid + '&referringURL=' + referringURL;
			console.log('urlString: ' + urlString);
		var newUrl = url.concat(urlString);
			console.log('New URL: ' + newUrl);

		btn[0].href = newUrl;

		console.groupEnd();
		index++;

	}
	
});