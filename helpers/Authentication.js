/**
 * @constructor
 */
var Authentication = function (injector, logger, /* config.api.name */ api_name) {
	this.$injector = injector;
	this.$logger = logger;
  this.$api_name = api_name;
};


Authentication.prototype.authenticate = function (req, res, next) {
  this.$logger("Authentication not implemented.");
  next();
};


module.exports = function authenticationRouteFactory (injector) {
  var authentication = injector.instantiate(Authentication);
  return authentication;
};

