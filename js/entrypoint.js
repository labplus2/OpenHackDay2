/** 
	entrypoint.js
	define "entryPoint" function called from Objective-C

	ex)
	NSArray* args = [NSArray arrayWithObjects:
		[name stringValue],
		[x intValue],
		[y intValue],
	nil];
	[callResult setStringValue:[[theWebView windowScriptObject] callWebScriptMethod:@"entryPoint" withArguments:args]];
*/

/**
	functionTable
	need to set concrete function address

	ex)
	functionTable["scroll"] = function(x,y){ //do something };
*/
var functionTable = {
	'scroll': null
};

/**
	entryPoint
	only one entry point function

	ex)
	entryPoint('functionName', param1, param2, ...)
*/
function entryPoint(){
	if(arguments.length < 1) return;
	var name = arguments[0];
	var params = (Array.prototype.slice.call(arguments)).slice(1);

	if(functionTable.hasOwnProperty(name)){
		functionTable[name].apply(null, params);
	}
}


