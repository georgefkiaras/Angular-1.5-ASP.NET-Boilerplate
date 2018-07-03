(function () {

    var module = angular.module("boilerplateModule");
    var controller = function (hubProxy, stopsRepo, localStorage) {
        var model = this;
        model.autoReconnect = true;
        model.filterObj = new Object();

        model.time = "--:--:--.---";
        var timeHub = hubProxy('../../', 'signalHub', 'clock');
        timeHub.on("ping", function (data) {
            model.time = data.ServerTime;
            model.dayOfTheWeek = data.DayOfTheWeek;
            model.month = data.Month;
            model.date = data.Date;
            model.year = data.Year;
            model.tic = data.Tic;
            model.toc = !data.Tic;
        });

        model.$routerOnDeactivate = function () {
            timeHub.disconnect();
        }

        var key = "stops";
        model.stops = localStorage.getObject(key);

        stopsRepo.getStops().then(function (data) {
            model.stops = data;
            localStorage.setObject(key, data);
            console.log("Got stops and updated local storage.");
        });

    };

    module.component("stops", {
        templateUrl: "boilerplateApp/Components/stops.component.html",
        controllerAs: "model",
        controller: ['hubProxy', 'stopsRepo', 'localStorage', controller]
    });

}());