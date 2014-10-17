/**
 * @constructor
 */
var Main = function (injector, logger, /* config.api.name */ api_name) {
	this.$injector = injector;
	this.$logger = logger;
  this.$api_name = api_name;
};


Main.prototype.greeting = function (req, res, next) {
	var username = req.params.username;

	var response = {
		"message": "Hello " + username,
		"api_name": this.$api_name
	};

	res.send(response);

	next();
};


module.exports = function mainRouteFactory (injector) {
  var main = injector.instantiate(Main);
  return main;
};

