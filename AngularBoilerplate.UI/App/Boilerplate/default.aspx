<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="AngularBoilerplate.UI.App.Boilerplate._default" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Angular Boilerplate</title>
    <base href="/App/Boilerplate/" />
    <link rel="stylesheet" href="dist/libraries.css">
    <link rel="stylesheet" href="css/site.css">


    <style type="text/css">
        .ng-cloak {
            display: none;
        }

    </style>
    <script>
        var BoilerplateApp = BoilerplateApp || {};
        BoilerplateApp.isIE = false;
        if (navigator.userAgent.indexOf('MSIE') !== -1
            || navigator.appVersion.indexOf('Trident/') > 0) {
            BoilerplateApp.isIE = true;
        }
    </script>

</head>
<body ng-app="boilerplateModule">
    <div class="app-container" ng-cloak>
        <boilerplate-app-root id="boilerplateApp"></boilerplate-app-root>
    </div>
    <div class="container" id="siteFooter">
        <hr />
        <footer>
            <p>&copy; <%=DateTime.Now.Year %> juniuslabs</p>
        </footer>
    </div>
    <script src="dist/libraries.js"></script>


    <script src="../../signalr/hubs"></script>

    <%if (!DevMode)
        { %>

    <script src="dist/app.min.js"></script>

    <%} %>

    <%if (DevMode)
        { %>

    <script src="../Common/loading-indicator.module.js"></script>
    <script src="../Common/backendHubProxy.module.js"></script>
    <script src="../Common/stops.repo.service.js"></script>
    <script src="../Common/localStorage.service.js"></script>

    <script src="BoilerplateApp/module.js"></script>
    <script src="BoilerplateApp/boilerplate-app-root.component.js"></script>
    <script src="BoilerplateApp/Components/stops.component.js"></script>
    <script src="BoilerplateApp/Components/stop.component.js"></script>

    <%} %>


</body>
</html>
