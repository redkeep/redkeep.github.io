host = window.location.host;

function queryObj() {
    var result = {}, keyValuePairs = location.search.slice(1).split('&');

    keyValuePairs.forEach(function(keyValuePair) {
        keyValuePair = keyValuePair.split('=');
        result[keyValuePair[0]] = keyValuePair[1] || '';
    });

    return result;
}
function createQueryString(obj) {
	var result = "";
	for(prop in obj) {
		if(prop !== "")
		result += "&" + prop + "=" + obj[prop];
	}
	return result.substr(1);
}

if(window.location.host==="www.flipkart.com"){

	var key = "affid";
	var value = "notamember";

	var qObj = queryObj();
	qObj[key] = value;

	var isProduct = false;

	for (var prop in qObj) {
		if(prop === 'pid') isProduct = true;        
	}

	obj = {};

	
	if(isProduct === true) {
		obj['pid'] = qObj['pid'];
		obj[key] = qObj[key];
		url = window.location.href.split('?')[0];
		url += "?" + createQueryString(obj);
	        if(window.location.href !== url) { 
			window.location.href = url;
		}
	}
	else {
		url = window.location.href.split('?')[0];
		url += "?" + createQueryString(qObj);
	        if(window.location.href !== url) { 
			window.location.href = url;
		}
	}
}

else if(window.location.host==="www.snapdeal.com"){
	var key = "aff_id";
	var value = "24148";

	var qObj = queryObj();
	qObj[key] = value;
	qObj['utm_source'] = 'aff_prog';
	qObj['utm_campaign'] = 'afts';
	qObj['offer_id'] = '16';
	
	function buildUrlsnap(url){
		
		if(document.location.href === "http://www.snapdeal.com/") return "no";
		if(url.substr(0,30) === "http://www.snapdeal.com/search") return  "no";
	
		var refIndex = url.lastIndexOf('/');
		
		var queryIndex = url.indexOf('?');
		var newurl = url.substr(0,refIndex) + url.substr(queryIndex);
		return newurl;	
	
	} 

	url = window.location.href.split('?')[0];
	url += "/?" + createQueryString(qObj);
	
	newurl = buildUrlsnap(url);	        
	if(newurl!== "no" && window.location.href !== newurl) { 
		window.location.href = newurl;
	}
}


else if(window.location.host==="www.amazon.in"){
	var key = "tag";
	var value = "webtoolandtec-21";

	var qObj = queryObj();
	qObj[key] = value;

	function buildUrl1(url){
		
		if(document.location.href === "http://www.amazon.in/") return "no";

		if(url.substr(0,23) === "http://www.amazon.in/s/")	return  "no";
	
		var refIndex = url.lastIndexOf('/');
		
		var ref = url.substr(refIndex,26);
		if(ref === "/ref=dp_start-bbf_1_glance") return "no";
		
		var ref = url.substr(refIndex,4);
		if(ref !== "/ref") return url;	
	
		var queryIndex = url.indexOf('?');
		var newurl = url.substr(0,refIndex) + url.substr(queryIndex);
		return newurl;	
	
	} 

	url = window.location.href.split('?')[0];
	url += "?" + createQueryString(qObj);
	
	newurl = buildUrl1(url);	        
	if(newurl!== "no" && window.location.href !== newurl) { 
		window.location.href = newurl;
	}
}

else if(window.location.host==="www.amazon.com" || window.location.host==="local.amazon.com"){
	var key = "tag";
	var value = "webtoolandtec-20";

	var qObj = queryObj();
	qObj[key] = value;

	function buildUrl(url){
		
		//for 1.0.6
		if(document.location.href === "http://www.amazon.com/") return "no";

		// for 1.0.5
		if(url.substr(0,24) === "http://www.amazon.com/s/")	return  "no";	
	
		var refIndex = url.lastIndexOf('/');
		
		var ref = url.substr(refIndex,26);
		if(ref === "/ref=dp_start-bbf_1_glance") return "no";	

		var ref = url.substr(refIndex,4);
		if(ref !== "/ref") return url;	
			
		var queryIndex = url.indexOf('?');
		var newurl = url.substr(0,refIndex) + url.substr(queryIndex);
		return newurl;	
	
	} 

	url = window.location.href.split('?')[0];
	url += "?" + createQueryString(qObj);
	newurl = buildUrl(url);	        
	if(newurl!== "no" && window.location.href !== newurl) { 
		window.location.href = newurl;
	}
}


