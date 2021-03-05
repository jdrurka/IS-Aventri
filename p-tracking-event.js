const debugString = 'AVENTRI [DEBUG]: ';

const queryString = window.location.search;
	console.log(debugString + queryString);

const urlParams = new URLSearchParams(queryString);

var acode = urlParams.get('p_acode');
	console.log(debugString + 'acode = ' + acode);

var gclid = urlParams.get('p_gclid');
	console.log(debugString + 'gclid = ' + gclid);

var fbclid = urlParams.get('p_fbclid');
	console.log(debugString + 'fbclid = ' + fbclid);

var subid = urlParams.get('p_subid');
	console.log(debugString + 'subid = ' + subid);

var tfn = urlParams.get('p_tfn');
	console.log(debugString + 'tfn = ' + tfn);

var kwid = urlParams.get('p_kwid');
	console.log(debugString + 'kwid = ' + kwid);

var referringURL = urlParams.get('p_referringURL');
	console.log(debugString + 'referringURL = ' + referringURL);