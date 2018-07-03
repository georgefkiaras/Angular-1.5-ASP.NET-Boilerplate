(function () {
    "use strict";

    var module = angular.module("boilerplateModule");
    console.log("boilerplate root.");
    module.component("boilerplateAppRoot", {
        templateUrl: "boilerplateApp/boilerplate-app-root.component.html",
        $routeConfig: [
            { path: "/stops", component: "stops", name: "Stops" },
            { path: "/stop/:id", component: "stop", name: "Stop" },
            { path: "/**", redirectTo: ["Stops", ""] }
        ]
    });
}());