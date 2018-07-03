using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Timers;
using System.Web;
using System.Web.Hosting;
using AngularBoilerplate.UI.Models;

namespace AngularBoilerplate.UI.Controllers.SignalR
{
    public class SignalMessaging : IRegisteredObject
    {
        private Timer SecondTimer;
        private static bool Tic; //Co-ordinated "Tic-Toc"

        IHubContext _signalHubContext;
        public IHubContext SignalHubContext
        {
            get
            {
                if (_signalHubContext == null)
                {
                    _signalHubContext = GlobalHost.ConnectionManager.GetHubContext<SignalHub>();
                }
                return _signalHubContext;
            }
        }

        public SignalMessaging()
        {
            HostingEnvironment.RegisterObject(this);
            Tic = false;
            SecondTimer = new Timer(990);
            SecondTimer.Elapsed += SecondTimer_Elapsed;
            SecondTimer.AutoReset = true;
            SecondTimer.Enabled = true;
        }

        void SecondTimer_Elapsed(object sender, ElapsedEventArgs e)
        {
            SignalHubContext.Clients.Group("clock").ping(new ClockResult(Tic));
            Tic = !Tic;
        }

        public void Stop(bool immediate)
        {
            SecondTimer.Dispose();
            HostingEnvironment.UnregisterObject(this);
        }
    }
}