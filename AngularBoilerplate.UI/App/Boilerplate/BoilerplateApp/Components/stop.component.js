(function () {

    var module = angular.module("boilerplateModule");
    console.log("Stop file.");
    var controller = function (hubProxy, stopsRepo) {
        var model = this;
        console.log("stop controller.");
        var signalHub = null;
        model.advisories = new Array();
        model.$routerOnActivate = function (next, previous) {
            model.id = next.params.id;
            getStop();
            //var signalRGroup = 'subwayStop' + model.id;
            //signalHub = hubProxy('../../', 'transitHub', signalRGroup, function () {
            //    if (model.stop != null) {
            //        getRealTimeUpdates();
            //    }
                
            //});
            //bindRealTimeUpdates(); //TODO: oninit or similar style?  This is strange.
        };

        //var bindRealTimeUpdates = function () {
        //    signalHub.on("dynamicUpdate", function (data) {
        //        //console.log("SignalR Dynamic Update", data);
        //        bindStationUpdates(data);
        //    });
        //    signalHub.on("stationUpdate", function (data) {
        //        //console.log("SignalR Station Update", data);
        //        bindStationData(data);
        //    });
        //}

        //var bindStationUpdates = function (data) {
        //    if (model.stop == null || model.stop.ChildStations == null) {
        //        return;
        //    }
        //    for (i = 0; i < model.stop.ChildStations.length; ++i) {
        //        var childStation = model.stop.ChildStations[i];
        //        if (childStation.Id == data.StationID) {
        //            childStation.DynamicUpdates = data.DynamicUpdates;
        //            childStation.DynamicUpdatesByLine = data.DynamicUpdatesByLine;
        //            childStation.DynamicTime = data.DynamicTime;
        //            childStation.DynamicLocalTime = data.DynamicLocalTime;
        //            childStation.AveragesByLine = data.AveragesByLine;
        //        }
        //    }
        //}
        
        //var getRealTimeUpdates = function () {
        //    if (model.stop.ChildStations == null || model.stop.ChildStations.length == 0) {
        //        return;
        //    }
        //    for (i = 0; i < model.stop.ChildStations.length; i++) {
        //        var childStation = model.stop.ChildStations[i];
        //        subwayRepo.getDynamicUpdates(childStation.Id).then(function (data) {
        //            bindStationUpdates(data);
        //        });
        //    }
        //}

        //model.time = "--:--:--.---";
        //var timeHub = hubProxy('../../', 'transitHub', 'clock');
        //timeHub.on("ping", function (data) {
        //    model.time = data.ServerTime;
        //    model.dayOfTheWeek = data.DayOfTheWeek;
        //    model.month = data.Month;
        //    model.date = data.Date;
        //    model.year = data.Year;
        //    model.tic = data.Tic;
        //    model.toc = !data.Tic;
        //});

        //model.$routerOnDeactivate = function () {
        //    timeHub.disconnect();
        //    signalHub.disconnect();
        //}

        //model.setMapType = function (mapType) {
        //    if (mapType == "OSM") {
        //        model.map.setMapTypeId("OSM");
        //    }
        //    else {
        //        model.map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
        //    }
        //}

        var getStop = function () {
            stopsRepo.getStop(model.id).then(function (data) {
                model.stop = data;
                console.log(model.stop);
            });
        };

        //var bindStationData = function (data) {
        //    model.stop = data;
        //    getRealTimeUpdates();
        //    if (model.markers == null) {
        //        model.center = new Object();
        //        model.center.latitude = model.stop.Latitude;
        //        model.center.longitude = model.stop.Longitude;
        //        model.center.title = model.stop.Name;

        //        //we only have one marker in this case, so use the center point
        //        model.markers = new Array();
        //        model.markers.push(model.center);
        //    }

        //    subwayRepo.getStopAdvisories(model.stop.Id).then(function (data) {
        //        model.advisories = data;
        //    });

        //}


    };

    module.component("stop", {
        templateUrl: "BoilerplateApp/Components/stop.component.html",
        controllerAs: "model",
        controller: ['hubProxy', 'stopsRepo', controller]
    });

}());