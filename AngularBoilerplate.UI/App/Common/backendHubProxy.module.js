(function () {
    'use strict';
    //console.log("backendHubProxy Service file.");
    var module = angular.module('backendHubProxy', []);
    module.factory('hubProxy', backendHubProxy);

    
    backendHubProxy.$inject = ['$rootScope', '$timeout'];
    function backendHubProxy($rootScope, $timeout) {
        function backendFactory(serverUrl, hubName, groupName, connectionCallback) {
            var connection = $.hubConnection(serverUrl);
            var proxy = connection.createHubProxy(hubName);
            var autoReconnect = true;

            var invokeFunc = function (methodName, data, callback) {
                proxy.invoke(methodName, data)
                .done(function (result) {
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback(result);
                        }
                    });
                })
            };

            var joinGroup = function () {
                if (groupName != null) {
                    invokeFunc("joinGroup", groupName, function () {
                        //console.log("Joined Group: " + groupName);
                        if (connectionCallback) {
                            //console.log('calling connection callback...');
                            connectionCallback();
                        }
                    });
                }
            }

            connection.start(joinGroup);
            connection.reconnected(joinGroup);
            connection.disconnected(function () {
                if (!autoReconnect) {
                    console.log("%s: Disconnected, not auto re-connecting.", hubName);
                    return;
                }
                console.log("Reconnecting in 5 seconds...");
                setTimeout(function () {
                    console.log("attempting to reconnect now..");
                    connection.start(joinGroup);
                }, 5000); // Restart connection after 5 seconds.
            });

            connection.stateChanged(function (change) {
                if ($.signalR.connectionState.disconnected) {
                    console.log("Disconnected: %s: %s", hubName, groupName);
                }
                if (change.newState === $.signalR.connectionState.reconnecting) {
                    console.log("Re-connecting: %s: %s", hubName, groupName);
                }
                else if (change.newState === $.signalR.connectionState.connected) {
                    console.log("Connected: %s: %s", hubName, groupName);
                }

            });

            var disconnectFunct = function () {
                autoReconnect = false;
                connection.stop();
            }

            return {
                on: function (eventName, callback) {
                    proxy.on(eventName, function (result) {
                        $rootScope.$broadcast('loading-started');
                        $rootScope.$apply(function () {
                            if (callback) {
                                callback(result);
                            }
                            $timeout(function () {
                                $rootScope.$broadcast('loading-complete');
                            }, 50);
                        });
                    });
                },
                invoke: invokeFunc,
                disconnect: disconnectFunct
            };
        };
        return backendFactory;
        
    }
}());