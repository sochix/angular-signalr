'use strict';

angular.module('SignalR', [])
	.service('SignalRService', function ($rootScope) {
		this.handlers = [];
		this.isInitialized = false;
		this.connection = $.hubConnection();
		this.hub = {};

		var self = this;
		this.addHandler = function (eventName, handler) {
			if (self.isInitialized == true)
				throw new Error("Service already initialized. You can't add handlers any more");

			self.handlers.push({
				eventName: eventName, handler: function (result) {
					console.log("Server called " + eventName);
					$rootScope.$apply(handler(result));
				}
			});
		};

		this.invoke = function (methodName) {
			if (self.isInitialized == false)
				throw new Error("Call init() before invoking server methods");

			self.hub.invoke.apply(self.hub, arguments)
				.done(function () {
					console.log("Successfully called server method " + methodName);
				})
			.fail(function (error) {
				console.log("Can't call server method: " + error);
			});

		};

		this.init = function (hubName, initFunction) {
			if (self.handlers.length == 0)
				throw new Error("No handlers defined. Please, add handlers first, than call init()");

			self.hub = self.connection.createHubProxy(hubName);

			$.each(self.handlers, function () {
				var handlerItem = this;
				self.hub.on(handlerItem.eventName, handlerItem.handler);
			});

			self.connection.start()
				.done(function () {
					console.log("Connection started.");
					self.isInitialized = true;
					initFunction();					
				})
				.fail(function () {
					console.log("Failed to connect.");
				}
			);

			self.connection.error(function (error) {
				console.log('SignalR error: ' + error);
			});			
		}
	});