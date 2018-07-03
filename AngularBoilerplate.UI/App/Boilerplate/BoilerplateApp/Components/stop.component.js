(function () {

    var module = angular.module("boilerplateModule");
    var controller = function (hubProxy, stopsRepo) {
        var model = this;
        var signalHub = null;
        model.advisories = new Array();
        model.$routerOnActivate = function (next, previous) {
            model.id = next.params.id;
            getStop();
        };


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

        var getStop = function () {
            stopsRepo.getStop(model.id).then(function (data) {
                model.stop = data;
            });
        };
    };

    module.component("stop", {
        templateUrl: "BoilerplateApp/Components/stop.component.html",
        controllerAs: "model",
        controller: ['hubProxy', 'stopsRepo', controller]
    });

}());