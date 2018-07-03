(function () {
    //console.log("local storage service.");
    var module = angular.module("localStorageService", []);
    module.service("localStorage", localStorage);

    'use strict';
    //TODO: expanded functions for local storage..?
    localStorage.$inject = ['$window'];
    function localStorage($window) {
        var getObject = function (key) {
            var objectJson = $window.localStorage.getItem(key);
            if (objectJson == null) {
                return null;
            }
            try {
                return JSON.parse(objectJson);
            }
            catch (err) {
                console.log(err);
                return null;
            }

        };

        var setObject = function (key, object) {
            $window.localStorage.setItem(key, JSON.stringify(object));
        }
        

        return {
            getObject: getObject,
            setObject: setObject
        };
    }


}());

