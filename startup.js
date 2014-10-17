var restify = require("restify");
var di = require('di');


var config = require("./config.js");
var YourApi = require("./YourApi.js");


var server = restify.createServer(config.restify);


var routes_module = require("./routes/module.js");
var helpers_module = require("./helpers/module.js");
var main_module = {
	"your_api": [ "type", YourApi ],
	"server": [ "value", server ],
	"logger": [ "value", console.log ],
	"config": [ "value", config ]
};


var injector = new di.Injector([
	main_module,
	routes_module,
	helpers_module
]);


var invokeYourApi = function(your_api) {
  your_api.start();
};


injector.invoke(invokeYourApi);

