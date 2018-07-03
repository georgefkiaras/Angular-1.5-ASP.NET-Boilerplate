(function () {

    var module = angular.module("boilerplateModule");
    var controller = function (hubProxy, stopsRepo, localStorage, Hub, $rootScope, $timeout) {
        var model = this;
        model.autoReconnect = true;
        model.filterObj = new Object();

        //console.log("stops route controller now loaded.");
        //model.time = "--:--:--";
        ////https://github.com/JustMaier/angular-signalr-hub
        //var hubOptions = {
        //    listeners: {
        //        'ping': function (data) {
        //            $rootScope.$broadcast('loading-started');
        //            model.time = data.ServerTime;
        //            $rootScope.$apply();
        //            $timeout(function () {
        //                $rootScope.$broadcast('loading-complete');
        //            }, 50);
        //        }
        //    },
        //    rootPath: '../../SignalR',
        //    useSharedConnection: false,
        //    methods: ['joinGroup'],
        //    stateChanged: function (state) {
        //        switch (state.newState) {
        //            case $.signalR.connectionState.connecting:
        //                console.log("SignalR connecting...");
        //                break;
        //            case $.signalR.connectionState.connected:
        //                console.log("SignalR connected.");
        //                hubConnected();
        //                break;
        //            case $.signalR.connectionState.reconnecting:
        //                console.log("SignalR reconnecting...");
        //                break;
        //            case $.signalR.connectionState.disconnected:
        //                console.log("SignalR disconnected.");
        //                hubDisconnected();
        //                break;
        //        }
        //    }
        //};

        //var hub = new Hub('transitHub', hubOptions);

        //var hubConnected = function () {
        //    //console.log("joining clock group...");
        //    hub.joinGroup("clock");
        //}

        //var hubDisconnected = function () {
        //    if (model.autoReconnect) {
        //        console.log("Reconnecting in 5 seconds...");
        //        $timeout(function () {
        //            hub.connect();
        //        }, 5000);
        //    }

        //}

        //model.$routerOnDeactivate = function () {
        //    model.autoReconnect = false;
        //    hub.disconnect();
        //}

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
        controller: ['hubProxy', 'stopsRepo', 'localStorage', 'Hub', '$rootScope','$timeout', controller]
    });

}());