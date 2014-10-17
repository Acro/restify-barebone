/**
 * @constructor
 */
var Authentication = function (injector, logger) {
	this.$injector = injector;
	this.$logger = logger;
};


Authentication.prototype.authenticate = function (req, res, next) {
  this.$logger("Authentication not implemented.");
  next();
};


module.exports = function authenticationHelperFactory (injector) {
  var authentication = injector.instantiate(Authentication);
  return authentication;
};

