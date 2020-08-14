const tempUrl = 'www.helper.com'

function isArray(arr){
	return Object.prototype.toString.call(arr) == '[object Array]';
}

export default {
	tempUrl,
	isArray
}