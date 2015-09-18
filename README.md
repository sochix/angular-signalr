#Angular-SignalR

![](https://lh6.googleusercontent.com/-SBZJu2lsEgc/VOxlNRTJcjI/AAAAAAAACNw/18sGfD3j2g8/w681-h74-no/cooltext1933450417.png)

Angular-SignalR is an AngularJS service that simplifies  using SignalR in AngularJS projects. You can invoke server methods and create client handlers with a minimum of client code.

It's a perfect fit for any WebApp that consumes data from a SignalR.

#Table of contents

- [Angular-SignalR](#Angular-SignalR)
- [How do I add this to my project?](#how-do-i-add-this-to-my-project)
- [Dependencies](#dependencies)
- [Starter Guide](#starter-guide)
  - [Quick configuration](#quick-configuration)
  - [Using Angular-SignalR](#using-angular-signalr)
- [Contributing](#contributing)
- [FAQ](#faq)
- [Supported Angular versions](#supported-angular-versions)
- [License](#license)

#How do I add this to my project?

You can download this by:

* Downloading it manually by clicking [here to download development unminified version](https://raw.githubusercontent.com/sochix/angular-signalr/master/angular-signalr.js) 

#Dependencies

Angular-SignalR depends on Angular and JQuery.SignalR.

#Starter Guide

## Quick Configuration
This is all you need to start using Angular-SignalR features.

````javascript
// Add SignalRService as a dependency to your app
angular.module('your-app', ['SignalR']);

// Inject SignalRService into your controller
angular.module('your-app').controller('MainCtrl', function($scope, SignalRService) {
  SignalRService.addHandler("helloWorld", function() { alert("Hello world!"); })
  SignalRService.init("helloWorldHub", function() { SignalRService.invoke("Login"); })
});
````
The SignalRService service may be injected into any Controller or Directive :)

## Using Angular-SignalR

### init(hubName, initFunction)
Initializing of Angular-SignalR service, ***it must be called before invoking any server methods, but after registering all client-side handlers.***

This function has 2 parameters:

* **hubName**: The hub to which we want connect.
* **initFunciton**: This is a hook. It's called after estabilishing connection to SignalR service. You can use it to log connection, or to invoke some server methods.

#### Example:

````javascript
SignalRService.init('helloWorldHub', function() { console.log("Connection started"); });
````

### addHandler(handlerName, handlerFunction)
Add client-side handler that can be invoked from server. ***You can add any Angular logic to handler, and it will be updated, because every handler wrapped in $rootScope.$apply().***

This function has 2 parameters:

* **handlerName**: The handler function name for server.
* **handlerFunction**: It's a handler function.

#### Example:

````javascript
SignalRService.addHandler('helloWorld', function() { alert("Hello world!"); });
````

### invoke(serverMethodName, params)
Invoking server method from client.

* **serverMethodName**: The server method name
* **optional server method parameters**: server methods parameters

#### Example:

````javascript
SignalRService.invoke('Login');
````
````javascript
SignalRService.invoke('SendMessage', 'someString');
````

## Contributing

You can contribute! If you have any questions don't afraid to ask!

# FAQ

#### How can I set baseUrl with a port?

Now, you can't. Contributors are welcome!

#### Why does this depend on JQuery.SignalR?

It's simple wrapper for AngularJS, and JQuery.SignalR do all the staff to communicate to server.

# Supported Angular versions

Angular-SignalR supports all angular versions including 1.0.X, 1.1.X and 1.2.X (1.2.4 being the current at the time)

# License

The MIT License

Copyright (c) 2015 Ilya Pirozhenko http://www.sochix.ru/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
