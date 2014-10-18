/**
 * @constructor
 */
var YourApi = function (server, logger, main_route, auth_helper) {
	this.$server = server;
	this.$logger = logger;
	this.$main_route = main_route;
	this.$auth_helper = auth_helper;
};


YourApi.prototype.start = function () {
	this.setupMiddlewares_();
	this.setupRoutes_();
	this.startServer_();
};


YourApi.prototype.setupMiddlewares_ = function () {
	this.$server.use(this.$auth_helper.authenticate.bind(this.$auth_helper));
};


YourApi.prototype.setupRoutes_ = function () {
	this.$server.get("/greet/:username", this.$main_route.greeting.bind(this.$main_route));
};


YourApi.prototype.startServer_ = function () {
	var serverStarted = function() {
		this.$logger('%s listening at %s', this.$server.name, this.$server.url);
	};

	this.$server.listen(process.env.PORT || 8080, serverStarted.bind(this));
};


module.exports = YourApi;

