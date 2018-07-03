(function () {
    "use strict";

    var module = angular.module("boilerplateModule", ["ngComponentRouter", "loadingIndicator", "backendHubProxy", "stopsRepoService", "localStorageService"]);
    module.config(function ($locationProvider) {
        //$locationProvider.html5Mode(!BoilerplateApp.isIE); //set HTML5 mode if the browser isn't IE
        //TODO: fix...
        $locationProvider.html5Mode(false); //set HTML5 mode if the browser isn't IE
    })

    module.value("$routerRootComponent", "boilerplateAppRoot");

}());